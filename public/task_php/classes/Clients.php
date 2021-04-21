<?
class Clients{
    
  static function handlerReg(){
    global $mysqli;
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = trim(mb_strtolower($_POST['email']));
    $pass = trim($_POST['pass']);
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    $result = $mysqli->query("SELECT id FROM `clients` WHERE `email`='$email'");
  if($result->num_rows){
    echo json_encode(['result'=>'exist']);
  }else{
    $mysqli->query("INSERT INTO `clients`(`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
    echo json_encode(['result'=>'success']);
    }
  }
  
  static function handlerAuth(){
    global $mysqli;
    header("Access-Control-Allow-Origin: http://localhost:3000");
	header('Access-Control-Allow-Credentials: true');
    session_start();
    $email = trim(mb_strtolower($_POST['email']));
    $pass = trim($_POST['pass']);
    $result = $mysqli->query("SELECT * FROM `clients` WHERE `email`='$email'");
    $row = $result->fetch_assoc(); //Преобразуем ответ от базы данных в массив
    //var_dump($row);
  if(password_verify($pass,$row['pass'])){
        $_SESSION['name'] = $row['name'];
        $_SESSION['lastname'] = $row['lastname'];
        $_SESSION['email'] = $row['email'];
        $_SESSION['id'] = $row['id'];
        echo json_encode(['result'=>'success']);
  }else{
        echo json_encode(['result'=>'error']);
    }
  }
  
    static function checkReg(){
    global $mysqli;  
    $email = trim(mb_strtolower($_POST['email']));
    if($result->num_rows){
      echo json_encode(['result'=>'exist']);
    }else{
      echo json_encode(['result'=>'not found']);
   }
 }
  
  static function handlerChangeUserData(){
    global $mysqli;
    session_start();
    $value = $_POST['value'];
    $item = $_POST['item']; // Тут либо lastname либо name, (либо пароль?)
    $id = $_SESSION['id'];
    $mysqli->query("UPDATE `clients` SET `$item`='$value' WHERE `id`=$id");
    $_SESSION[$item] = $value;
    echo json_encode(['result'=>'success']);
  }

  static function getUser(){
    global $mysqli;
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Credentials: true');
    session_start();
    if(!empty($_SESSION['id'])){
		$id = $_SESSION['id'];
		$result = $mysqli->query("SELECT * FROM clients WHERE id='$id'");
		echo json_encode($result->fetch_assoc());
	}else{
		echo json_encode(['result'=>'error']);
	}
  }	
}  
?>
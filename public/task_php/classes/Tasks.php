<?
class Task{
    
  static function getTasks(){
      global $mysqli;
      $result = $mysqli->query("SELECT tasks.id, tasks.title, tasks.text, tasks.date_added FROM `tasks`,`clients` WHERE clients.id = tasks.userid"); // Запрашиваем все посты из БД
      $tasks = [];
      while($row = $result->fetch_assoc()){
        $tasks[] = $row;
      }
      echo json_encode($tasks);
  }
  
  static function getTask($id){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM tasks WHERE id=$id"); 
    echo json_encode($result->fetch_assoc());
  }
  
  static function addTask($title,$text){
    global $mysqli;
    $title = $_POST['title'];
    $text = $_POST['text'];
    $mysqli->query("INSERT INTO `tasks`(`title`, `text`) VALUES ('$title','$text')");
    echo json_encode(['result'=>'success']);
  }
  
  static function removeTask($id){
    global $mysqli;
    $id = $_POST['id'];
    $mysqli->query("DELETE FROM `tasks` WHERE id=$id;");
    echo json_encode(['result'=>'success']);
  }
  
  static function changeTask(){
    global $mysqli;
    session_start();
    $value = $_POST['value'];
    $item = $_POST['item']; 
    $id = $_SESSION['id'];
    $mysqli->query("UPDATE `tasks` SET `$item`='$value' WHERE `id`=$id");
    $_SESSION[$item] = $value;
    echo json_encode(['result'=>'success']);
  }    
}
?>
<?
  header("Access-Control-Allow-Origin: *");
  header('Content-type: text/html; charset=utf-8');
  $uri = explode('/',$_SERVER["REQUEST_URI"]);
  require_once('task_php/db.php'); // Параметры подключения к БД
  require_once('task_php/classes/Tasks.php');
  require_once('task_php/classes/Clients.php');
  if($uri[1]=='getTasks'){
    Tasks::getTasks();
  }else if($uri[1]=='getTask'){
    Tasks::getTask($_POST['id']); //?
  }else if($uri[1]=='addTask'){
    Tasks::addTask($_POST['title'],$_POST['text']);
  }else if($uri[1]=='removeTask'){
    Tasks::removeTask($_POST['id']);
  }else if($uri[1]=='changeTask'){ //?
    Tasks::changeTask();
  }else if($uri[1]=='handlerReg'){  // работает
    Clients::handlerReg();             
  }else if($uri[1]=='handlerAuth'){ // работает
    Clients::handlerAuth();
  }else if($uri[1]=='handlerChangeUserData'){
    Clients::handlerChangeUserData();
  }else if($uri[1]=='checkReg'){  // не работает
    Clients::checkReg();
  }else if($uri[1]=='getUser'){ 
    Clients::getUser();    
  }else{
    require_once("index.html");
  }
  
?>
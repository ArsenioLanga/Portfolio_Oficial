 <?php
  if(method_exists("post")){
      echo $_POST('nome'), $_POST('email');
      dia();
  }
<?php

class loginController extends controller
{
    public function __construct(){
     parent::__construct();
    }
  
    public function index()
    {  
            $dados = array('erro'=>'');
 // Verifica se esta apontando e nao esta vazios
        if (isset($_POST['email']) &&  empty($_POST['email'])==false) {
          

                  $email = addslashes($_POST['email']); //proteger de sql injection
                  $senha = md5(addslashes($_POST['senha']));

                  $u = new Usuarios();
             $dados['erro']=$u->doLogin($email,$senha);
                         
                  }
                              $this->loadView('login',$dados);  
    }

public function sair(){
      unset($_SESSION['nutricaolg']);
      header("Location:".BASE_URL);

   }    

}
    
    
    
    
    



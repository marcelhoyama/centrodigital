<?php
class menuPrincipalController extends controller{


 public function __construct(){
 	parent::__construct();
  $u = new usuarios();
        $u->verificarLogin();
 }
    
    public function index() {
        $dados = array();

        $u = new usuarios();
        $u->setlogado();
        
          if (isset($_POST['nomelocaven']) && (!empty($_POST['nomelocaven']))) {
            $nome= addslashes($_POST['nomelocaven']);
            $estadocivil = addslashes($_POST['estadocivil']);
            $profissao = addslashes($_POST['profissaolocaven']);
            
        }
        $this->loadTemplate('menuPrincipal', $dados);
    }
    
    
}
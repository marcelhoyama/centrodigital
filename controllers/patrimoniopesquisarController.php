<?php

class patrimoniopesquisarController extends controller{
// construct paRA CHAMAR banco de dados 
    public function __construct (){

    	parent::__construct();

// essa pagina precisa estar logado para acessar 
$u = new Usuarios();
    	$u->verificarLogin();
    
    	 
    }
    
    
    public function index(){
        
        $dados = array('erro'=>'');
        $pesquisa='';
        if(!empty($_GET['pesquisa']) && isset ($_GET['pesquisa'])){
            $pesquisa = addslashes($_GET['pesquisa']);
            
              
          $c = new Clientes();
        $dados['listaclientes']=$c->getListTodosPatrimonio($pesquisa);
      
        }
      
              
         
        
        $u = new Usuarios();

$dados['usuario_nome'] =$u->getNome($_SESSION['loged']);
$dados['clinica_nome']='';
       $this->loadTemplate('clientepesquisar', $dados);
    
}
}
?>
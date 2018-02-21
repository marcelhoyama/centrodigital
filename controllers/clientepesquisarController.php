<?php

class clientepesquisarController extends controller{
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
         $c = new Clientes();
        if(!empty($_GET['pesquisa']) && isset($_GET['pesquisa'])){
            $pesquisa = addslashes($_GET['pesquisa']);
            
              
                 $dados['listaclientes']=$c->getListTodosClientes($pesquisa);
      
        }  elseif (empty($_GET['pesquisa'])){
        $dados['erro']= "Preencha o Campo!" ;
        }else{
              $dados['erro']= 'Nada encontrado!' ;  
        }
            
      
              
         
      
   $u = new usuarios();
        
        $dados['nome']= $_SESSION['nome_usuario'];
        

$dados['clinica_nome']='';
       $this->loadTemplate('clientepesquisar', $dados);
    
}
}
?>
<?php

class funcpesquisarController extends controller{
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
         $u = new Usuarios();
        if(!empty($_GET['pesquisa']) && isset ($_GET['pesquisa'])){
            $pesquisa = addslashes($_GET['pesquisa']);
            
                
          
        $dados['listausuarios']=$u->getListUsuarios($pesquisa);  
      
        
        
        }  elseif (empty($_GET['pesquisa'])){
        $dados['erro']= "Preencha o Campo!" ;
        }else{
              $dados['erro']= 'Nada Encontrado!' ;  
        }
        
          
        
        $dados['nome']= $_SESSION['nome_usuario'];
        

       $this->loadTemplate('funcpesquisar', $dados);
    }
}
?>
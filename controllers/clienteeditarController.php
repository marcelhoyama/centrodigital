<?php

class clienteeditarController extends controller {
    // construct paRA CHAMAR banco de dados 
    public function __construct (){

    	parent::__construct();

// essa pagina precisa estar logado para acessar 
$u = new Usuarios();
    	$u->verificarLogin();
    
    	 
    }
    public function index() {
        
$dados = array('erro'=> '');
$u= new Clientes();
    if(isset($_GET['id']) && !empty($_GET['id'])){
        

        $dados['dadosCliente'] = $u->getDados($_GET['id']);

    } else{
                      if (isset($_POST['nome'])  && !empty($_POST['nome'])){
                            $nome = addslashes($_POST['nome']);
                            $cpf = addslashes($_POST['cpf']);
                            $profissao = addslashes($_POST['profissao']);
                            $estadocivil = addslashes($_POST['estadocivil']);
                            $rg = addslashes($_POST['rg']);
                             $tipodenominacao = addslashes($_POST['tipodenominacao']);
                             
                             $endereco = addslashes($_POST['endereco']);
                             $bairro = addslashes($_POST['bairro']);
                             $cidade = addslashes($_POST['cidade']);
                             $estado = addslashes($_POST['estado']);
                             $telefone = addslashes($_POST['telefone']);
                             $complemento = addslashes($_POST['complemento']);
                            
                 // se foi enviado formulario
                 // ver se os dados foram preenchidos
                         if (!empty($nome) && !empty($celular)) {

                                                //verifica se existe no banco
                                                $p = new Clientes();

                                                if ($p->pacienteExisteExiste($email)) {
                                    //se existe pega os dados para alterar no banco
                                                    $_SESSION['nutricaolg'] = $u->editarUsuario( $id = $_SESSION['nutricaolg'],$nome,$celular);

                                                    $dados['erro']="Alterado com sucesso!";
                                                    //header("Location:" . BASE_URL . "menuprincipal");
                                                    } else {

                                                        $dados['erro'] = " Dados já existe!";
                                                    }
                             } else {

                                 $dados['erro'] = "Preencha todos os campos!";
                             }

                         }// if post

                         }
                $dados['nome'] =$_SESSION['nome_usuario'];
                $e = new Enderecos($_GET['id']);
                $dados['listaEndereco']=$e->getEnderecosCliente();

        $this->loadTemplate('clienteeditar', $dados);
       
    } // index
} //class

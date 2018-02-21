<?php

class funceditarController extends controller {
    public function index() {
        
$dados = array('erro'=> '');

    if(isset($_GET['id']) && !empty($_GET['id'])){
        $u= new Usuarios();

        $dados['dadosUsuario'] = $u->getDados($_GET['id']);

    } else{
                      if (isset($_POST['nome'])  && !empty($_POST['nome'])){
                            $nome = addslashes($_POST['nome']);
                            $celular = addslashes($_POST['usuario_celular']);
                             // $cpf = addslashes($_POST['usuario_cpf']);
                             $status = addslashes($_POST['usuario_status']);
                            
                 // se foi enviado formulario
                 // ver se os dados foram preenchidos
                         if (!empty($nome) && !empty($celular)) {

                                                //verifica se existe no banco
                                                $u = new Usuarios();

                                                if ($u->usuarioExiste($email)) {
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
                $dados['usuario_nome'] =$u->getNome($_SESSION['nutricaolg']);
                $dados['clinica_nome']=$u->getClinica();

        $this->loadTemplate('funceditar', $dados);
       
    } // index
} //class

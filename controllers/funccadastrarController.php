<?php

class funccadastrarController extends controller {

    public function index() {


        $dados = array('erro'=> '');
        
        if (isset($_POST['nome'])  && !empty($_POST['nome'])){
               $nome = addslashes($_POST['nome']);
            $email = addslashes($_POST['email']);
            $senha = md5(addslashes($_POST['senha']));
            // $usuario_funcao = $_POST['usuario_funcao'];
          //  $sexo = addslashes($_POST['sexo']);
         //   $telefone = addslashes($_POST ['usuario_telefone']);
          //  $celular = addslashes($_POST['celular']);
           // $cpf = addslashes($_POST['usuario_cpf']);
           // $status = addslashes($_POST['usuario_status']);
           // $setor = addslashes($_POST['usuario_setor']);
         //   $identificacao = addslashes($_POST['usuario_identificacao']);

        
// se foi enviado formulario
// ver se os dados foram preenchidos
        if (!empty($nome) && !empty($email) && !empty($senha)) {
         
         

            //verifica se existe no banco
            $f = new usuarios();

            if (!$f->usuarioExiste($email)) {

                $_SESSION['loged'] = $f->cadastrarUsuario($nome, $email, $senha);

                $dados['erro']="Cadastrado com sucesso! Aguarde o Administrador Liberar!";
                header("Location:" . BASE_URL . "menuPrincipal");
            } else {

                $dados['erro'] = " Este E-mail já existe!";
            }
        } else {

            $dados['erro'] = "Preencha todos os campos!";
        }

        }
$u = new Usuarios();

$dados['nome']= $u->getNome($_SESSION['login_id']);

        $this->loadTemplate('funccadastrar', $dados);
    }

}

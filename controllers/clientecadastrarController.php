<?php

class clientecadastrarController extends controller {
// construct paRA CHAMAR banco de dados 
    public function __construct (){

    	parent::__construct();

// essa pagina precisa estar logado para acessar 
$u = new Usuarios();
    	$u->verificarLogin();
    
    	 
    }
    public function index() {


        $dados = array('erro'=> '');
        
        if (isset($_POST['nome'])  && !empty($_POST['nome'])){
               $nome = addslashes($_POST['nome']);
            $email = addslashes($_POST['email']);
            //$senha = md5(addslashes($_POST['senha']));
            $endereco = addslashes($_POST['endereco']);
            $sexo = addslashes($_POST['sexo']);
            $bairro = addslashes($_POST ['bairro']);
            $celular = addslashes($_POST['celular']);
            $cpf = addslashes($_POST['cpf']);
            //$status = addslashes($_POST['usuario_status']);
            $cidade = addslashes($_POST['cidade']);
            $estado = addslashes($_POST['estado']);
           $cep = addslashes($_POST['cep']);

        
// se foi enviado formulario
// ver se os dados foram preenchidos
        if (!empty($nome) && !empty($celular) && !empty($cpf)) {
         
         

            //verifica se existe no banco
            $p = new Pacientes();

            if (!$p->pacienteExisteCpf($cpf)) {

                $_SESSION['loged'] = $p->cadastrarPaciente($cpf, $nome, $sexo, $celular, $endereco, $bairro, $cidade, $estado, $cep);

                $dados['erro']="Cadastrado com sucesso!";
                header("Location:" . BASE_URL . "menuprincipal");
            } else {

                $dados['erro'] = " Este CPF já existe em nosso dados!";
            }
        } else {

            $dados['erro'] = "Preencha todos os campos!";
        }

        }
$u = new Usuarios();

$dados['nome']= $u->getNome($_SESSION['login_id']);
$dados['clinica_nome']='';
        $this->loadTemplate('clientecadastrar', $dados);
    }

}

<?php

class Usuarios extends model {
// private só aparece nessa classe
 private $userInfo;
 

//metodo ver se usuario esta logado ou se nao direciona para logar 
    public function verificarLogin() {
        // verifica se nao existir session ou se existir e esta vazio  a session
        if (!isset($_SESSION['login_id']) || (isset($_SESSION['login_id']) && empty($_SESSION['login_id']))) {
            header("Location:" . BASE_URL . "login");
            exit;
        }
    }

  /*  //metodo para saber nome de quem esta logado
    public function setlogado() {
        if (isset($_SESSION['loged']) && (!empty($_SESSION['loged']))) {
            $id = $_SESSION['loged'];
            $sql = "SELECT * FROM usuarios WHERE id = '" . $id . "'";
            $sql = $this->db->query($sql);
                    if ($sql->rowCount() > 0) {
                        $this->userInfo = $sql->fetch();
                 
                     }
        }
    }
*/
    

    //metodo para validar o usuario para o sitema
    public function doLogin($email, $senha) {
        try {// tratar erro do sistema
            // Valida no banco o registro/senha
             $sql = "SELECT * FROM usuarios WHERE email = '" . $email . "' AND senha = '" . $senha . "' "; //limit 1 pega somente um registro
             $sql = $this->db->query($sql);
             if ($sql->rowCount() > 0) {
                $dado = $sql->fetch(); //pega o primeiro resultado da lista
                $_SESSION['login_id'] = $dado['id'];
                $_SESSION['nome_usuario'] = $dado['nome'];
                $status=$dado['status'];
               
               
                
                 if(!empty($status)){
                        if($status=="ativo"){
                    
                         header("Location:" . BASE_URL . "menuPrincipal");
                          exit;
                    }else{
                         
                        return "Bloqueado! Verificar com a Administração!";
                    }
                   
                }
               
            } else {
                return "Email e/ou senha errados!";
            }
        } catch (PDOException $e) {

            echo "Falhou dologin:" . $e->getMessage();
        }
    }

    //metodo para verificar se o usuario existe
    public function usuarioExiste($email) {
        $sql = "SELECT * FROM usuarios WHERE email='" . $email . "'";
        $sql = $this->db->query($sql);
        if ($sql->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    //metodo para listar usuarios
    public function getListUsuarios($pesquisa) {
      $array = array();
        if (!empty($pesquisa)) {

            $sql = "SELECT * FROM usuarios WHERE nome LIKE'%" . $pesquisa . "%' OR email LIKE'%" . $pesquisa . "%' ";
            $sql = $this->db->query($sql);
            if ($sql->rowCount() > 0) {
                $array = $sql->fetchAll();
            }
        }
        return $array;
    }
        
    
    
    //metodo para cadastrar usuario com tempo de validar (uma semana de prazo)
    public function cadastrarUsuario($nome, $email, $senha) {
        
        $sql = "INSERT INTO usuarios SET nome='" . $nome . "', email='" . $email . "', senha='" . $senha . "',status='Inativo'";
        $sql = $this->db->query($sql);
        $id = $this->db->lastInsertId();
        $_SESSION['loged'] = $id;

        if ($sql->rowCount() > 0) {
        /*   $token = md5(time() . rand(0, 9999) . rand(0, 9999));
            $expirado = date('Y-m-d H:i', strtotime('+1 week'));
            $sql = "INSERT INTO usuarios_token (id_usuarios, hash, expirado) VALUES ('" . $id . "','" . $token . "','" . $expirado . "')";
            $sql = $this->db->query($sql);
            $link = BASE_URL . "confirmar?token=" . $token;
            $mensagem = "Clique no link para confirmar o cadastro:" . $link;
            $assunto = "Confirmação do cadastro";
            $headers = 'From: marecrisbr@gmail.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
            //mail($email, $assunto, $mensagem, $headers);
            echo $mensagem;
            exit; */
            return true;
        }
    }
    
    //metodo para validar o cadastro do usuario pelo login
/*       public function confirmarCadastro($token){
        $sql = "SELECT * FROM funcionarios_token WHERE hash = '" . $token . "' AND used = 0 AND expirado > NOW()";
        $sql = $this->db->query($sql);
        if ($sql->rowCount() > 0) {
            $sql = $sql->fetch();
            $id = $sql['id_funcionario'];
            $sql = "UPDATE funcionarios SET status = 'Ativo'  WHERE id = '" . $id . "'";
            $sql = $this->db->query($sql);
            if ($sql->rowCount() > 0) {
                $sql = "UPDATE funcionarios_token SET used = 1  WHERE hash = '" . $token . "'";
                $sql = $this->db->query($sql);
                if ($sql->rowCount() > 0) {
                    echo "Cadastro confirmado com sucesso!";
                    exit;
                }
            }
        } else {
            echo "expirado ou invalido!";
            exit;
        }
    }
    */
    //metodo administracao que pode editar usuario 
    public function editarUsuario (  $id,$nome, $email) {
      //verificar comando sql principalmente now data 
        $sql = "UPDATE usuarios SET nome='" . $nome . "', email='" . $email . "',celular='" . $celular . "',status='Inativo',data='".$data."' WHERE id ='".$id."' ";
        $sql = $this->db->query($sql);
        $id = $this->db->lastInsertId();
        $_SESSION['loged'] = $id;

        if ($sql->rowCount() > 0) {
           
            
            return true;
        }
    }

    public function getNome($id) {
  $array=array();
        $sql = "SELECT nome FROM usuarios WHERE id = '" . $id . "'";
        $sql = $this->db->query($sql);

        if ($sql->rowCount() > 0) {
            $sql = $sql->fetch();
            return $array=$sql['nome'];
        } else {
            return '';
        }
    }

    public function getDados($id) {

        $array = array();
        $sql = "SELECT nome FROM usuarios WHERE id = '" . $id . "'";
        $sql = $this->db->query($sql);

        if ($sql->rowCount() > 0) {
            $array = $sql->fetchAll();

            return $array;
        }
    }

    public function updatePerfil($array) {

        if (count($array) > 0) {
            $sql = "UPDATE usuarios SET ";

            $campos = array();
            foreach ($array as $campo => $valor) {
                $campos[] = $campo . "='" . $valor . "'";
            }

            $sql .= implode(',', $campos);

            $SQL .= " WHERE id = '" . ($_SESSION['loged']) . "'";

            $sql = $this->db->query($sql);
            return true;
        }else{
            return false;
            
        }
    }

 /*   public function esquecisenha($email) {



        $sql = "SELECT * FROM usuarios WHERE email = '" . $email . "' ";
        $sql = $this->db->query($sql);

        if ($sql->rowCount() > 0) {
            $sql = $sql->fetch();
            $id = $sql['id'];
            $token = md5(time() . rand(0, 9999) . rand(0, 9999));
            $expirado = date('Y-m-d H:i', strtotime('+1 months'));
            $sql = "INSERT INTO funcionarios_token (id_funcionario, hash, expirado) VALUES ('" . $id . "','" . $token . "','" . $expirado . "')";

            $sql = $this->db->query($sql);


            $link = BASE_URL . "redefinir?token=" . $token;
            $mensagem = "Clique no link para redefinir a senha:" . $link;
            $assunto = "Redefinição de Senha";
            $headers = 'From: marecrisbr@gmail.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

            //mail($email, $assunto, $mensagem, $headers);
            echo $mensagem;
            exit;
        }
    }

    public function redefinirSenha($token, $senha) {


        $sql = "SELECT * FROM funcionarios_token WHERE hash = '" . $token . "' AND used = 0 AND expirado > NOW()";

        $sql = $this->db->query($sql);


        if ($sql->rowCount() > 0) {


            $sql = $sql->fetch();
            $id = $sql['id_funcionario'];

            $sql = "UPDATE funcionarios SET senha = '" . $senha . "'  WHERE id = '" . $id . "'";

            $sql = $this->db->query($sql);
            if ($sql->rowCount() > 0) {

                $sql = "UPDATE funcionarios_token SET used = 1  WHERE hash = '" . $token . "'";

                $sql = $this->db->query($sql);
                if ($sql->rowCount() > 0) {
                    echo "Senha Alterado com sucesso!";
                    exit;
                }
            }
        } else {
            echo "token usado ou invalido!";
            exit;
        }
    }
    
    */
 

}

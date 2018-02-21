<?php

class menuPrincipalController extends controller {

    public function __construct() {
        parent::__construct();
        $u = new usuarios();
        $u->verificarLogin();
    }

    public function index() {
        $dados = array();

        $u = new usuarios();
        $dados['nome'] = $_SESSION['nome_usuario'];


        $this->loadTemplate('menuPrincipal', $dados);
    }

}

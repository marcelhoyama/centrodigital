<?php
class limpezasistemaController extends controller{


 public function __construct(){
 	parent::__construct();

 }
    
    public function index() {
        $dados = array();

       
        $this->loadTemplate('limpezasistema', $dados);
    }
    
    
}

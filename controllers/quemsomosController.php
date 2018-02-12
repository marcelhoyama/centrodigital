<?php
class quemsomosController extends controller{


 public function __construct(){
 	parent::__construct();

 }
    
    public function index() {
        $dados = array();

       
        $this->loadTemplate('quemsomos', $dados);
    }
    
    
}

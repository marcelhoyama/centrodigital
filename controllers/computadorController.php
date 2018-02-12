<?php
class computadorController extends controller{


 public function __construct(){
 	parent::__construct();

 }
    
    public function index() {
        $dados = array();

       
        $this->loadTemplate('computador', $dados);
    }
    
    
}

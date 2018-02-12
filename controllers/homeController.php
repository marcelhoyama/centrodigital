<?php
class homeController extends controller{


 public function __construct(){
 	parent::__construct();

 }
    
    public function index() {
        $dados = array();

       
        $this->loadView('home', $dados);
    }
    
    
}



<?php

class controller{

protected $db;
	
public function __construct() {
		try {
			// $this->db = new PDO('mysql:host=localhost;dbname=clinica_db', 'root', '');
     
		} catch (PDOException $e) {
			
		}
}

	
	
	public function loadView($viewName, $viewData = array()) {
		extract($viewData);
		include 'views/'.$viewName.'.php';
	}

	public function loadTemplate($viewName, $viewData = array()) {
		include 'views/template.php';
	}
        

	public function loadViewInTemplate($viewName, $viewData) {
		extract($viewData);
		include 'views/'.$viewName.'.php';
	}
}

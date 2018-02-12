<?php
class model
{
protected $db;

	public function __construct() {
		try {
			global $config;

			
		//	      $this->db = new PDO('mysql:host=localhost;dbname=clinica_db', 'root', '');
     
		$this->db = new PDO("mysql:dbname=".$config['dbname'].";host=".$config['host'], $config['dbuser'], $config['dbpass']);
		} catch (PDOException $e) {
			echo "ERRO:".$e->getMessage();
		}

		
	}


}
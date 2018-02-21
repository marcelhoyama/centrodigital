<?php

class Enderecos extends model {

    private $enderecoInfo = array();
    
  public function __construct($id){
	parent::__construct();


	$sql = " SELECT * FROM enderecos WHERE id_cliente = '".$id."'";

        	$sql = $this->db->query($sql);
        	
        	
        	
        	if($sql->rowCount() > 0) {
			$this->enderecoInfo = $sql->fetchAll();
		}
}

// pega o endereco do cliente especifico
public function getEnderecosCliente(){
$array= array();
	if(isset($this->enderecoInfo)) {

            
		return $array= $this->enderecoInfo;
	}
	else{
		return '';
	}
}


public function getEndereco(){
    $array = array();
    $sql= "SELECT * FROM clinicas";
    $sql = $this->db->query($sql);
    if($sql->rowCount() >0){
        $array=$sql->fetchAll();
        
    }
    return $array;
}

}


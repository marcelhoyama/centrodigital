<?php
class patrimonio extends model{

private $clinicaInfo = array();

public function __construct($id){
	parent::__construct();


	$sql = " SELECT * FROM patrimonio WHERE id_cliente = '".$id."'";

        	$sql = $this->db->query($sql);
        	
        	
        	
        	if($sql->rowCount() > 0) {
			$this->clinicaInfo = $sql->fetchAll();
		}
}


public function getTipoPatrimonio(){

	if(isset($this->clinicaInfo['tipo'])) {

		return $this->clinicaInfo['nome'];
	}
	else{
		return '';
	}
}

}
<?php 
 
 function inverteData(){
	 
	 form = getElementById(data).value;
	 if(count(explode("/",$data))>1){
				 return implode ("-",array_reverse(explode("/",$data)));
				 echo inverteData($usuario_data_cadastro);
				 }
				 elseif(count(explode("-",$data))>1){ 
				 return implode ("/",array_reverse(explode("-",$data)));
				 }
				 return $data;
		 }
echo '$data';
?>
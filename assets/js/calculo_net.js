
  
// calculo imc
function calcular_imc(){
try{
 
 var formulario=document.getElementById("form3");
 var formulario2=document.getElementById("calculoPeso");

 var peso = +formulario.peso.value;
  if (peso == '') peso = 0;
  
  var altura = +formulario.altura.value;
  if (altura == '') altura = 0;
  
  //calculo peso
  formulario2.peso2.value = peso;
formulario2.altura2.value = altura;
  
  var imc = peso /(altura * altura) ;
  

     formulario.net_imc.value=imc.toFixed(2);
	  formulario2.imc.value=imc.toFixed(2); //calculo peso
  
  var classificacao;
  if(imc <= 18.5) classificacao="baixo peso";
  if(imc > 18.5 && imc <= 24.9)  classificacao="eutrofico";
  if(imc >= 25 && imc <= 29.9) classificacao="risco de obesidade";
  if(imc >= 30 && imc <= 34.9) classificacao="obesoI";
  if(imc >= 35 && imc <= 39.9) classificacao="obesoII";
  if(imc >= 40) classificacao="obeso III";
  
  formulario.classificacao.value=classificacao;
  formulario2.classificacao2.value=classificacao; //calculo peso

  
  
  

  
// calculo necessidade total
 
//mulher
 var net_idade =+ formulario.net_idade.value;
   if (net_idade == '') net_idade = 0;
   
   	//calculo de peso
				// mostrar opçoes escolhida no necessidade energetica total
				 formulario2.sexo2.value=(document.getElementById("sexo").value);
formulario2.idade2.value = net_idade;
formulario2.fator_atividade.value = (document.getElementById("atividade_fisica").value);

 
   
   
   
   
 		if ((document.getElementById("sexo").value)=='mulher'){
			if((document.getElementById("net_idade").value) >=3 && (document.getElementById("net_idade").value) <=8) {
 				if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1 * ( 10 * peso + 934 * altura ) + 20 ;
				 var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 
				 formulario2.net.value = net1.toFixed(1);
				 
	 			}
	 		 	if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.16 * ( 10 * peso + 934 * altura ) + 20 ;
				 var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
					 
				 formulario.net_1ao6.value=net1.toFixed(2);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(2);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(2);
				 formulario2.net.value = net1.toFixed(2);
					 
				}
	  			if( (document.getElementById("atividade_fisica").value)=='ativo'){
  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.31 * ( 10 * peso + 934 * altura ) + 20 ;
				 var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
						 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
						 
				 }
				if( (document.getElementById("atividade_fisica").value)=='muito ativo'){
						  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.56 * ( 10 * peso + 934 * altura ) + 20 ;
				 var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
							 
				 formulario.net_1ao6.value=net1.toFixed(2);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(2);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(2);
				 formulario2.net.value = net1.toFixed(2);
							 
				}
			}

		 
//--------------------------------------------------------------------------------------------------------------

			if((document.getElementById("net_idade").value) >=9 && (document.getElementById("net_idade").value) <=18) {
	 			if((document.getElementById("atividade_fisica").value)=='sedentario'){
	  	  

					var net1 = (135.5 - 30.8 * net_idade )+ 1 * ( 10 * peso + 934 * altura ) + 25 ;
					var net_1ao6_menos2dp = net1 - 136;
					var net_1ao6_mais2dp = net1 + 136;
						 
					 formulario.net_1ao6.value=net1.toFixed(1);
					 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
					 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						 formulario2.net.value = net1.toFixed(1);
				}
				if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
						  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.16 * ( 10 * peso + 934 * altura ) + 25 ;
				 var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
							 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net1.toFixed(1);
				}
				if( (document.getElementById("atividade_fisica").value)=='ativo'){
							  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.31 * ( 10 * peso + 934 * altura ) + 25 ;
				 var net_1ao6_menos2dp = net1 - 136;	
				 var net_1ao6_mais2dp = net1 + 136;
								 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						formulario2.net.value = net1.toFixed(1);		 
				}
				if( (document.getElementById("atividade_fisica").value)=='muito ativo'){
								  	  

				 var net1 = (135.5 - 30.8 * net_idade )+ 1.56 * ( 10 * peso + 934 * altura ) + 25 ;
	     		var net_1ao6_menos2dp = net1 - 136;
				 var net_1ao6_mais2dp = net1 + 136;
									 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						formulario2.net.value = net1.toFixed(1);			 
				}
			}

		 
//--------------------------------------------------------------------------------------------------------------


			if((document.getElementById("net_idade").value) >19 ) {
	 			if((document.getElementById("atividade_fisica").value)=='sedentario'){
	  	  

				 var net1 = (354 - 6.91 * net_idade )+ 1 * ( 9.36 * peso + 726 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 324;
				 var net_1ao6_mais2dp = net1 + 324;
						 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
					formulario2.net.value = net1.toFixed(1);	 
				}
		  		if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
	  	  

				 var net1 =(354 - 6.91 * net_idade )+ 1.12 * ( 9.36 * peso + 726 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 324;
				 var net_1ao6_mais2dp = net1 + 324;
							 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net1.toFixed(1);
				}
				if( (document.getElementById("atividade_fisica").value)=='ativo'){
							  	  

				 var net1 = (354 - 6.91 * net_idade )+ 1.27 * ( 9.36 * peso + 726 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 324;
				 var net_1ao6_mais2dp = net1 + 324;
								 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							formulario2.net.value = net1.toFixed(1);	 
				}
				if( (document.getElementById("atividade_fisica").value)=='muito ativo'){
								  	  

				 var net1 = (354 - 6.91 * net_idade )+ 1.45 * ( 9.36 * peso + 726 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 324;
				 var net_1ao6_mais2dp = net1 + 324;
									 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							formulario2.net.value = net1.toFixed(1);		 
				}
			}

		}

  
 
 //homem______________________________________________
	 
	   if((document.getElementById("sexo").value)=='homem'){
	       if ((document.getElementById("net_idade").value) >=3 && (document.getElementById("net_idade").value) <=8 ){
	            if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (88.5 - 61.9 * net_idade) + 1 * ( 26.7 * peso + 903 * altura ) + 20 ;
				 var net_1ao6_menos2dp = net1 - 116;
				 var net_1ao6_mais2dp = net1 + 116;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
			    if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

				 var net_1ao6  = (88.5 - 61.9 * net_idade) + 1.13 * ( 26.7 * peso + 903 * altura ) + 20 ;
				 var net_1ao6_menos2dp =net_1ao6 - 116;
				 var net_1ao6_mais2dp = net_1ao6 + 116;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net_1ao6.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
				  

				 var net1 = (88.5 - 61.9 * net_idade )+ 1.26 * ( 26.7 * peso + 903 * altura ) + 20 ;
				 var net_1ao6_menos2dp =net1 - 116;
				 var net_1ao6_mais2dp = net1 + 116;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='muito ativo'){
				  

				 var net1 = (88.5 - 61.9 * net_idade) + 1.42 * ( 26.7 * peso + 903 * altura ) + 20 ;
				 var net_1ao6_menos2dp =net1 - 116;
				 var net_1ao6_mais2dp = net1 + 116;
				 
				  formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
			}
	  
	  //------------------------------homem entre 9 a18 anos--------------------------------------
		   if ((document.getElementById("net_idade").value) >=9 && (document.getElementById("net_idade").value) <=18 ){
				if((document.getElementById("atividade_fisica").value)=='sedentario'){
		  

				 var net1 = (88.5 - 61.9 * net_idade) + 1 * ( 26.7 * peso + 903 * altura ) + 25 ;
				 var net_1ao6_menos2dp = net1 - 116;
				 var net_1ao6_mais2dp = net1 + 116;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
				if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
					  

				 var net_1ao6  = (88.5 - 61.9 * net_idade) + 1.13 * ( 26.7 * peso + 903 * altura ) + 25 ;
				 var net_1ao6_menos2dp =net_1ao6 - 116;
				 var net_1ao6_mais2dp = net_1ao6 + 116;
					 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
					 formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
				  

				 var net1 = (88.5 - 61.9 * net_idade )+ 1.26 * ( 26.7 * peso + 903 * altura ) + 25 ;
				 var net_1ao6_menos2dp =net1 - 116;
				 var net_1ao6_mais2dp = net1 + 116;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='muito ativo'){
			  

			 var net1 = (88.5 - 61.9 * net_idade) + 1.42 * ( 26.7 * peso + 903 * altura ) + 25 ;
			 var net_1ao6_menos2dp =net1 - 116;
			 var net_1ao6_mais2dp = net1 + 116;
			 
			 formulario.net_1ao6.value=net1.toFixed(1);
			 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
			 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
			 formulario2.net.value = net1.toFixed(1);
			 }
			}
	  
	   //------------------------------homem entre 19 anos  e acima --------------------------------------
	       if ((document.getElementById("net_idade").value) >=19 ){
	            if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (662 - 9.53 * net_idade) + 1 * ( 15,91 * peso + 539.6 * altura )  ;
				 var net_1ao6_menos2dp = net1 - 398;
				 var net_1ao6_mais2dp = net1 + 398;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
		 formulario2.net.value = net1.toFixed(1);
				}	
				if( (document.getElementById("atividade_fisica").value)=='pouco ativo'){
					  

				 var net_1ao6  = (662 - 9.53 * net_idade) + 1.11 * ( 15,91 * peso + 539.6 * altura )  ;
				 var net_1ao6_menos2dp =net_1ao6 - 398;
				 var net_1ao6_mais2dp = net_1ao6 + 398;
					 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
					formulario2.net.value = net_1ao6.toFixed(1); 
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
				  

				 var net1 = (662 - 9.53 * net_idade) + 1.25 * ( 15,91 * peso + 539.6 * altura )  ;
				 var net_1ao6_menos2dp =net1 - 398;
				 var net_1ao6_mais2dp = net1 + 398;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
	 			if((document.getElementById("atividade_fisica").value)=='muito ativo'){
				  

				 var net1 = (662 - 9.53 * net_idade) + 1.48 * ( 15,91 * peso + 539.6 * altura )  ;
				 var net_1ao6_menos2dp =net1 - 398;
				 var net_1ao6_mais2dp = net1 + 398;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				 }
			}
	    }
 
 
 //mulher obesa_________________________________________
		if((document.getElementById("sexo").value)=='mulher obesa'){
			if ((document.getElementById("net_idade").value) >=3 && (document.getElementById("net_idade").value) <=8 ){
	 		    if((document.getElementById("atividade_fisica").value)=='sedentario'){
		  

				 var net1 = (389 - 41.2 * net_idade )+ 1 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 150;
				 var net_1ao6_mais2dp = net1 + 150;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				 formulario2.net.value = net1.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
				  

				 var net_1ao6  = (389 - 41.2 * net_idade) + 1.18 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp =net_1ao6 - 150;
				 var net_1ao6_mais2dp = net_1ao6 + 150;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net_1ao6.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='ativo'){
			  

			     var net1 = (389 - 41.2 * net_idade) + 1.35 * ( 15 * peso + 701.6 * altura ) ;
			     var net_1ao6_menos2dp =net1 - 150;
			     var net_1ao6_mais2dp = net1 + 150;
			 
			     formulario.net_1ao6.value=net1.toFixed(2);
			     formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(2);
			     formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(2);
			  formulario2.net.value = net1.toFixed(2);
				}
				if((document.getElementById("atividade_fisica").value)=='muito ativo'){
				  

				 var net1 = (389 - 41.2 * net_idade) + 1.60 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 150;
				 var net_1ao6_mais2dp = net1 + 150;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
			}
 			
			if ((document.getElementById("net_idade").value) >=9 && (document.getElementById("net_idade").value) <=18 ){
			    if((document.getElementById("atividade_fisica").value)=='sedentario'){
		  

				 var net1 = (389 - 41.2 * net_idade )+ 1 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 150;
				 var net_1ao6_mais2dp = net1 + 150;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
				  

				 var net_1ao6  = (389 - 41.2 * net_idade) + 1.18 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp =net_1ao6 - 150;
				 var net_1ao6_mais2dp = net_1ao6 + 150;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net_1ao6.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='ativo'){
			  

			     var net1 = (389 - 41.2 * net_idade) + 1.35 * ( 15 * peso + 701.6 * altura ) ;
			     var net_1ao6_menos2dp =net1 - 150;
			     var net_1ao6_mais2dp = net1 + 150;
			 
			     formulario.net_1ao6.value=net1.toFixed(1);
			     formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
			     formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
			  formulario2.net.value = net1.toFixed(1);
				}
	 			if((document.getElementById("atividade_fisica").value)=='muito ativo'){
				  

				 var net1 = (389 - 41.2 * net_idade) + 1.60 * ( 15 * peso + 701.6 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 150;
				 var net_1ao6_mais2dp = net1 + 150;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
	 		}
			
			if ((document.getElementById("net_idade").value) >=19 ){
			    if((document.getElementById("atividade_fisica").value)=='sedentario'){
		  

				 var net1 = (448 - 7.95 * net_idade )+ 1 * ( 11.4 * peso + 619 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 320;
				 var net_1ao6_mais2dp = net1 + 320;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
				  

				 var net_1ao6  = (448 - 7.95 * net_idade) + 1.16 * ( 11.4 * peso + 619 * altura ) ;
				 var net_1ao6_menos2dp =net_1ao6 - 320;
				 var net_1ao6_mais2dp = net_1ao6 + 320;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net_1ao6.toFixed(1);
				}
			    if((document.getElementById("atividade_fisica").value)=='ativo'){
			  

			     var net1 = (448 - 7.95 * net_idade) + 1.27 * ( 11.4 * peso + 619 * altura ) ;
			     var net_1ao6_menos2dp =net1 - 320;
			     var net_1ao6_mais2dp = net1 + 320;
			 
			     formulario.net_1ao6.value=net1.toFixed(1);
			     formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
			     formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
			  formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='muito ativo'){
				  

				 var net1 = (448 - 7.95 * net_idade) + 1.44 * ( 11.4 * peso + 619 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 320;
				 var net_1ao6_mais2dp = net1 + 320;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
	 
 
			}
		}
 
 
		//homem obeso_______________________________________
	 
	    if((document.getElementById("sexo").value)=='homem obeso'){
			if ((document.getElementById("net_idade").value) >=3 && (document.getElementById("net_idade").value) <=8 ){
				if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (114 - 50.9 * net_idade) + 1 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

				 var net_1ao6  = (114 - 50.9 * net_idade) + 1.12 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net_1ao6 - 138;
				 var net_1ao6_mais2dp = net_1ao6 + 138;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net_1ao6.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
  	  

				 var net1 =(114 - 50.9 * net_idade) + 1.24 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
	 			if((document.getElementById("atividade_fisica").value)=='muito ativo'){
  	  

				 var net1 = (114 - 50.9 * net_idade) + 1.45 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}	
			}
			if ((document.getElementById("net_idade").value) >=9 && (document.getElementById("net_idade").value) <=18 ){
				if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (114 - 50.9 * net_idade) + 1 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp = net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

				 var net_1ao6  = (114 - 50.9 * net_idade) + 1.12 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net_1ao6 - 138;
				 var net_1ao6_mais2dp = net_1ao6 + 138;
				 
				 formulario.net_1ao6.value=net_1ao6.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net_1ao6.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
  	  

				 var net1 =(114 - 50.9 * net_idade) + 1.24 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
	 			if((document.getElementById("atividade_fisica").value)=='muito ativo'){
  	  

				 var net1 = (114 - 50.9 * net_idade) + 1.45 * ( 19.5 * peso + 1161.4 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 138;
				 var net_1ao6_mais2dp = net1 + 138;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}	
			}
			if ((document.getElementById("net_idade").value) >19 ){
				if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

				 var net1 = (1086 - 10.1 * net_idade) + 1 * ( 13.7 * peso + 416 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 416;
				 var net_1ao6_mais2dp = net1 + 416;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

				var net1 = (1086 - 10.1 * net_idade) + 1.12 * ( 13.7 * peso + 416 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 416;
				 var net_1ao6_mais2dp = net1 + 416;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
				if((document.getElementById("atividade_fisica").value)=='ativo'){
  	  

				var net1 = (1086 - 10.1 * net_idade) + 1.29 * ( 13.7 * peso + 416 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 416;
				 var net_1ao6_mais2dp = net1 + 416;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}
	 			if((document.getElementById("atividade_fisica").value)=='muito ativo'){
  	  

				 var net1 = (1086 - 10.1 * net_idade) + 1.59 * ( 13.7 * peso + 416 * altura ) ;
				 var net_1ao6_menos2dp =net1 - 416;
				 var net_1ao6_mais2dp = net1 + 416;
				 
				 formulario.net_1ao6.value=net1.toFixed(1);
				 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
				 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
				  formulario2.net.value = net1.toFixed(1);
				}	
			}
		}
 
			
//----------------------------------------------------------------------------------------------------------
		 var gestacional = +formulario.gestacional.value;
				if (gestacional == '') gestacional = 0;	
				
		if ((document.getElementById("sexo").value)=='mulher gestante' && (document.getElementById("gestacional").value==0)){
			alert("Informar valor no campo Semana Gestacional!")
			
			
						// zerar valores net - ou + dp de mulher nutriz
						formulario.net_6.value=0;
						formulario.net_6menos2dp.value =0;
						formulario.net_6mais2dp.value =0;
						formulario2.net.value = 0;
			if ( (document.getElementById("net_idade").value) <=13 ){	
			
				alert("Verificar Idade digitada! *Mulher gestante a partir de 14 anos")
			}
			
			if(gestacional <=11){
				var deposicao=0;
			}
			if(gestacional >=12 && gestacional <=24){
					var deposicao =160 *( 8/gestacional * 20) + 180;
			}
			if(gestacional >=25 && gestacional <=36){
				 var deposicao =272 * (8/gestacional * 34) + 180;			
			}
					if((document.getElementById("net_idade").value) >=14 && (document.getElementById("net_idade").value)<=18){
						if((document.getElementById("atividade_fisica").value)=='sedentario'){
					  

						 var net  = (135.5 - 30.8 * net_idade) + 1 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotal = net + deposicao;
						 var net_1ao6_menos2dp = nettotal - 136;
						 var net_1ao6_mais2dp = nettotal + 136;
									 
						 formulario.net_1ao6.value=nettotal.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net.toFixed(1);		 
						}
						if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
					  

						 var net  = (135.5 - 30.8 * net_idade) + 1.16 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotal =net+ deposicao;
						 var net_1ao6_menos2dp =nettotal - 136;
						 var net_1ao6_mais2dp = nettotal + 136;
									 
						 formulario.net_1ao6.value=nettotal.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net.toFixed(1);		 
						}
						if( (document.getElementById("atividade_fisica").value)=='ativo'){
					  

						 var net1 = (135.5 - 30.8 * net_idade) + 1.31 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotal =net1+ deposicao;
						 var net_1ao6_menos2dp =net1 - 136;
						 var net_1ao6_mais2dp = net1 + 136;
									 
						 formulario.net_1ao6.value=nettotal.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net1.toFixed(1);		 
						}
						if((document.getElementById("atividade_fisica").value)=='muito ativo'){
					  

						 var net1 = (135.5 - 30.8 * net_idade) + 1.56 * ( 10 * peso + 934 * altura ) + 25 ;
						 
						  var nettotal =net1+ deposicao;
						  var net_1ao6_menos2dp =net1 - 136;
						 var net_1ao6_mais2dp = net1 + 136;
									 
						 formulario.net_1ao6.value=nettotal.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net1.toFixed(1);		 
						}
									
					}		
					if((document.getElementById("net_idade").value) >=19){
						if((document.getElementById("atividade_fisica").value)=='sedentario'){
					  

						 var net  = (354 - 6.91 * net_idade) + 1 * ( 9.36 * peso + 726 * altura ) ;
						 var nettotal =net+ deposicao;
						 var net_1ao6_menos2dp =nettotal - 324;
						 var net_1ao6_mais2dp = nettotal + 324;
									 
						 formulario.net_1ao6.value=nettotal.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
							 formulario2.net.value = net.toFixed(1);		 
						}
						if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
					  

									 var net  = (354 - 6.91 * net_idade) + 1.12 * ( 9.36 * peso + 726 * altura ) ;
									 var nettotal =net+ deposicao;
									 var net_1ao6_menos2dp =nettotal - 324;
									 var net_1ao6_mais2dp = nettotal + 324;
									 
									 formulario.net_1ao6.value=nettotal.toFixed(1);
									 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
									 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
									  formulario2.net.value = net.toFixed(1);
						}
						if( (document.getElementById("atividade_fisica").value)=='ativo'){
					  

									 var net1 = (354 - 6.91 * net_idade) + 1.27 * ( 9.36 * peso + 726 * altura ) ;
									  var nettotal =net1+ deposicao;
									 var net_1ao6_menos2dp =net1 - 324;
									 var net_1ao6_mais2dp = net1 + 324;
									 
									 formulario.net_1ao6.value=nettotal.toFixed(1);
									 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
									 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
									  formulario2.net.value = net1.toFixed(1);
						}
						if((document.getElementById("atividade_fisica").value)=='muito ativo'){
					  

									 var net1 = (354 - 6.91 * net_idade) + 1.45 * ( 9.36 * peso + 726 * altura ) ;
									  var nettotal =net1+ deposicao;
									 var net_1ao6_menos2dp =net1 - 324;
									 var net_1ao6_mais2dp = net1 + 324;
									 
									 formulario.net_1ao6.value=nettotal.toFixed(1);
									 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
									 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
									  formulario2.net.value = net1.toFixed(1);
						}
					}
			}
	
					
						
			
	
	 //----------------------------------------------------------------------------------------------------------
	 
				if ((document.getElementById("sexo").value)=='mulher nutriz'){
					if ((document.getElementById("net_idade").value) >=3 && (document.getElementById("net_idade").value) <=13 ){	
			
					alert("Verificar Idade digitada! *Mulher nutriz a partir de 14 anos")
					}
					if((document.getElementById("net_idade").value) >=14 && (document.getElementById("net_idade").value)<=18){
		     			if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

						 var net  = (135.5 - 30.8 * net_idade) + 1 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotalprimeiro =net+ 330; //lactacao 1º 6 meses
						 var net_1ao6_menos2dp =nettotalprimeiro - 136;
						 var net_1ao6_mais2dp = nettotalprimeiro + 136;
						 
						 var nettotalsegundo= net + 400;  //lactacao 2º 6 meses
						 var net_6_menos2dp =nettotalsegundo - 136;
						 var net_6_mais2dp = nettotalsegundo + 136;
						 
						  formulario.net_1ao6.value=nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value = nettotalsegundo.toFixed(1);
						formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						}
						if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

						 var net  = (135.5 - 30.8 * net_idade) + 1.16 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp =nettotalprimeiro - 136;
						 var net_1ao6_mais2dp = nettotalprimeiro + 136;
						 
						 var nettotalsegundo= net + 400;
						 var net_6_menos2dp =nettotalsegundo - 136;
						 var net_6_mais2dp = nettotalsegundo + 136;
						 
						  formulario.net_1ao6.value=nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						  formulario.net_6.value = nettotalsegundo.toFixed(1);
						 formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						 
						}
						if((document.getElementById("atividade_fisica").value)=='ativo'){
  	  

						 var net = (135.5 - 30.8 * net_idade) + 1.31 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp =nettotalprimeiro - 136;
						 var net_1ao6_mais2dp = nettotalprimeiro + 136;
						 
						 var nettotalsegundo= net + 400;
						 var net_6_menos2dp =nettotalsegundo - 136;
						 var net_6_mais2dp = nettotalsegundo + 136;
						 
						  formulario.net_1ao6.value=nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						 formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						 
						}
	 					if( (document.getElementById("atividade_fisica").value)=='muito ativo'){
						  

						 var net = (135.5 - 30.8 * net_idade) + 1.56 * ( 10 * peso + 934 * altura ) + 25 ;
						 var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp =nettotalprimeiro - 136;
						 var net_1ao6_mais2dp = nettotalprimeiro + 136;
						 
						 var nettotalsegundo= net + 400;
						 var net_6_menos2dp =nettotalsegundo - 136;
						 var net_6_mais2dp = nettotalsegundo + 136;
						 
						 formulario.net_1ao6.value=nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value=net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value=net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						 
						}
					}
		 			if((document.getElementById("net_idade").value) >=19){
						if((document.getElementById("atividade_fisica").value)=='sedentario'){
  	  

						 var net = (354 - 6.91 * net_idade )+ 1 * ( 9.36 * peso + 726 * altura );
						  var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp = nettotalprimeiro - 324;
						 var net_1ao6_mais2dp = nettotalprimeiro + 324;
						 
						  var nettotalsegundo= net + 400;
						 var net_6_menos2dp = nettotalsegundo - 324;
						 var net_6_mais2dp = nettotalsegundo + 324;
						 
						formulario.net_1ao6.value=nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value = net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value = net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						 formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_mais2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						 
						}
						if((document.getElementById("atividade_fisica").value)=='pouco ativo'){
  	  

						 var net  =( 354 - 6.91 * net_idade )+ 1.12 * ( 9.36 * peso + 726 * altura ) ;
						var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp = nettotalprimeiro - 324;
						 var net_1ao6_mais2dp = nettotalprimeiro + 324;
						 
						  var nettotalsegundo= net + 400;
						 var net_6_menos2dp = nettotalsegundo - 324;
						 var net_6_mais2dp = nettotalsegundo + 324;
						 
						 formulario.net_1ao6.value = nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value = net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value = net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						  formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net.toFixed(1);
						 
						}
						if( (document.getElementById("atividade_fisica").value)=='ativo'){
						  

						 var net1 = (354 - 6.91 * net_idade )+ 1.27 * ( 9.36 * peso + 726 * altura )  ;
						 var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp = nettotalprimeiro - 324;
						 var net_1ao6_mais2dp = nettotalprimeiro + 324;
						 
						  var nettotalsegundo= net + 400;
						 var net_6_menos2dp = nettotalsegundo - 324;
						 var net_6_mais2dp = nettotalsegundo + 324;
						 
						 formulario.net_1ao6.value = nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value = net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value = net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						  formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net1.toFixed(1);
						}
						if((document.getElementById("atividade_fisica").value)=='muito ativo'){
						  

						 var net1 = (354 - 6.91 * net_idade )+ 1.45 * ( 9.36 * peso + 726 * altura ) ;
						 var nettotalprimeiro =net + 330;
						 var net_1ao6_menos2dp = nettotalprimeiro - 324;
						 var net_1ao6_mais2dp = nettotalprimeiro + 324;
						 
						  var nettotalsegundo= net + 400;
						 var net_6_menos2dp = nettotalsegundo - 324;
						 var net_6_mais2dp = nettotalsegundo + 324;
						 
						 formulario.net_1ao6.value = nettotalprimeiro.toFixed(1);
						 formulario.net_1ao6_menos2dp.value = net_1ao6_menos2dp.toFixed(1);
						 formulario.net_1ao6_mais2dp.value = net_1ao6_mais2dp.toFixed(1);
						 formulario.net_6.value=nettotalsegundo.toFixed(1);
						  formulario.net_6menos2dp.value = net_6_menos2dp.toFixed(1);
						 formulario.net_6mais2dp.value = net_6_maiss2dp.toFixed(1);
						  formulario2.net.value = net1.toFixed(1);
						}
					}



				}
				
				
				
		}

catch (e){
	alert(e.message);
	}
}
			
			
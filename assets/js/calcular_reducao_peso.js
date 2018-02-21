// JavaScript Document
function calculaPeso(){
				try{
					var formulario2 = document.getElementById("calculoPeso");
				var reducaopeso = +formulario2.reducao_peso.value;
				var peso = +formulario2.peso2.value;			
				var duracaomes = +formulario2.duracao.value;
				var duracaosemana = duracaomes * 4.285714286; 
				
				
				
				var proximoretorno = formulario2.proximo_retorno2.value;
				
				
				
				

				var perdaponderal = (peso * reducaopeso)/100;
				formulario2.perda_ponderal.value=perdaponderal ;
				var perdapordia = (perdaponderal / duracaosemana) /7;


				var net = +formulario2.net.value;
				
				 var vetprescrito=  net - (perdapordia * 7200) - (perdapordia * (proximoretorno * 30) * 16.6);
				
				formulario2.vet_prescrito.value = vetprescrito.toFixed(1);
				
				var vetapossemana = vetprescrito - (0.084 * net);
				
				formulario2.vet_apos_semana.value = vetapossemana.toFixed(1);
				
				
					
					}
				catch(e){
					alert(e.message)
					}
				
				}
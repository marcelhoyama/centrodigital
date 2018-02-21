// JavaScript Document

	function calcular(){// variavel para o formulario do html
try{
	var formulario=document.getElementById("form2");
	//Composição média por porção de grupos de equivalentes (valores fixos)

  //grupo valor fixo
  var cereal_kcal = 72.0;
  var cereal_carbo = 14.5;
  var cereal_prot = 2.0;
  var cereal_lip = 0.7;

  var hcrua_kcal = 6.2;
  var hcrua_carbo = 1.1;
  var hcrua_prot = 0.3;
  var hcrua_lip = 0.0;

  var hcozida_kcal = 40.0;
  var hcozida_carbo = 5.4;
  var hcozida_prot = 1.3;
  var hcozida_lip = 1.5;

  var fruta_kcal = 59.0;
  var fruta_carbo = 13.5;
  var fruta_prot = 0.6;
  var fruta_lip = 0.3;

  var leite_kcal = 107.2;
  var leite_carbo = 9.8;
  var leite_prot = 7.8;
  var leite_lip = 6.3;

  var carne_kcal = 158.0;
  var carne_carbo = 0.0;
  var carne_prot = 18.1;
  var carne_lip = 9.4;

  var legu_kcal = 137.0;
  var legu_carbo = 24.9;
  var legu_prot = 9.6;
  var legu_lip = 0.6;

  var acucar_kcal = 60.0;
  var acucar_carbo = 14.9;
  var acucar_prot = 0;
  var acucar_lip = 0;

  var gordura_kcal = 54.0;
  var gordura_carbo = 0;
  var gordura_prot = 0;
  var gordura_lip = 6.0;
  
  

  //definindo variavel com o campo ID e validando se campo vazio vai ser zero
  var porcao_cereal = +formulario.porcao_cereal.value;
  if (porcao_cereal == '') porcao_cereal = 0;
  
     
  var porcao_cereal2 = +formulario.porcao_cereal2.value;
  if (porcao_cereal2 == '') porcao_cereal2 = 0;
   var porcao_cereal3 = +formulario.porcao_cereal3.value;
  if (porcao_cereal3 == '') porcao_cereal3 = 0;
   var porcao_cereal4 = +formulario.porcao_cereal4.value;
  if (porcao_cereal4 == '') porcao_cereal4 = 0;
   var porcao_cereal5 = +formulario.porcao_cereal5.value;
  if (porcao_cereal5 == '') porcao_cereal5 = 0;
   var porcao_cereal6 = +formulario.porcao_cereal6.value;
  if (porcao_cereal6 == '') porcao_cereal6 = 0;
  
   var porcao_crua = +formulario.porcao_crua.value;
  if (porcao_crua == '') porcao_crua = 0;
   var porcao_crua2 = +formulario.porcao_crua2.value;
  if (porcao_crua2 == '') porcao_crua2 = 0;
   var porcao_crua3 = +formulario.porcao_crua3.value;
  if (porcao_crua3 == '') porcao_crua3 = 0;
   var porcao_crua4 = +formulario.porcao_crua4.value;
  if (porcao_crua4 == '') porcao_crua4 = 0;
   var porcao_crua5 = +formulario.porcao_crua5.value;
  if (porcao_crua5 == '') porcao_crua5 = 0;
   var porcao_crua6 = +formulario.porcao_crua6.value;
  if (porcao_crua6 == '') porcao_crua6 = 0;
  
  var porcao_cozida = +formulario.porcao_cozida.value;
  if (porcao_cozida == '') porcao_cozida = 0;
   var porcao_cozida2 = +formulario.porcao_cozida2.value;
  if (porcao_cozida2 == '') porcao_cozida2 = 0;
  
  var porcao_cozida3 = +formulario.porcao_cozida3.value;
  if (porcao_cozida2 == '') porcao_cozida2 = 0;
  var porcao_cozida4 = +formulario.porcao_cozida4.value;
  if (porcao_cozida4 == '') porcao_cozida4 = 0;
  var porcao_cozida5 = +formulario.porcao_cozida5.value;
  if (porcao_cozida5 == '') porcao_cozida5 = 0;
  var porcao_cozida6 = +formulario.porcao_cozida6.value;
  if (porcao_cozida6 == '') porcao_cozida6 = 0;

var porcao_fruta = +formulario.porcao_fruta.value;
  if (porcao_fruta == '') porcao_fruta = 0;
  var porcao_fruta2 = +formulario.porcao_fruta2.value;
  if (porcao_fruta2 == '') porcao_fruta2 = 0;
  var porcao_fruta3 = +formulario.porcao_fruta3.value;
  if (porcao_fruta3 == '') porcao_fruta3 = 0;
  var porcao_fruta4 = +formulario.porcao_fruta4.value;
  if (porcao_fruta4 == '') porcao_fruta4 = 0;
  var porcao_fruta5 = +formulario.porcao_fruta5.value;
  if (porcao_fruta5 == '') porcao_fruta5 = 0;
  var porcao_fruta6 = +formulario.porcao_fruta6.value;
  if (porcao_fruta6 == '') porcao_fruta6 = 0;
  
  var porcao_leite = +formulario.porcao_leite.value;
  if (porcao_leite == '') porcao_leite = 0;
var porcao_leite2 = +formulario.porcao_leite2.value;
  if (porcao_leite2 == '') porcao_leite2 = 0;
  var porcao_leite3 = +formulario.porcao_leite3.value;
  if (porcao_leite3 == '') porcao_leite3 = 0;
  var porcao_leite4 = +formulario.porcao_leite4.value;
  if (porcao_leite4 == '') porcao_leite4 = 0;
  var porcao_leite5 = +formulario.porcao_leite5.value;
  if (porcao_leite5 == '') porcao_leite5 = 0;
  var porcao_leite6 = +formulario.porcao_leite6.value;
  if (porcao_leite6 == '') porcao_leite6 = 0;
  
   var porcao_carne = +formulario.porcao_carne.value;
  if (porcao_carne == '') porcao_carne = 0;
 var porcao_carne2 = +formulario.porcao_carne2.value;
  if (porcao_carne2 == '') porcao_carne2 = 0;
   var porcao_carne3 = +formulario.porcao_carne3.value;
  if (porcao_carne3 == '') porcao_carne3 = 0;
   var porcao_carne4 = +formulario.porcao_carne4.value;
  if (porcao_carne4 == '') porcao_carne4 = 0;
   var porcao_carne5 = +formulario.porcao_carne5.value;
  if (porcao_carne5 == '') porcao_carne5 = 0;
   var porcao_carne6 = +formulario.porcao_carne6.value;
  if (porcao_carne6 == '') porcao_carne6 = 0;
  
  var porcao_leguminosa = +formulario.porcao_leguminosa.value;
  if (porcao_leguminosa == '') porcao_leguminosa = 0;
   var porcao_leguminosa2 = +formulario.porcao_leguminosa2.value;
  if (porcao_leguminosa2 == '') porcao_leguminosa2 = 0;
   var porcao_leguminosa3 = +formulario.porcao_leguminosa3.value;
  if (porcao_leguminosa3 == '') porcao_leguminosa3 = 0;
   var porcao_leguminosa4 = +formulario.porcao_leguminosa4.value;
  if (porcao_leguminosa4 == '') porcao_leguminosa4 = 0;
   var porcao_leguminosa5 = +formulario.porcao_leguminosa5.value;
  if (porcao_leguminosa5 == '') porcao_leguminosa5 = 0;
   var porcao_leguminosa6 = +formulario.porcao_leguminosa6.value;
  if (porcao_leguminosa6 == '') porcao_leguminosa6 = 0;
  
   var porcao_acucar = +formulario.porcao_acucar.value;
  if (porcao_acucar == '') porcao_acucar = 0;
   var porcao_acucar2 = +formulario.porcao_acucar2.value;
  if (porcao_acucar2 == '') porcao_acucar2 = 0;
   var porcao_acucar3 = +formulario.porcao_acucar3.value;
  if (porcao_acucar3 == '') porcao_acucar3 = 0;
   var porcao_acucar4 = +formulario.porcao_acucar4.value;
  if (porcao_acucar4 == '') porcao_acucar4 = 0;
   var porcao_acucar5 = +formulario.porcao_acucar5.value;
  if (porcao_acucar5 == '') porcao_acucar5 = 0;
   var porcao_acucar6 = +formulario.porcao_acucar6.value;
  if (porcao_acucar6 == '') porcao_acucar6 = 0;
  
   var porcao_gordura = +formulario.porcao_gordura.value;
  if (porcao_gordura == '') porcao_gordura = 0;
    var porcao_gordura2 = +formulario.porcao_gordura2.value;
  if (porcao_gordura2 == '') porcao_gordura2 = 0;
    var porcao_gordura3 = +formulario.porcao_gordura3.value;
  if (porcao_gordura3 == '') porcao_gordura3 = 0;
    var porcao_gordura4 = +formulario.porcao_gordura4.value;
  if (porcao_gordura4 == '') porcao_gordura4 = 0;
    var porcao_gordura5 = +formulario.porcao_gordura5.value;
  if (porcao_gordura5 == '') porcao_gordura5 = 0;
    var porcao_gordura6 = +formulario.porcao_gordura6.value;
  if (porcao_gordura6 == '') porcao_gordura6 = 0;
  

    // calculo dos 4 nutrientes(kcal,carboidrato,lipideos,proteina)da linha cafe da manha dos 9 elementos (cereal,crua,cozida,fruta,leite,gordura,carne,legumes,açucar) 
  
  var cereal1 = cereal_kcal * porcao_cereal; //cafe
  var cereal2 = cereal_carbo * porcao_cereal;
  var cereal3 = cereal_prot * porcao_cereal;
  var cereal4 = cereal_lip * porcao_cereal;
  var cerealTotal = cereal1 + cereal2 + cereal3 + cereal4;

  var cereal5 = cereal_kcal * porcao_cereal2; //lanche
  var cereal6 = cereal_carbo * porcao_cereal2;
  var cereal7 = cereal_prot * porcao_cereal2;
  var cereal8 = cereal_lip * porcao_cereal2;
  var cereal2Total = cereal5 + cereal6 + cereal7 + cereal8;
  
var cereal9 = cereal_kcal * porcao_cereal3; //almoco
  var cereal10 = cereal_carbo * porcao_cereal3;
  var cereal11 = cereal_prot * porcao_cereal3;
  var cereal12 = cereal_lip * porcao_cereal3;
  var cereal3Total = cereal9 + cereal10 + cereal11 + cereal12;
  
   var cereal13 = cereal_kcal * porcao_cereal4; //lanche tarde
  var cereal14 = cereal_carbo * porcao_cereal4;
  var cereal15 = cereal_prot * porcao_cereal4;
  var cereal16 = cereal_lip * porcao_cereal4;
  var cereal4Total = cereal13 + cereal14 + cereal15 + cereal16;
  
   var cereal17 = cereal_kcal * porcao_cereal5; //janta
 var cereal18 = cereal_carbo * porcao_cereal5;
 var cereal19 = cereal_prot * porcao_cereal5;
  var cereal20 = cereal_lip * porcao_cereal5;
  var cereal5Total =  cereal17 + cereal18 + cereal19 + cereal20 ;
  
   var cereal21 = cereal_kcal * porcao_cereal6; //ceia
    var cereal22 = cereal_carbo * porcao_cereal6;
 var cereal23 = cereal_prot * porcao_cereal6;
 var cereal24 = cereal_lip * porcao_cereal6;
 var cereal6Total = cereal21 + cereal22 + cereal23 + cereal24;

 //---------------------------------------------------------------------------------------------

  var crua1 = hcrua_kcal * porcao_crua; //cafe
  var crua2 = hcrua_carbo * porcao_crua; //
  var crua3 = hcrua_prot * porcao_crua; //
  var crua4 = hcrua_lip * porcao_crua; //
  var cruaTotal = crua1 + crua2 + crua3 + crua4;

  var crua5 = hcrua_kcal * porcao_crua2; //lanche
  var crua6 = hcrua_carbo * porcao_crua2;
  var crua7 = hcrua_prot * porcao_crua2;
  var crua8 = hcrua_lip * porcao_crua2;
  var crua2Total = crua5 + crua6 + crua7 + crua8;
  
 var crua9 = hcrua_kcal * porcao_crua3; //almoco
  var crua10 = hcrua_carbo * porcao_crua3;
  var crua11 = hcrua_prot * porcao_crua3;
  var crua12 = hcrua_lip * porcao_crua3;
  var crua3Total = crua9 + crua10 + crua11 + crua12;
  
  
  var crua13 = hcrua_kcal * porcao_crua4; //lanche tarde
  var crua14 = hcrua_carbo * porcao_crua4;
  var crua15 = hcrua_prot * porcao_crua4;
  var crua16 = hcrua_lip * porcao_crua4;
  var crua4Total = crua13 + crua14 + crua15 + crua16;
  
   var crua17 = hcrua_kcal * porcao_crua5; //janta
 var crua18 = hcrua_carbo * porcao_crua5;
 var crua19 = hcrua_prot * porcao_crua5;
 var crua20 = hcrua_lip * porcao_crua5;
 var crua5Total = crua17 + crua18 + crua19 + crua20;
 
 var  crua21 = hcrua_kcal * porcao_crua6; //ceia
 var crua22 = hcrua_carbo * porcao_crua6;
 var crua23 = hcrua_prot * porcao_crua6;
 var crua24 = hcrua_lip * porcao_crua6;
 var crua6Total = crua21 + crua22 + crua23 + crua24;


//---------------------------------------------------------------------------------------------------------

  var cozida1 = hcozida_kcal * porcao_cozida; //cafe
  var cozida2 = hcozida_carbo * porcao_cozida; //
  var cozida3 = hcozida_prot * porcao_cozida; //
  var cozida4 = hcozida_lip * porcao_cozida; //
  var cozidaTotal = cozida1 + cozida2 + cozida3 + cozida4;

 var cozida5 = hcozida_kcal * porcao_cozida2; //lanche
  var cozida6 = hcozida_carbo * porcao_cozida2;
  var cozida7 = hcozida_prot * porcao_cozida2;
  var cozida8 = hcozida_lip * porcao_cozida2;
  var cozida2Total = cozida5 + cozida6 + cozida7 + cozida8;


  var cozida9 = hcozida_kcal * porcao_cozida3; //almoco
  var cozida10 = hcozida_carbo * porcao_cozida3;
  var cozida11 = hcozida_prot * porcao_cozida3;
  var cozida12 = hcozida_lip * porcao_cozida3;
  var cozida3Total = cozida9 + cozida10 + cozida11 + cozida12;
  
    var cozida13 = hcozida_kcal * porcao_cozida4; //lanche tarde
  var cozida14 = hcozida_carbo * porcao_cozida4;
  var cozida15 = hcozida_prot * porcao_cozida4;
  var cozida16 = hcozida_lip * porcao_cozida4;
  var cozida4Total = cozida13 + cozida14 + cozida15 + cozida16;
  
   var cozida17 = hcozida_kcal * porcao_cozida5; //janta
 var cozida18 = hcozida_carbo * porcao_cozida5;
 var cozida19 = hcozida_prot * porcao_cozida5;
 var cozida20 = hcozida_lip * porcao_cozida5;
 var cozida5Total = cozida17 + cozida18 + cozida19 + cozida20;
 
 var  cozida21 = hcozida_kcal * porcao_cozida6; //ceia
 var cozida22 = hcozida_carbo * porcao_cozida6;
 var cozida23 = hcozida_prot * porcao_cozida6;
 var cozida24 = hcozida_lip * porcao_cozida6;
 var cozida6Total = cozida21 + cozida22 + cozida23 + cozida24;
 
//----------------------------------------------------------------------------------------------------------------

  var fruta1 = fruta_kcal * porcao_fruta; //cafe
  var fruta2 = fruta_carbo * porcao_fruta; //
  var fruta3 = fruta_prot * porcao_fruta; //
  var fruta4 = fruta_lip * porcao_fruta; //
  var frutaTotal = fruta1 + fruta2 + fruta3 + fruta4;

  var fruta5 = fruta_kcal * porcao_fruta2; //lanche
  var fruta6 = fruta_carbo * porcao_fruta2;
  var fruta7 = fruta_prot * porcao_fruta2;
  var fruta8 = fruta_lip * porcao_fruta2;
  var fruta2Total = fruta5 + fruta6 + fruta7 + fruta8;
 
  var fruta9 = fruta_kcal * porcao_fruta3; //almoco
  var fruta10 = fruta_carbo * porcao_fruta3;
  var fruta11 = fruta_prot * porcao_fruta3;
  var fruta12 = fruta_lip * porcao_fruta3;
  var fruta3Total = fruta9 + fruta10 + fruta11 + fruta12;
  
    var fruta13 = fruta_kcal * porcao_fruta4; //lanche tarde
  var fruta14 = fruta_carbo * porcao_fruta4;
  var fruta15 = fruta_prot * porcao_fruta4;
  var fruta16 = fruta_lip * porcao_fruta4;
  var fruta4Total = fruta13 + fruta14 + fruta15 + fruta16;
  
  var  fruta17 = fruta_kcal * porcao_fruta5; //janta
 var fruta18 = fruta_carbo * porcao_fruta5;
 var fruta19 = fruta_prot * porcao_fruta5;
 var fruta20 = fruta_lip * porcao_fruta5;
 var fruta5Total = fruta18 + fruta19 + fruta20 + fruta17;
 
  var fruta21 = fruta_kcal * porcao_fruta6; //ceia
 var fruta22 = fruta_carbo * porcao_fruta6;
 var fruta23 = fruta_prot * porcao_fruta6;
 var fruta24 = fruta_lip * porcao_fruta6;
 var fruta6Total = fruta21 + fruta22 + fruta23 + fruta24;
  
//---------------------------------------------------------------------------------------------------------------
  var leite1 = leite_kcal * porcao_leite; //cafe
  var leite2 = leite_carbo * porcao_leite; //
  var leite3 = leite_prot * porcao_leite; //
  var leite4 = leite_lip * porcao_leite; //
  var leiteTotal = leite1 + leite2 + leite3 + leite4;
 
   var leite5 = leite_kcal * porcao_leite2; //lanche
  var leite6 = leite_carbo * porcao_leite2;
  var leite7 = leite_prot * porcao_leite2;
  var leite8 = leite_lip * porcao_leite2;
  var leite2Total = leite5 + leite6 + leite7 + leite8;
 
  var leite9 = leite_kcal * porcao_leite3; //almoco
  var leite10 = leite_carbo * porcao_leite3;
  var leite11 = leite_prot * porcao_leite3;
  var leite12 = leite_lip * porcao_leite3;
  var leite3Total = leite9 + leite10 + leite11 + leite12;

  var leite13 = leite_kcal * porcao_leite4; //lanche tarde
  var leite14 = leite_carbo * porcao_leite4;
  var leite15 = leite_prot * porcao_leite4;
  var leite16 = leite_lip * porcao_leite4;
  var leite4Total = leite13 + leite14 + leite15 + leite16;

 var leite17 = leite_kcal * porcao_leite5; //janta
 var leite18 = leite_carbo * porcao_leite5;
 var leite19 = leite_prot * porcao_leite5;
 var leite20 = leite_lip * porcao_leite5;
 var leite5Total =  leite17 + leite18 + leite19 + leite20 ;

 var leite21 = leite_kcal * porcao_leite6; //ceia
 var leite22 = leite_carbo * porcao_leite6;
 var leite23 = leite_prot * porcao_leite6;
 var leite24 = leite_lip * porcao_leite6;
 var leite6Total = leite21 + leite22 + leite23 + leite24;

//------------------------------------------------------------------------------------------------------------------
  var carne1 = carne_kcal * porcao_carne; //cafe
  var carne2 = carne_carbo * porcao_carne; //
  var carne3 = carne_prot * porcao_carne; //
  var carne4 = carne_lip * porcao_carne; //
  var carneTotal = carne1 + carne2 + carne3 + carne4;

  var carne5 = carne_kcal * porcao_carne2; //lanche
  var carne6 = carne_carbo * porcao_carne2;
  var carne7 = carne_prot * porcao_carne2;
  var carne8 = carne_lip * porcao_carne2;
  var carne2Total = carne5 + carne6 + carne7 + carne8;

 var carne9 = carne_kcal * porcao_carne3; //almoco
  var carne10 = carne_carbo * porcao_carne3;
  var carne11 = carne_prot * porcao_carne3;
  var carne12 = carne_lip * porcao_carne3;
  var carne3Total = carne9 + carne10 + carne11 + carne12;

 var carne13 = carne_kcal * porcao_carne4; //lanche tarde
  var carne14 = carne_carbo * porcao_carne4;
  var carne15 = carne_prot * porcao_carne4;
  var carne16 = carne_lip * porcao_carne4;
  var carne4Total = carne13 + carne14 + carne15 + carne16;

var carne17 = carne_kcal * porcao_carne5; //janta
 var carne18 = carne_carbo * porcao_carne5;
 var carne19 = carne_prot * porcao_carne5;
 var carne20 = carne_lip * porcao_carne5;
 var carne5Total =  carne17 + carne18 + carne19 + carne20 ;

var  carne21 = carne_kcal * porcao_carne6; //janta
 var carne22 = carne_carbo * porcao_carne6;
 var carne23 = carne_prot * porcao_carne6;
 var carne24 = carne_lip * porcao_carne6;
 var carne6Total = carne21 + carne22 + carne23 + carne24;

//----------------------------------------------------------------------------------------------------------------
  var leguminosa1 = legu_kcal * porcao_leguminosa; //cafe
  var leguminosa2 = legu_carbo * porcao_leguminosa; //
  var leguminosa3 = legu_prot * porcao_leguminosa; //
  var leguminosa4 = legu_lip * porcao_leguminosa; //
  var leguminosaTotal = leguminosa1 + leguminosa2 + leguminosa3 + leguminosa4;

 var leguminosa5 = legu_kcal * porcao_leguminosa2; //lanche
  var leguminosa6 = legu_carbo * porcao_leguminosa2;
  var leguminosa7 = legu_prot * porcao_leguminosa2;
  var leguminosa8 = legu_lip * porcao_leguminosa2;
  var leguminosa2Total = leguminosa5 + leguminosa6 + leguminosa7 + leguminosa8;
  
   var leguminosa9 = legu_kcal * porcao_leguminosa3; //almoco
  var leguminosa10 = legu_carbo * porcao_leguminosa3;
  var leguminosa11 = legu_prot * porcao_leguminosa3;
  var leguminosa12 = legu_lip * porcao_leguminosa3;
  var leguminosa3Total = leguminosa9 + leguminosa10 + leguminosa11 + leguminosa12;

  var leguminosa13 = legu_kcal * porcao_leguminosa4; //lanche tarde
  var leguminosa14 = legu_carbo * porcao_leguminosa4;
  var leguminosa15 = legu_prot * porcao_leguminosa4;
 var leguminosa16 = legu_lip * porcao_leguminosa4;
 var leguminosa4Total = leguminosa13 + leguminosa14 + leguminosa15 + leguminosa16;

 var leguminosa18 = legu_kcal * porcao_leguminosa5; //janta
 var leguminosa19 = legu_carbo * porcao_leguminosa5;
 var leguminosa20 = legu_prot * porcao_leguminosa5;
 var leguminosa17 = legu_lip * porcao_leguminosa5;
 var leguminosa5Total = leguminosa18 + leguminosa19 + leguminosa20 + leguminosa17;
 
 
 var leguminosa21 = legu_kcal * porcao_leguminosa6; //janta
 var leguminosa22 = legu_carbo * porcao_leguminosa6;
 var leguminosa23 = legu_prot * porcao_leguminosa6;
 var leguminosa24 = legu_lip * porcao_leguminosa6;
 var leguminosa6Total = leguminosa21 + leguminosa22 + leguminosa23 + leguminosa24;
 
//-------------------------------------------------------------------------------------------------------------
  var acucar1 = acucar_kcal * porcao_acucar; //cafe
  var acucar2 = acucar_carbo * porcao_acucar; //
  var acucar3 = acucar_prot * porcao_acucar; //
  var acucar4 = acucar_lip * porcao_acucar; //
  var acucarTotal = acucar1 + acucar2 + acucar3 + acucar4;

var acucar5 = acucar_kcal * porcao_acucar2; //lanche
  var acucar6 = acucar_carbo * porcao_acucar2;
  var acucar7 = acucar_prot * porcao_acucar2;
  var acucar8 = acucar_lip * porcao_acucar2;
  var acucar2Total = acucar5 + acucar6 + acucar7 + acucar8;

var acucar9 = acucar_kcal * porcao_acucar3; //almoco
  var acucar10 = acucar_carbo * porcao_acucar3;
  var acucar11 = acucar_prot * porcao_acucar3;
  var acucar12 = acucar_lip * porcao_acucar3;
  var acucar3Total = acucar9 + acucar10 + acucar11 + acucar12;

   var acucar13 = acucar_kcal * porcao_acucar4; //lanche tarde
 var acucar14 = acucar_carbo * porcao_acucar4;
 var acucar15 = acucar_prot * porcao_acucar4;
 var acucar16 = acucar_lip * porcao_acucar4;
 var acucar4Total = acucar13 + acucar14 + acucar15 + acucar16;

 var acucar17 = acucar_kcal * porcao_acucar5; //lanche tarde
 var acucar18 = acucar_carbo * porcao_acucar5;
 var acucar19 = acucar_prot * porcao_acucar5;
 var acucar20 = acucar_lip * porcao_acucar5;
 var acucar5Total = acucar17 + acucar18 + acucar19 + acucar20;

 var acucar21 = acucar_kcal * porcao_acucar6; //lanche tarde
 var acucar22 = acucar_carbo * porcao_acucar6;
 var acucar23 = acucar_prot * porcao_acucar6;
 var acucar24 = acucar_lip * porcao_acucar6;
 var acucar6Total = acucar21 + acucar22 + acucar23 + acucar24;

//---------------------------------------------------------------------------------------------------------------------
  var gordura1 = gordura_kcal * porcao_gordura; //cafe
  var gordura2 = gordura_carbo * porcao_gordura; //
  var gordura3 = gordura_prot * porcao_gordura; //
  var gordura4 = gordura_lip * porcao_gordura; //
  var gorduraTotal = gordura1 + gordura2 + gordura3 + gordura4;

  var gordura5 = gordura_kcal * porcao_gordura2; //lanche
  var gordura6 = gordura_carbo * porcao_gordura2; //
  var gordura7 = gordura_prot * porcao_gordura2; //
  var gordura8 = gordura_lip * porcao_gordura2; //
  var gordura2Total = gordura5 + gordura6 + gordura7 + gordura8;
 

 var  gordura9 = gordura_kcal * porcao_gordura3; //almoco
  var gordura10 = gordura_carbo * porcao_gordura3; //
  var gordura11 = gordura_prot * porcao_gordura3; //
  var gordura12 = gordura_lip * porcao_gordura3; //
  var gordura3Total = gordura9 + gordura10 + gordura11 + gordura12;

var  gordura13 = gordura_kcal * porcao_gordura4; //lanche tarce
 var gordura14 = gordura_carbo * porcao_gordura4; //
 var gordura15 = gordura_prot * porcao_gordura4; //
 var gordura16 = gordura_lip * porcao_gordura4; //
 var gordura4Total = gordura13 + gordura14 + gordura15 + gordura16;

 var gordura17 = gordura_kcal * porcao_gordura5; //janta
  var gordura18 = gordura_carbo * porcao_gordura5; //
 var gordura19 = gordura_prot * porcao_gordura5; //
 var gordura20 = gordura_lip * porcao_gordura5; //
 var gordura5Total = gordura17 + gordura18 + gordura19 + gordura20;

 var gordura21 = gordura_kcal * porcao_gordura6; //janta
 var gordura22 = gordura_carbo * porcao_gordura6; //
 var gordura23 = gordura_prot * porcao_gordura6; //
 var gordura24 = gordura_lip * porcao_gordura6; //
 var gordura6Total = gordura21 + gordura22 + gordura23 + gordura24;

//--------------------------------------------------------------------------------------------------------------------



  //total geral de cada grupo(coluna) variavel total_  no campo cerealTotal

  var total_cereal = cerealTotal + cereal2Total + cereal3Total + cereal4Total + cereal5Total + cereal6Total;
  formulario.cerealTotal.value=total_cereal.toFixed(1);
  
  var total_cruas = cruaTotal + crua2Total + crua3Total + crua4Total + crua5Total + crua6Total;
  formulario.cruaTotal.value=total_cruas.toFixed(1);
 
  var total_cozidas = cozidaTotal + cozida2Total + cozida3Total + cozida4Total + cozida5Total + cozida6Total;
 formulario.cozidaTotal.value=total_cozidas.toFixed(1);
 
  var total_frutas = frutaTotal + fruta2Total + fruta3Total + fruta4Total + fruta5Total + fruta6Total;
  formulario.frutaTotal.value=total_frutas.toFixed(1);
 
  var total_leite = leiteTotal + leite2Total + leite3Total + leite4Total + leite5Total + leite6Total;
  formulario.leiteTotal.value=total_leite.toFixed(1);
 
  var total_carne = carneTotal + carne2Total + carne3Total + carne4Total + carne5Total + carne6Total;
  formulario.carneTotal.value=total_carne.toFixed(1);
 
  var total_legu = leguminosaTotal + leguminosa2Total + leguminosa3Total + leguminosa4Total + leguminosa5Total + leguminosa6Total;
  formulario.leguTotal.value=total_legu.toFixed(1);
 
  var total_acucar = acucarTotal + acucar2Total + acucar3Total + acucar4Total + acucar5Total + acucar6Total;
  formulario.acucarTotal.value=total_acucar.toFixed(1);
 
  var total_gordura = gorduraTotal + gordura2Total + gordura3Total + gordura4Total + gordura5Total + gordura6Total;
formulario.gorduraTotal.value=total_gordura.toFixed(1);

  //distribuicao dos macronutrientes
  //caloria
 
  var total_kcal = cereal1 + crua1 + cozida1 + fruta1 + leite1 + carne1 + leguminosa1 + gordura1 + acucar1 + cereal5 + crua5 + cozida5 + fruta5 + leite5 + carne5 + leguminosa5 + acucar5 + gordura5 + cereal9 + crua9 + cozida9 + fruta9 + leite9 + carne9 + leguminosa9 + acucar9 + gordura9 + cereal13 + crua13 + cozida13 + fruta13 + leite13 + carne13 + leguminosa13 + acucar13 + gordura13 + cereal17 + crua17 + cozida17 + fruta17 + leite17 + carne17 + leguminosa17 + acucar17 + gordura17 + cereal21 + crua21 + cozida21 + fruta21 + leite21 + carne21 + leguminosa21 + acucar21 + gordura21;
 
  //correcao de valores
  var correcao_carboidrato = +formulario.correcao_carboidrato.value;
   if (correcao_carboidrato == '') correcao_carboidrato = 0;
  var correcao_proteina = +formulario.correcao_proteina.value;
   if (correcao_proteina == '') correcao_proteina = 0;
  var correcao_lipideo = +formulario.correcao_lipideo.value;
   if (correcao_lipideo == '') correcao_lipideo = 0;
   
   var correcao_carboidrato2 = correcao_carboidrato * 4;
   var correcao_proteina2 = correcao_proteina *4;
   var correcao_lipideo2 = correcao_lipideo *9;
  var correcao_kcal = correcao_carboidrato2  + correcao_proteina2  + correcao_lipideo2 ;  
  formulario.correcao_kcal.value = correcao_kcal.toFixed(1);
  
   var total_kcal2 = total_kcal + correcao_kcal;
  formulario.total_kcal.value=total_kcal2.toFixed(1);
  
  
  //carboidrato
  var total_carboidrato = cereal2 + crua2 + cozida2 + fruta2 + leite2 + carne2 + leguminosa2 + gordura2 + acucar2 + cereal6 + crua6 + cozida6 + fruta6 + leite6 + carne6 + leguminosa6 + acucar6 + gordura6 + cereal10 + crua10 + cozida10 + fruta10 + leite10 + carne10 + leguminosa10 + acucar10 + gordura10 + cereal14 + crua14 + cozida14 + fruta14 + leite14 + carne14 + leguminosa14 + acucar14 + gordura14 + cereal18 + crua18 + cozida18 + fruta18 + leite18 + carne18 + leguminosa18 + acucar18 + gordura18 + cereal22 + crua22 + cozida22 + fruta22 + leite22 + carne22 + leguminosa22 + acucar22 + gordura22;
  
  
  var total_carboidrato2 = total_carboidrato + correcao_carboidrato;
  formulario.total_carboidrato.value = total_carboidrato2.toFixed(1);
  
  var porcentoCarboidrato = (total_carboidrato2 * 4) * 100 / total_kcal; 
  formulario.porcentoCarboidrato.value = porcentoCarboidrato.toFixed(1);
  
 //proteina
   var total_proteina = cereal3 + crua3 + cozida3 + fruta3 + leite3 + carne3 + leguminosa3 + gordura3 + acucar3 + cereal7 + crua7 + cozida7 + fruta7 + leite7 + carne7 + leguminosa7 + acucar7 + gordura7 + cereal11 + crua11 + cozida11 + fruta11 + leite11 + carne11 + leguminosa11 + acucar11 + gordura11 + cereal15 + crua15 + cozida15 + fruta15 + leite15 + carne15 + leguminosa15 + acucar15 + gordura15 + cereal19 + crua19 + cozida19 + fruta19 + leite19 + carne19 + leguminosa19 + acucar19 + gordura19 + cereal23 + crua23 + cozida23 + fruta23 + leite23 + carne23 + leguminosa23 + acucar23 + gordura23;
 
var total_proteina2 = total_proteina + correcao_proteina; 
  formulario.total_proteina.value=total_proteina2.toFixed(1);
  
  
  var form3 = document.getElementById("form3");
  var net_imc = +form3.net_imc.value;
  var gramakiloProteina = total_proteina  / net_imc; 
  formulario.gramakiloProteina.value=gramakiloProteina.toFixed(1);


  
  //lipideo
    var total_lipideo = cereal4 + crua4 + cozida4 + fruta4 + leite4 + carne4 + leguminosa4 + gordura4 + acucar4 + cereal8 + crua8 + cozida8 + fruta8 + leite8 + carne8 + leguminosa8 + acucar8 + gordura8 + cereal12 + crua12 + cozida12 + fruta12 + leite12 + carne12 + leguminosa12 + acucar12 + gordura12 + cereal16 + crua16 + cozida16 + fruta16 + leite16 + carne16 + leguminosa16 + acucar16 + gordura16 + cereal20 + crua20 + cozida20 + fruta20 + leite20 + carne20 + leguminosa20 + acucar20 + gordura20 + cereal24 + crua24 + cozida24 + fruta24 + leite24 + carne24 + leguminosa24 + acucar24 + gordura24;
  total_lipideo = total_lipideo + correcao_lipideo;
  formulario.total_lipideo.value=total_lipideo.toFixed(1);
  var porcentoLipideo = (total_lipideo * 9) * 100 / total_kcal; 
  formulario.porcentoLipideo.value = porcentoLipideo.toFixed(1);
  
  
 
  
}
	
	catch(err){
		alert(err.message);
		}
}
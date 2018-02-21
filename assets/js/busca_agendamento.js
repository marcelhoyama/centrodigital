$(function(){
//name
$("#palavra").click(function(){
var palavra = $(this).val();

		if(palavra != ''){
        var dados = {
        pesquisar:palavra
        }
        
        $.post('app/agendamento_lista.php', dados , function(retorna){
        	//class
			$(".resultado").html(retorna);
            });
        }else{
			$(".resultado").html('');
			
			}
			
});

});

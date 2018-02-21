$(function(){
//name
$("#pesquisar").keyup(function(){
var pesquisar = $(this).val();

		if(pesquisar != ''){
        var dados = {
        palavra:pesquisar
        }
        
        $.post('app/usuario_lista.php', dados , function(retorna){
        	//class
			$(".resultado").html(retorna);
            });
        }else{
			$(".resultado").html('');
			
			}
			
});

});

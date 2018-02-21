

    
<div class="container-fluid"> 
    <h1>Cadastro de Clientes </h1>
 <form  method="POST" >
  
      <div class="form">
        
        <div class="form-group">
         <label class="control-label">CPF*:</label>
         <input name="cpf" type="text" id="cpf" value="" placeholder="somente numeros" class="form-control" />
         </div>
          <div class="form-group">
            <label for="inputNome" class="control-label" >Nome*</label>
            <input name="nome" type="text" id="nome"  placeholder="Digite o nome completo" class="form-control"/>
          </div>
          
          
         <div class="form-group">
         <label class="control-label">Celular ou Fixo*:</label>
         <input name="celular" type="text" id="usuario_celular"  placeholder="DDD + numero telefone" size="11" class="form-control" />
         </div>
         
         <div class="form-group">
         <label class="control-label">Endereço:</label>
         <input name="endereco" type="text" id="endereco" value="" placeholder="logadouro + numero" class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Bairro:</label>
         <input name="bairro" type="text" id="bairro" value="" placeholder="" class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Cidade:</label>
         <input name="cidade" type="text" id="cidade" value="" placeholder="" class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Estado:</label>
         <input name="estado" type="text" id="estado" value="" placeholder="" class="form-control" />
         </div>
         
      
    
      <button type="submit" class="btn btn-success btn-block"  >Salvar</button>
      <button type="reset" name="button_limpar"  class="btn btn-success btn-block"/>Limpar</button>
    
  </div>

   <?php if (isset($erro) && !empty($erro)): ?>
     <div class="alert alert-danger"><?php echo $erro; ?></div> 
       <?php endif; ?>
      
 </form>
</div>





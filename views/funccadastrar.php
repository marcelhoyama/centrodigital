

    
<div class="container-fluid"> 
    <h1>Cadastro de Usuarios </h1>
 <form  method="POST" >
  
      <div class="form">
        
        
          <div class="form-group">
            <label for="inputNome" class="control-label" >Nome*</label>
            <input name="nome" type="text" id="nome"  placeholder="Digite o nome completo" class="form-control"/>
          </div>
          <!--
          <div class="form-group">
            <label for="inputSexo" class=" control-label">Sexo*</label>
                <label class=" control-label" for="select">
                   <select name="sexo" id="usuario_sexo" class="form-control">
                       <option selected="selected" >M</option>
                     <option>F</option>
                   </select>
             </label>
          </div>
         
      -->
    
        <!--   <td><label class="col-sm2 control-label">Telefone:</label></td>
         <td><input name="usuario_telefone" type="text" id="usuario_telefone"  placeholder="Fixo somente numeros" size="11" class="form-control"/></td>
         
         <div class="form-group">
         <label class="control-label">Celular</label>
         <input name="celular" type="text" id="usuario_celular"  placeholder="DDD + numero telefone" size="11" class="form-control" />
         </div>
        -->
         <div class="form-group">
         <label class="control-label">E-mail*:</label>
         <input name="email" type="email" id="email"  placeholder="exemplo@email.com" class="form-control"/>
         </div>
         <div class="form-group">
         <label class="control-label">Senha*</label>
         <input name="senha" type="password" id="senha" value="" class="form-control" />
         </div>
      
    
      <button type="submit" class="btn btn-success btn-block"  >Salvar</button>
      <button type="reset" name="button_limpar"  class="btn btn-success btn-block"/>Limpar</button>
    
  

   <?php if (isset($erro) && !empty($erro)): ?>
     <div class="alert alert-danger"><?php echo $erro; ?></div> 
       <?php endif; ?>
</form>

</div>




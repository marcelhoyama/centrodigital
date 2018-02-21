
<div class="container-fluid"> 
    <center> <h1>Editar Paciente </h1> </center>
 <form  method="POST" >
  
      <div class="form-group">
          <?php     $value = $viewData['dadosPaciente']; ?>
         <label for="inputNome" class="control-label" >Nome*</label>
         <input name="nome" type="text"   class="form-control" value="<?php echo $value['nome']; ?>"/>
          </div> 
     <div class="form-group">
       <label  class=" control-label">Sexo:</label>
       <label><?php if($value['sexo']==1){echo 'Masculino';}else{echo'Feminino';} ?></label>
                    
      </div>
      
         <div class="form-group">
         <label class="control-label">Celular*</label>
         <input name="celular" type="text" id="usuario_celular"  class="form-control" value="<?php echo $value['celular']; ?>" />
         </div>
         <div class="form-group">
         <label class="control-label">E-mail:</label>
         <label> <?php echo $value['email']; ?> </label>
         </div>
         
         
      <button type="submit" class="btn btn-success"  >Editar</button>
      <button type="reset" name="button_limpar"  class="btn btn-success"/>Limpar</button>
    
  

   <?php if (isset($erro) && !empty($erro)): ?>
     <div class="alert alert-danger"><?php echo $erro; ?></div> 
       <?php endif; ?>
</form>
 
       
         </div>
   





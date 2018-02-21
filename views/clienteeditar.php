

    
<div class="container-fluid"> 
    <h1>Alterar Cliente </h1>
 <form  method="POST" >
  
      <div class="form">
        
        <div class="form-group">
            <?php     $value = $viewData['dadosCliente']; ?>
         <label class="control-label">CPF:</label>
         <label><?php echo $value['cpf']; ?></label>
         </div>
          <div class="form-group">
            <label for="inputNome" class="control-label" >Nome*</label>
            <input name="nome" type="text" id="nome"  value="<?php echo $value['nome']; ?>" class="form-control"/>
          </div>
          
           <div class="form-group">
            <label for="inputProfissao" class="control-label" >Profissão*</label>
            <input name="profissao" type=text" id="profissao"  value="<?php echo $value['profissao']; ?>" class="form-control"/>
          </div>
          
           <div class="form-group">
            <label for="inputEstadoCivil" class="control-label" >Estado Civil*</label>
            <input name="estadocivil" type="text" id="estadocivil"  value="<?php echo $value['estadocivil']; ?>" class="form-control"/>
          </div>
           <div class="form-group">
            <label for="inputRg" class="control-label" >Identidade(RG)*</label>
            <input name="rg" type="text" id="rg"  value="<?php echo $value['rg']; ?>" class="form-control"/>
          </div>
           <div class="form-group">
            <label for="inputTipoDenominacao" class="control-label" >Tipo de Nominação*</label>
            <input name="tipodenominacao" type="text" id="tipodenominacao"  value="<?php echo $value['tipodenominacao']; ?>" class="form-control"/>
          </div>
          
           <table class="table" width="100%">

            <tr>
                <th>Codigo</th>
                
                <th>Endereço</th>

            </tr>

            <tr>


                <td> </td>
                <td> </td>
                <td> </td>

                <td></td>

            </tr>


            <?php
            if (isset($viewData['listaEndereco'])) {

                foreach ($viewData['listaEndereco'] as $value): {
                        ?>
                        <td> <?php echo $value['id']; ?></td>
                       
                        <td> <?php echo $value['endereco']; ?></td>

                        <td><a href="enderecoeditar?id=<?php echo $value['id']; ?> 

                               ">Alterar</a></td>
                               <td><a href="enderecoexcluir?id=<?php echo $value['id']; ?> 

                               ">Excluir</a></td>

                        </tr>


        <?php } endforeach;
} ?>



<!-- se for editar aparece o form para editar na mesma pagina, usar jquery,ajax,json -->


          <?php     $value = $viewData['dadosEndereco']; ?>
         <div class="form-group">
         <label class="control-label">Celular ou Fixo*:</label>
         <input name="telefone" type="text" id="telefone"  value="<?php echo $value['telefone']; ?>" size="11" class="form-control" />
         </div>
         
         <div class="form-group">
         <label class="control-label">Endereço:</label>
         <input name="endereco" type="text" id="endereco" value="<?php echo $value['endereco']; ?>"  class="form-control" />
         </div>
           <div class="form-group">
         <label class="control-label">Complemento:</label>
         <input name="complemento" type="text" id="complemento" value="<?php echo $value['complemento']; ?>" class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Bairro:</label>
         <input name="bairro" type="text" id="bairro" value="<?php echo $value['bairro']; ?>"  class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Cidade:</label>
         <input name="cidade" type="text" id="cidade" value="<?php echo $value['cidade']; ?>"  class="form-control" />
         </div>
         <div class="form-group">
         <label class="control-label">Estado:</label>
         <input name="estado" type="text" id="estado" value="<?php echo $value['estado']; ?>" class="form-control" />
         </div>
         
      
    
      <button type="submit" class="btn btn-success btn-block"  >Alterar</button>
      <button type="cancel" name="button_limpar"  class="btn btn-success btn-block"/>Cancelar</button>
    
  </div>

   <?php if (isset($erro) && !empty($erro)): ?>
     <div class="alert alert-danger"><?php echo $erro; ?></div> 
       <?php endif; ?>
      
 </form>
</div>





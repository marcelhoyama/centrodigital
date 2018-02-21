<title>Patrimonio</title>
<div class="container-fluid">
    <h1>Pesquisar Patrimonio</h1>
    <a href="patrimoniocadastrar">Novo Cadastro</a>
    
    
    <form  method=GET class="form" >
        <div class="input-group">
              <label>Pesquisar</label>
            <input type="text" class="form-control" name="pesquisa" placeholder="Pesquisa">
    <div class="input-group-btn">
      <button class="btn btn-success" type="submit">
        <i class="glyphicon glyphicon-search "></i>
      </button>
    </div>
  </div>
  

 <table class="table" width="100%">
 
     <tr>
      <th>Codigo</th>
      <th>Nome</th>
      <th>Patrimonio</th>
      
     </tr>
	
   <tr>
      
	
      <td> </td>
      <td> </td>
      <td> </td>
      
     <td></td>
     
    </tr>
    
   
     <?php
             
             if(isset($viewData['listaclientes'])){
       
               foreach ($viewData['listaclientes'] as $value): {
        
   ?>
      <td> <?php echo $value['id']; ?></td>
      <td> <?php echo $value['nome']; ?></td>
      <td> <?php echo $value['patrimonio']; ?></td>
      
     <td><a href="patrimonioeditar?id=<?php echo $value['id'];?> 
      
      ">Alterar</a></td>
     
    </tr>
    
   
             <?php } endforeach; }?>
        
      	
    
	     
    
    
  </table>

 <?php if (!empty($erro)): ?>
     <div class="warning"><?php echo $erro; ?></div> 
       <?php endif; ?>
    
    </form>

</div>
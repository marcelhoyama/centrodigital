<!-- Esse template = design (estilo) da maioria das paginas -->
<!DOCTYPE html> <!-- para usufruir do html5 -->
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <!-- As 3 meta tags acima *devem* vir em primeiro lugar dentro do `head`; 
    qualquer outro conteúdo deve vir *após* essas tags -->
   

       
      <link href="<?php echo BASE_URL; ?>assets/css/style.css" rel="stylesheet">
     
      <link href="<?php echo BASE_URL; ?>assets/css/container.css" rel="stylesheet">
      <script src="<?php echo BASE_URL; ?>assets/js/bootstrap.min.js"></script>
        <script src="<?php echo BASE_URL; ?>assets/js/jquery-3.1.1.min.js"></script>
          <script src="<?php echo BASE_URL; ?>assets/js/jquey.min.js"></script>
    

    
   </head>
  
      
<!--  aqui onde vai o corpo das paginas do sistema -->
<?php  $this->loadViewInTemplate($viewName, $viewData); ?>




</body>


</html>
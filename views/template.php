<!-- Esse template = design (estilo) da maioria das paginas -->
<!DOCTYPE html> <!-- para usufruir do html5 -->
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <!-- As 3 meta tags acima *devem* vir em primeiro lugar dentro do `head`; 
        qualquer outro conteúdo deve vir *após* essas tags -->
           <!-- Bootstrap -->
        <link href="<?php echo BASE_URL; ?>assets/css/bootstrap.min.css" rel="stylesheet">
        <script src="<?php echo BASE_URL; ?>assets/js/jquery-3.1.1.min.js"> </script>
       
        <script src="<?php echo BASE_URL; ?>assets/js/bootstrap.min.js"></script>
        <link href="<?php echo BASE_URL; ?>assets/css/form_inicial.css" rel="stylesheet" type="text/css" />
      

    </head>
    <nav class="navbar navbar-inverse">

        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <span class=" navbar-brand">CDI </span>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li ><span class="sr-only">(current)</span></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastrar<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo BASE_URL; ?>funccadastrar">Funcionario(a)</a></li>
                       
                        <li><a href="<?php echo BASE_URL; ?>clientecadastrar">Cliente</a></li>
                        <li><a href="<?php echo BASE_URL; ?>patrimoniocadastrar">Patrimonio</a></li>
                        
                        <li role="separator" class="divider"></li>
                       
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pesquisar <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo BASE_URL; ?>funcpesquisar">Funcionario(a)</a></li>
                        <li><a href="<?php echo BASE_URL; ?>clientepesquisar">Cliente</a></li>
                        <li><a href="<?php echo BASE_URL; ?>patrimoniopesquisar">Patrimonio</a></li>
                        
                        
                    </ul>
                </li>
                <li ><a href="<?php echo BASE_URL; ?>menuprincipal">Home <span class="sr-only"></span></a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">

                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#"> <?php echo $viewData['nome']; ?>
                        <span class="caret"></span> </a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo BASE_URL; ?>perfil">Editar Perfil </a></li>
                        <li><a href="<?php echo BASE_URL; ?>login/sair">Sair </a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->

    </nav>
    <body> 
        
        <!--  aqui onde vai o corpo das paginas do sistema -->
        <?php $this->loadViewInTemplate($viewName, $viewData); ?>




    </body>


</html>
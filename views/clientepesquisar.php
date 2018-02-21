<title>Pesquisa Clientes</title>
<div class="container-fluid">
    <h1>Pesquisar Cliente</h1>
    <a href="<?php echo BASE_URL; ?>clientecadastrar">
        <button class="btn btn-success">
            Novo Cadastro
        </button>
    </a>


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
                <th>Endereço</th>

            </tr>

            <tr>


                <td> </td>
                <td> </td>
                <td> </td>

                <td></td>

            </tr>


            <?php
            if (isset($viewData['listaclientes'])) {

                foreach ($viewData['listaclientes'] as $value): {
                        ?>
                        <td> <?php echo $value['id']; ?></td>
                        <td> <?php echo $value['nome']; ?></td>
                        <td> <?php echo $value['endereco']; ?></td>

                        <td><a href="clienteeditar?id=<?php echo $value['id']; ?> 

                               ">Alterar</a></td>
                               <td><a href="clientepatrimonio?id=<?php echo $value['id']; ?> 

                               ">Ver Patrimonio</a></td>

                        </tr>


        <?php } endforeach;
} ?>






        </table>



</div>
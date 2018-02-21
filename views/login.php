

<link href="<?php echo BASE_URL; ?>assets/css/login.css" rel="stylesheet">


<title>Login</title>
<div class="titulo">
    <center>
        Sistema de Cadastro - Centro Digital 
    </center>
</div>
<div class="loginarea">

    <form  method="POST" >




        <input class="campos" name="email" type="email"  id="email" required placeholder="Digite seu email" autofocus="on" autocomplete="off"/>





        <input class="campos" name="senha" type="password" maxlength="6" required placeholder="Digite sua senha" autocomplete="off"/>





        <input class="campos" src=" " name="entrar" type="submit" value="Logar " /></br>
        <a class="loginesqueceu" href="esqueci">Esqueceu Senha!</a>
        <a class="loginesqueceu" href="cadastrofunc"></a>
        <?php if (!empty($erro)): ?>
            <div class="warning"><?php echo $erro; ?></div> 
        <?php endif; ?>




</div>
<div class="duvida">
    <center>Duvidas?</center>
    <center>marecrisbr@gmail.com</center>
</div>
</form>






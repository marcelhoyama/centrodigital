
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <!-- Theme Made By www.w3schools.com - No Copyright -->
  <title>Centro Digital Informática</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  body {
      font: 400 15px Lato, sans-serif;
      line-height: 1.8;
      color:#666666;
  }
 
  h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: #fe9900;
      font-weight: 600;
      margin-bottom: 30px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      color: #fe9900;
      font-weight: 400;
      margin-bottom: 30px;
  }  
  
  h7{
       font-size: 19px;
      line-height: 1.375em;
      color: #fe9900;
      color:#666666;
      font-weight: 400;
      margin-bottom: 30px;
  }
  hr{
      background-color: #003466;
      height: 3px;
  }
  .bannerlogo { /* primeiro banner*/
      background-color: #fff;
      color: #003466;
      margin-top: 65px ;
      padding: 10PX;
      
  }
  .jumbotron { 
    background-color: #003466; /* azul */
    color: #ffffff;
    padding: 100px 25px;
      font-family: Montserrat, sans-serif;
}
  .container-fluid {
      padding: 60px 50px;
  }
  .bg-grey { /*cor dos baNNER*/
      background-color: #003466;
  }
  .logo-small {
      color: #fe9900;
      font-size: 50px;
  }
  .logo {
      color: #fe9900;
      font-size: 200px;
  }
  .thumbnail {
      padding: 0 0 15px 0;
      border: none;
      border-radius: 0;
  }
  .thumbnail img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
  }
  .carousel-control.right, .carousel-control.left {
      background-image: none;
      color: #003466;
  }
  .carousel-indicators li {
      border-color: #fe9900;
  }
  .carousel-indicators li.active {
      background-color: #fe9900;
  }
  .item h4 {
      font-size: 19px;
      line-height: 1.375em;
      font-weight: 400;
      font-style: italic;
      margin: 70px 0;
  }
  .item span {
      font-style: normal;
  }
  .panel {
      border: 1px solid #fe9900; 
      border-radius:0 !important;
      transition: box-shadow 0.5s;
  }
  .panel:hover {
      box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
      border: 1px solid #fe9900;
      background-color: #fff !important;
      color: #fe9900;
  }
  .panel-heading {
      color: #fff !important;
      background-color: #fe9900 !important;
      padding: 25px;
      border-bottom: 1px solid transparent;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
  }
  .panel-footer {
      background-color: white !important;
  }
  .panel-footer h3 {
      font-size: 32px;
  }
  .panel-footer h4 {
      color: #aaa;
      font-size: 14px;
  }
  .panel-footer .btn {
      margin: 15px 0;
      background-color: #003499;
      color: #fff;
  }
  .navbar {
      margin-bottom: 0;
      background-color: #fe9900;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
     
      letter-spacing: 4px;
      border-radius: 0;
      font-family: Montserrat, sans-serif;
     
  }
  .navbar li a, .navbar .navbar-brand {
      color: #fff !important;
      
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #fe9900 !important;
      background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
  }
  footer .glyphicon {
      font-size: 20px;
      margin-bottom: 20px;
      color: #fe9900;
  }
  .slideanim {visibility:hidden;}
  .slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
  }
  </style>
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
        <img class="img-responsive" src="assets/images/logo.png" width="200" height="140" />
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about">SOBRE</a></li>
        <li><a href="#services">SERVIÇOS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">CONTRATOS</a></li>
        <li><a href="#contact">CONTATO</a></li>
      </ul>
    </div>
  </div>
</nav>

   <!-- <div class="bannerlogo" > 
        
                <img class="img-responsive" src="assets/images/banner1.png" width="100%" height="300" />
              
            </div> -->
        
           
   <div class="jumbotron text-center">
  <form>
       <h1>Revele aqui suas fotos digitais!</h1> 
  <h2>São varios tamanhos </h2> 
  <p>a partir de <h1>R$ 1,25</h1> tamanho padrão (10x15)</p>
   <!-- <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email" required>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Inscreva-se</button>
      </div>
    </div>-->
  </form>
</div>
    <hr/>
<!-- Container (About Section) -->
<div id="about" class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
        <h2 style="color:#666666">Sobre Centro Digital Informática</h2><br>
      <h4 style="color:#666666">Uma pequena empresa que começou com manutenção de computadores, agregando junto com serviços de LANHOUSE.</h4><br>
      <h4 style="color:#666666">Uma empresa a 14 anos no ramo da tecnologia, que aos poucos vamos evoluindo conforme o crescimento da cidade de Cabreúva .</h4></p>
      <br><!--<button class="btn btn-default btn-lg">Get in Touch</button>-->
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-4">
        <span class="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div class="col-sm-8">
        <h2 style="color: #fff;" >Nossos Valores</h2><br>
      <p style="color:#fff"><strong>MISSÃO:</strong> Prestar em nossos serviços diferenciando-os pela QUALIDADE e ATENDIMENTO, gerando VALOR para os nossos clientes  .</p><br>
      <p style="color:#fff"><strong>VISÃO:</strong> Ser referência permanente de qualidade na prestação de serviços e complementares, superando sempre as expectativas de nossos clientes.</p>
    </div>
  </div>
</div>

<!-- Container (Services Section) -->
<div id="services" class="container-fluid text-center">
  <h2>SERVIÇOS</h2>
  <h4>....</h4>
  <br>
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-off logo-small"></span>
      <h4>LANHOUSE</h4>
      
      <p>Digitalização de documentos (tipo papel A4)</p>
      <p>Impressões coloridas (tipos de papel A4, A5)</p>
      <p>Contratos (Aluguel, Prestação de serviço, Orçamento, etc.)</p>
      <p>Declarações (Residência, União Estavel, etc.)</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-heart logo-small"></span>
      <h4>Enfeites de festas e Lembrançinhas</h4>
      <p>Castelo</p>
      <p>Torre </p>
      <p>Guardanapo </p>
      <p>Almofadinha </p>
      <p>Chinelo </p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-lock logo-small"></span>
      <h4>CONTRATOS</h4>
      <p>Manutenção de Computadores</p>
      <p>Suporte de soluções digitais</p>
      <p>Chamados (ir no local)</p>
    </div>
  </div>
  <br><br>
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-leaf logo-small"></span>
      <h4>RECICLAGEM</h4>
      <p>Computadores</p>
      <p>Notebooks </p>
      <p>Bateria de notebook </p>
      <p>Disco Rigido (HD) </p>
      <p>Placa-mães </p>
      <p>Memorias </p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-certificate logo-small"></span>
      <h4>GARANTIA</h4>
      <p>Em todos Serviços de Informatica e Peças</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-wrench logo-small"></span>
      <h4 >Manutenção de Computadores ( Orçamento sem Compromisso)</h4>
      <p>Formatação com Backup</p>
      <p>Manutenção Preventiva e Corretiva </p>
    </div>
  </div>
</div>

<!-- Container (Portfolio Section) -->
<div id="portfolio" class="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br>
  <h4>O que nós temos feito</h4>
  <div class="row text-center slideanim">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="paris.jpg" alt="empresa1" width="400" height="300">
        <p><strong>Empresa 1</strong></p>
        <p>Contrato Manutenção Preventiva</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="newyork.jpg" alt="empresa2" width="400" height="300">
        <p><strong>Empresa 2</strong></p>
        <p>Contrato Manutenção Corretiva</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="sanfran.jpg" alt="empresa3" width="400" height="300">
        <p><strong>Empresa 3</strong></p>
        <p>Contrato Suporte Soluções Digitais</p>
      </div>
    </div>
  </div><br>
  
  <h2>O que nossos clientes dizem de nós...</h2>
  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <h4>"This company is the best. I am so happy with the result!"<br><span>Michael Roe, Vice President, Empresa 1</span></h4>
      </div>
      <div class="item">
        <h4>"One word... WOW!!"<br><span>John Doe, Salesman, Empresa 3</span></h4>
      </div>
      <div class="item">
        <h4>"Could I... BE any more happy with this company?"<br><span>Chandler Bing, Actor, Empresa 2</span></h4>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<!-- Container (Pricing Section) -->
<div id="pricing" class="container-fluid">
  <div class="text-center">
    <h2>Contrato</h2>
    <h4>Veja o Contrato que lhe melhor te atende</h4>
  </div>
  <div class="row slideanim">
    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Basic</h1>
        </div>
        <div class="panel-body">
          <p><strong>01</strong>  chamado por mês</p>
          <p><strong>01</strong>  Formatação</p>
          <p><strong>01</strong>  limpeza com ar</p>
          <p><strong></strong> Outros...</p>
          <p><strong></strong></p>
        </div>
        <div class="panel-footer">
          <h3>R$ </h3>
          <h4>por mês</h4>
         <!-- <button  class="btn btn-lg">Sign Up</button>-->
        </div>
      </div>      
    </div>     
    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Pro</h1>
        </div>
        <div class="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>R$</h3>
          <h4>per month</h4>
          <!--<button class="btn btn-lg">Sign Up</button>-->
        </div>
      </div>      
    </div>       
    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Premium</h1>
        </div>
        <div class="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>R$</h3>
          <h4>per month</h4>
        <!--  <button class="btn btn-lg">Sign Up</button>-->
        </div>
      </div>      
    </div>    
  </div>
</div>

<!-- Container (Contact Section) -->
<div id="contact" class="container-fluid bg-grey">
  <h2 style="color:#fff" class="text-center" >CONTATO</h2>
  <div class="row">
    <div class="col-sm-5">
      <p style="color:#fff">Contate nos para maiores informações</p>
      <p style="color:#fff"><span class="glyphicon glyphicon-map-marker"></span> Cabreúva, SP</p>
      <p style="color:#fff"><span class="glyphicon glyphicon-phone"></span> +55 11 4409-1477</p>
      <p style="color:#fff"><span class="glyphicon glyphicon-envelope"></span> centrodig@terra.com.br</p>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Seu Nome" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Seu Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Sua Mensagem" rows="5"></textarea><br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Add Google Maps -->
<div id="googleMap" style="height:400px;width:100%;"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3665.94515185757!2d-47.062105385028005!3d-23.24508288484083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94cf3f573797dfc1%3A0x55638d4308252044!2sCentro+Digital+Inform%C3%A1tica+-+R.+Br%C3%A1s+Lopes+Filho%2C+56%2C+Cabre%C3%BAva+-+SP%2C+13315-000!3m2!1d-23.245155099999998!2d-47.0599074!5e0!3m2!1spt-BR!2sbr!4v1506995317282" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></div>
<!--<script>
function myMap() {
     
var myCenter = new google.maps.LatLng(-47.0599074, -23.2451551);
var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}
</script>-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>
<!--
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
-->

<footer class="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p> Centro Digital Informática - 2017 <a href="http://www.devmg.pe.hu" title="Visite Portfolio">Marcel Hoyama</a></p>
</footer>

<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
</script>

</body>
</html>


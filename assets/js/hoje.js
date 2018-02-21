dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto", "setembro","outubro", "novembro", "dezembro")
now = new Date
document.write ("<h1>" + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ] + "</h1>")
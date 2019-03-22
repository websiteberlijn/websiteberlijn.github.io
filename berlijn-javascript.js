var countDownDate = new Date("April 2 , 2019 22:30:00").getTime();

// Update de timer elke 1 seconde
var x = setInterval(function() {

  // Pakt de datum van vandaag
  var now = new Date().getTime();
    
  // zoekt het verschil tussen de 2 datums
  var distance = countDownDate - now;
    
  // Berekent de dagen, uren, minuten en seconden
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Zet de output in de webpagina met een id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Dit is zodat als de timer afgelopen is er een tekst komt te staan i.p.v. 0d 0h 0m 0s
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WE GAAN VERTREKKEN!";
  }
}, 1000);

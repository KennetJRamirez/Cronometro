let horas = 0;
let minutos = 0;
let segundos = 0;

let intervalo;

$(".iniciar").click(function () {
  iniciar();
});

function iniciar() {
  intervalo = setTimeout(function () {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;

      if (minutos == 60) {
        minutos = 0;
        horas++;
      }
    }

    if (horas < 10) $(".horas").text("0" + horas + ":");
    else $(".horas").text(horas + ":");
    if (minutos < 10) $(".minutos").text("0" + minutos + ":");
    else $(".minutos").text(minutos + ":");
    if (segundos < 10) $(".segundos").text("0" + segundos);
    else $(".segundos").text(segundos);

    iniciar();
  }, 1000);
}

$(".parar").click(function () {
  clearTimeout(intervalo);
});

$(".reiniciar").click(function () {
  horas = 0;
  minutos = 0;
  segundos = 0;

  $(".horas").text("00");
  $(".minutos").text(":00");
  $(".segundos").text(":00");
  clearTimeout(intervalo);
});

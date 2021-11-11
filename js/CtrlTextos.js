"use strict"; //directiva para indicar elementos desaprobados
var forma = document.getElementById("forma"),
/*otra forma de hacerlo
se crean dos arreglos de campos de entrada y otro para las salidas

var forma = document.getElementById("forma"),
campos= ["nombre","secreto","navegadro","email",
        "usuario","url","telefono","buscar","verso"],
salidas=["salidaNombre","salidaSecreto","salidaNavegador,
        "salidaEmail","salidaUsuario","salidaUrl",
        "salidaBuscar","salidaVerso"]

se barre cada uno de losd atos de los cuadros de entrada
function procesa(){
    for(var i = 0, longitud = campos.length; i<longitud; i++){
        var campo = forma[campos[i]];
        var salida = document.getElementById(salidas[i]);
        salida.value = nombre
    }
         */
    salidaN = document.getElementById("salidaNombre"),
    salidaS = document.getElementById("salidaSecreto"),
    salidaNa = document.getElementById("salidaNavegador"),
    salidaE = document.getElementById("salidaEmail"),
    salidaU = document.getElementById("salidaUsuario"),
    salidaUr = document.getElementById("salidaUrl"),
    salidaB = document.getElementById("salidaBuscar"),
    salidaV = document.getElementById("salidaVerso");
//en el formulario forma con addEventListener invocar procesas
    forma.addEventListener("submit", procesa, false);
function procesa(){
    //recuepera el valor
  var nombre = forma["nombre"].value;
  var secreto = forma["secreto"].value;
  var navegador = forma["navegador"].value;
  var email = forma["email"].value;
  var usuario = forma["usuario"].value;
  var url = forma["url"].value;
  var buscar = forma["buscar"].value;
  var verso = forma["verso"].value;
  //direcciona a la salida
  salidaN.value =  nombre;
  salidaS.value =  secreto;
  salidaNa.value =  navegador;
  salidaE.value =  email;
  salidaU.value =  usuario;
  salidaUr.value =  url;
  salidaB.value =  buscar;
  salidaV.value =  verso;
  

}

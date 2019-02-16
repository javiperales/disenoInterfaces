 $(document).ready(function () {
     ocultar();
     mostrar();
     deslizar();
     deslizarlogin();
     contacto();
     $(".mostrar").hide();
     $(".formulario").hide();

 });

 var ocultar = function () {
     $(".ocultar").click(function () {
         $(".contenedorAudio").hide("fast");
         $(".ocultar").hide("fast");
         $(".mostrar").show("fast");
     });
 }

 var mostrar = function () {
     $(".mostrar").click(function () {
         $(".contenedorAudio").show("fast");
         $(".mostrar").hide("fast");
         $(".ocultar").show("fast");
     })
 }

 var deslizar = function () {
     $(".desplegar").click(function () {
         $(".videoY").fadeToggle("slow");
     });
 }

 var deslizarlogin = function () {
     $("#login").click(function () {
         $(".formulario").slideToggle();
     });
 }

 var contacto = function () {
     $(".contacto").click(function () {
         $(".contacto").animate({
             marginLeft: '200px',
         }, 1000, 'swing').animate({
             marginLeft: '0px',
         }, 1000, 'linear', mostrarCartel);
     })
 }
 var mostrarCartel = function () {
     $("#contacto").slideDown(); 
 }
 
 

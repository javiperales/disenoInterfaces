 $(document).ready(function () {
     fade();
     fade2();
     ocultar();
     mostrar();
     deslizar();
     animate();
     $(".mostrar").hide();
     $(".formulario").hide();
 });



 var fade = function () {
     $(".foto1").click(function () {
         $(this).fadeIn("slow", function () {
             $(".foto1").css({
                 "background-color": "yellow",
                 "font-size": "200%",
                 "with": "95%",
                 "height": "300px"
             });
         })
     })
 }

 var fade2 = function () {
     $(".foto1").hover(function () {
         $(this).fadeIn("slow", function () {
             $(".foto1").css({
                 "background-color": "#fff1dd",
                 "with": "90%",
                 "height": "200px"
             });
         })
     })
 }

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
         $(".videoY").slideToggle("fast");
     });
 }

 var animate = function () {
     $("#login").click(function () {
         $(".formulario").toggle();
     });
 }

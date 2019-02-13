 $(document).ready(function () {
     fade();
     ocultar();
     mostrar();
     deslizar();
     $(".mostrar").hide();
 });



 var fade = function () {
     $(".foto1").hover( function () {
         $(this).fadeIn("slow", function () {
             $(".foto1").css({
                 "background-color": "yellow",
                 "font-size": "200%",
                 "with": "95%",
                 "height": "300px"
             });

         })
     }).fadeIn(function(){
         $(".foto1").css({
             "background-color": "#fff1dd",
                 "font-size": "100%",
                 "with": "90%",
                 "height": "200px"
         })
     });
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

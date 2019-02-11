 $(document).ready(function() {
           fade();
           slide();
     mostrar();
        });



var fade = function(){
    $(".foto1").click(function(){
       $(this).fadeOut("slow", function(){
           $(this).fadeIn("fast");
       });
    });
}

var slide = function(){
    $(".ocultar").click(function(){
      $(".contenedorAudio").hide("slow");
        $(".ocultar").hide("fast");
    });
}

var mostrar = function(){
    $(".mostrar").click(function(){
        $(".contenedorAudio").show("fast");
        $(".mostrar").hide("fast");
    })
}



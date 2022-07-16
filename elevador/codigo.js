alerta();
function alerta(){
	alert("Selecciona la capacidad de tu elevador 1-5 \n Sube a las personas al elevador \n Limite de las personas en espera es de 5");
}

$(document).keydown(function(tecla){
    $('#subir').css('position', 'relative');
    if(tecla.keyCode == 38) { 
        $('#subir').animate({top: "-=110px"}, 'fast'); 
    }else if(tecla.keyCode == 40){
        $('#subir').animate({top: "+=110px"}, 'fast');
    }
});
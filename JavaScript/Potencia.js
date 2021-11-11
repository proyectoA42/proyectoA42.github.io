"use strict";
// @ts-ignore
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

var forma = document.getElementById("forma");
    

function operacion(){
    var potencia = forma["potencia"].value,
        resultado = [],
        i=0;

        for (var i = 0; i < 11; i++) 
        {
            var c = parseInt(potencia) ** i;
            // @ts-ignore
            resultado  += potencia + " a la " + i + " = " + c + "\n";
        }

    // @ts-ignore
    document.getElementById("resultado").value = resultado;
    
    
    
}

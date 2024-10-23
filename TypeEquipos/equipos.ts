interface puntos {
    punto : number;
}

let TribuRoja : puntos ={
    punto : 0
}
let TribuNegra : puntos ={
    punto : 0
}

const HandballRoja = document.getElementById ("HandballRoja") as HTMLInputElement;
const AjedrezRoja = document.getElementById ("AjedrezRoja") as HTMLInputElement;
const ResistenciaRoja = document.getElementById ("ResistenciaRoja") as HTMLInputElement;

const HandballNegra = document.getElementById ("HandballNegra") as HTMLInputElement;
const AjedrezNegra = document.getElementById ("AjedrezNegra") as HTMLInputElement;
const ResistenciaNegra = document.getElementById ("ResistenciaNegra") as HTMLInputElement;

const OutputTribuRoja= document.getElementById ("estbotonroj") as HTMLElement;
const OutputTribuNegra= document.getElementById ("estbotonneg") as HTMLElement; // ver
const OutputTotal= document.getElementById("totalboton") as HTMLElement;

function contarroja (): void {

    let ValorHandballRoja : number = parseInt (HandballRoja.value, 10);
    let ValorAjedrezRoja : number = parseInt (AjedrezRoja.value, 10);
    let ValorResistenciaRoja : number = parseInt (ResistenciaRoja.value, 10);

    TribuRoja.punto = ValorHandballRoja + ValorAjedrezRoja + ValorResistenciaRoja ;

    OutputTribuRoja.innerText = TribuRoja.punto.toString();

}

function contarnegra (): void {
        
    let ValorHandballNegra : number = parseInt (HandballNegra.value, 10);
    let ValorAjedrezNegra : number = parseInt (AjedrezNegra.value, 10);
    let ValorResistenciaNegra : number = parseInt (ResistenciaNegra.value, 10);

    TribuNegra.punto = ValorHandballNegra + ValorAjedrezNegra + ValorResistenciaNegra; 

    OutputTribuNegra.innerText = TribuNegra.punto.toString();

}

function mostrar () {
 let EquipoGanador = "";

    if (TribuRoja.punto > TribuNegra.punto) {
        EquipoGanador = "La Tribu ganadora es la Tribu Roja con: " + TribuRoja.punto + " puntos.";
    }
    if (TribuNegra.punto > TribuRoja.punto) {
        EquipoGanador = "La Tribu ganadora es la Tribu Negra con: " + TribuNegra.punto + " puntos.";
    }
    if (TribuNegra.punto == TribuRoja.punto){
        EquipoGanador = "Las Tribus Empataron con: " + TribuNegra.punto + " puntos.";
    }
    OutputTotal.innerText = EquipoGanador;
}

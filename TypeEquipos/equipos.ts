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
const ResistenciaNegra = document.getElementById ("ResistenciaNegrSa") as HTMLInputElement;

const OutputTribuRoja= document.getElementById(TribuRoja)as HTMLInputElement;
const OutputTribuNegra= document.getElementById(TribuNegra)as HTMLInputElement;

function contar (): void {
    let: ValorHandballRoja : number = parseInt (HandballRoja.value, 10);
    let: ValorAjedrezRoja : number = parseInt (AjedrezRoja.value, 10);
    let: ValorResistenciaRoja : number = parseInt (ResistenciaRoja.value, 10);

    
    let: ValorHandballNegra : number = parseInt (HandballNegra.value, 10);
    let: ValorAjedrezNegra : number = parseInt (AjedrezNegra.value, 10);
    let: ValorResistenciaNegra : number = parseInt (ResistenciaNegra.value, 10);

    TribuRoja.punto += ValorHandballRoja + ValorAjedrezRoja + ValorResistenciaRoja ;
    TribuNegra.punto +=ValorHandballNegra + ValorHandballNegra + ValorResistenciaNegra; 

    OutputTribuRoja.innerText += TribuRoja.punto.toString();
    OutputTribuNegra.innerText += TribuNegra.punto.toString();

    if (TribuRoja.punto > TribuNegra.punto) {

        EquipoGanador.innerText += "Equipo Rojo";
        
    }
    if (TribuNegra.punto > TribuRoja.punto) {
        
        EquipoGanador.innerText += "Equipo Negro";

    }

}
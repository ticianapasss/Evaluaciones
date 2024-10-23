var TribuRoja = {
    punto: 0
};
var TribuNegra = {
    punto: 0
};
var HandballRoja = document.getElementById("HandballRoja");
var AjedrezRoja = document.getElementById("AjedrezRoja");
var ResistenciaRoja = document.getElementById("ResistenciaRoja");
var HandballNegra = document.getElementById("HandballNegra");
var AjedrezNegra = document.getElementById("AjedrezNegra");
var ResistenciaNegra = document.getElementById("ResistenciaNegra");
var OutputTribuRoja = document.getElementById("estbotonroj");
var OutputTribuNegra = document.getElementById("estbotonneg"); // ver
function contar() {
    var ValorHandballRoja = parseInt(HandballRoja.value, 10);
    var ValorAjedrezRoja = parseInt(AjedrezRoja.value, 10);
    var ValorResistenciaRoja = parseInt(ResistenciaRoja.value, 10);
    var ValorHandballNegra = parseInt(HandballNegra.value, 10);
    var ValorAjedrezNegra = parseInt(AjedrezNegra.value, 10);
    var ValorResistenciaNegra = parseInt(ResistenciaNegra.value, 10);
    TribuRoja.punto += ValorHandballRoja + ValorAjedrezRoja + ValorResistenciaRoja;
    TribuNegra.punto += ValorHandballNegra + ValorHandballNegra + ValorResistenciaNegra;
    OutputTribuRoja.innerText += TribuRoja.punto.toString();
    OutputTribuNegra.innerText += TribuNegra.punto.toString();
}
function mostrar() {
    var EquipoGanador = "";
    if (TribuRoja.punto > TribuNegra.punto) {
        EquipoGanador = "La Tribu ganadora es la Tribu Roja";
    }
    if (TribuNegra.punto > TribuRoja.punto) {
        EquipoGanador = "La Tribu ganadora es la Tribu Negra";
    }
    OutputTribuRoja.innerText = EquipoGanador;
}

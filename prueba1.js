function calcularMes(mes){
    var numero = mes.toInt();
    if(numero >= 1 && numero <=4){
        console.log("primer trimestre");
    }
    else if(numero >= 5 && numero <=8){
        console.log("segundo trimestre");
    }
    else if(numero >= 9 && numero <=12){
        console.log("tercer trimestre");
    }
    else{
        console.log("numero incorrecto");
    }
}
function ingredientes(status){

    return status
}

function massa(receberingredientes){

    if(receberingredientes == true){
        return "receita carregada"
    }

}

//
console.log(massa(ingredientes()))
//---------minhas classes



function ligar(status){
    return status
}

function ventilador(verificar){

    if(verificar == true){
        return "Funcionando"
    } else{
        return "Desligado"
    }

}

//console.log(ventilador(ligar(true)))
//-------------------------------------

function ligarComputador(status){
    return status
}

function computador(verificar){
    if(verificar == true){
        return "Computador ligado"
    } else {
        return "Computador desligado"
    }
}

//console.log(ligarComputador(computador(true)))
//--------------------------------------

function movimento(status){
    return status
}

function elevador(verificar, andar){
    if(verificar == true){
        for(let i=0;i<5;i++){
            if(andar == i){
                return "abre portas"
            }
        }
    } else {
        return "elevador desligado"
    }
}

console.log(elevador(movimento(true), 3))


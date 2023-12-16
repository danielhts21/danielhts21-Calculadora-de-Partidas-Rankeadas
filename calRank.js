let saldoVitoria = subtrair(67, 5)
let nivel = saldoVitoria

function subtrair (vitoria, derrota){
    let nivel = vitoria - derrota
    return nivel    
}   

if (saldoVitoria <=10){
    saldoVitoria = "Ferro"
}else if (saldoVitoria <=20){
    saldoVitoria = "Bronze"
}else if (saldoVitoria <= 50){
    saldoVitoria = "Prata"
}else if (saldoVitoria<=80){
    saldoVitoria = "Ouro"
}else if (saldoVitoria <= 90){
    saldoVitoria = "Diamante"
}else if (saldoVitoria <= 100){
    saldoVitoria = "Lendário"
}else {
    saldoVitoria = "Radiante"
}

switch (saldoVitoria){
    case "Ferro":
        console.log("O Herói tem de saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Bronze":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Prata":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Ouro":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Diamante":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Lendário":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;
    case "Radiante":
        console.log("O Herói tem saldo de " + nivel + " está no nível de " + saldoVitoria);
            break;

    }
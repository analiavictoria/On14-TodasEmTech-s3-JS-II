//EXERCICIOS JS II:

// 1. Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. 
// Se for vogal, imprime SIM, se for consoante imprima Não. Com SWITCH.

function alfabeto()
{
 
    let letra = prompt("Insira uma vogal: ").toLocaleLowerCase();

    switch(letra){
        case 'a': alert("Sim, a letra é uma vogal.");
        break;
        case 'e': alert("Sim, a letra é uma vogal.");
        break;
        case 'i': alert("Sim, a letra é uma vogal.");
        break;
        case 'o': alert("Sim, a letra é uma vogal.");
        break;
        case 'u': alert("Sim, a letra é uma vogal.");
        break;
        default:
            alert("Não, a letra é uma consoante.");
    }

}

// 2. Farmacia JS está em promoção. 
// A cada 2 produtos iguais comprados, receba 5 reais de desconto. 
// Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

function farmacia (){

    let prdt1 = Number(prompt("Informe o valor do 1º produto: "));
    let prdt2 = Number(prompt("Informe o valor do 2º produto: "));

    if(prdt1 == prdt2){
        alert("Total a pagar: R$" + (prdt1+prdt2-5)) 
    }
    else{
        alert("Total a pagar: R$" + (prdt1+prdt2))
    }

}
// calculadora de partidas ranqueadas
function quantDeVitorias(vitorias, derrotas)
{

// calculamos o saldo de vitorias dentro da função
    let saldoVitorias = vitorias - derrotas;
    let nivel="";
//usamos if, else if e else para determinar o nivel do herói
    if (vitorias <=10){
        nivel = "Ferro"; 
    }
    else if(saldoVitorias >=11 && saldoVitorias<=20) {
        nivel = "Bronze";
    }
    else if(saldoVitorias >=21 && saldoVitorias <=50) {
        nivel = "Prata";
    }
    else if(saldoVitorias >=51 && saldoVitorias <=80) {
        nivel = "Ouro";
    }
    else if(saldoVitorias >=81 && saldoVitorias <=90) {
        nivel = "Diamante";
    }
     else if(saldoVitorias >=91 && saldoVitorias <=100) {
        nivel = "Lendário";
    }
    else
    {
        nivel = "Imortal";
    }
// exibir o resultado no console
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`);
}

// Exemplo de chamada da função:
quantDeVitorias(1300, 10);
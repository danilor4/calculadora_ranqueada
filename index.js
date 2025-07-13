// calculadora de partidas ranqueadas
quantDeVitorias()
function quantDeVitorias() {
    let vitorias =0;
    let derrotas =0;
    }
    if (vitorias <=10){
        console.log("O personagem esta no nivel Ferro");
    }
    else if(vitorias >=11 && vitorias<=20) {
        console.log("O Personagem esta no nivel Bronze");
    }
    else if(vitorias >=21 && vitorias <=50) {
        console.log("O personagems esta no nivel Prata");
    }
    else if(vitorias >=51 && vitorias <=80){
        console.log("O personagem esta no nivel Ouro");
    }
    else if(vitorias >=81 && vitorias <=90) {
        console.log("O personagem esta no nivel Diamante");
    }
     else if(vitorias >=91 && vitorias <=100) {
        console.log("O personagem esta no nivel Lendário");
    }
    else
    {
        console.log("O personagem esta no nivel Imortal");
    }
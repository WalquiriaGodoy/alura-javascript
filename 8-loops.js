console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || //ou uma ou outra condição para remover a duplicação de código
    estaAcompanhada == true;
    
    let contador = 0;
    let destinoExiste = false;

for (let cont = 0; cont < 3; cont++){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true
        console.log("Destino existe: ", destinoExiste);
        break;
    }
    contador += 1;
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
}else{
    console.log("Desculpe,tivemos um erro.");
}


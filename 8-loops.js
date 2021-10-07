console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || //ou uma ou outra condição para remover a duplicação de código
    estaAcompanhada == true;
    
    let contador = 0;
    let destinoExiste = false;
    while (contador < 3){
        if (listaDeDestinos[contador] == destino){
            destinoExiste = true
            break;
        }
        contador += 1;
    }
console.log("Destino existe: ", destinoExiste)


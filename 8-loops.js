console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || //ou uma ou outra condição para remover a duplicação de código
    estaAcompanhada == true;
    
    let contador = 0;
    while (contador < 3){
        if (listaDeDestinos[contador] == destino){
            console.log("Destino existe");
        }else{
            console.log("Destino não existe")
        }
        contador += 1;
    }



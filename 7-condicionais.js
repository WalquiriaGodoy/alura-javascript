console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

const estaAcompanhada = false;
const temPassagemComprada = true;

//if(idadeComprador >= 18){
//    console.log("Comprador maior de idade");    
//    listaDeDestinos.splice(1,1);  //remove item
//}else if(estaAcompanhada) {
//    console.log("O comprador é menor, mas está acompanhado");
//    listaDeDestinos.splice(1,1);  //remove item
//}else{
//    console.log("Não é maior de idade, não posso vender");
//}

if(idadeComprador >= 18 || //ou uma ou outra condição para remover a duplicação de código
    estaAcompanhada == true
    ){
    console.log("Comprador maior de idade ou está acompanhado"); 
    console.log("Boa viagem!");   
    listaDeDestinos.splice(1,1);  //remove item
}else{
    console.log("Não é maior de idade, não posso vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);
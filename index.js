import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = null;
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 88822233309;

let valor = 200
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);

console.log(`Condicionais:`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`
	);

let idadeComprador = 15;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
	listaDeDestinos.splice(1,1); //removendo um item
} else {
	console.log(`Sua idade é ${idadeComprador}, desta forma não pode realizar a compra.`)
}

console.log(`Destinos ainda possíveis:`);
console.log(listaDeDestinos);


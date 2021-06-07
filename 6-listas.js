console.log(`Trabalhando com listas:`);

const cidadeBA = `Salvador`;
const cidadeSP = `São Paulo`;
const cidadeRJ = `Rio de Janeiro`;

console.log(cidadeBA, cidadeRJ, cidadeSP);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`
	);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //push adiciona um item a lista

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

console.log(`Destinos possíveis SP:`);
console.log(listaDeDestinos[1]);

listaDeDestinos.splice(2,1);
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);



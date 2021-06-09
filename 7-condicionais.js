console.log(`Condicionais:`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`
	);

let idadeComprador = 17;
const estaAcompanhada  = false;

if (idadeComprador >= 18 || estaAcompanhada == true) 
{
	console.log(`Comprador maior de idade ou acompanhado de responsável.`);
    listaDeDestinos.splice(1, 1); // removendo item
}	else	
		{
    	console.log(`Não é maior de idade e não possui responsável presente.`);
		}

console.log(listaDeDestinos);

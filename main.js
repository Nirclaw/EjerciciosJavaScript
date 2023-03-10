confirm
prompt

let lista = []
//Prompt --> Me presenta los datos que ingreamos del primero al ultimo
//Unshift --> Me presenta los datos que ingreamos del ultimo al primero
do {
 lista.unshift(prompt('Digite un valor'))
} while (confirm('Desea guardar otro dato?'))
console.log(lista)

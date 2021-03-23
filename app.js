const { crearArchivo } = require('./helpers/multiplicar'); //desestructuracion
const colors = require('colors');
const argv = require('./config/yargs');


/*const tabla5 = [
    5*1, 5*2,
    5*3, 5*4,
    5*5, 5*6,
    5*7, 5*8,
    5*9, 5*10
];
tabla5.forEach(element => console.log(element)); */

console.clear();
console.log(argv); //argv del paquete de yargs

//console.log("base: yargs" , argv.base);
//const [ , , arg3] = process.argv;
//const [ , base = 5] = arg3.split('=');
//const base = 6;

crearArchivo(argv.base, argv.listar, argv.hasta) //enviarle los atgumentos/parametros a multiplicar.js
    .then( nombreArchivo => console.log(colors.yellow(nombreArchivo, 'creado.')))
    .catch( err => console.log(err));


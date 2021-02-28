const { crearArchivo } = require('./helpers/mutiplicar');
const argv = require('./config/yargs');
const colors = require('colors/safe');

// console.clear();

// console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo, colors.rainbow('Creado')))
  .catch(error => console.log(error))

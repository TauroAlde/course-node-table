const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async( base = 5, lista, hasta) => {
  try {
    
    let salida = '';
    
    for (let index = 1; index <= hasta; index++) {
      salida += `${ base } * ${ index } = ${ index * base }\n`;
    }
    
    if(lista) {
      console.log(colors.rainbow('======================'));
      console.log(colors.rainbow(`   Tabla del: ${ base}`));
      console.log(colors.rainbow('======================'));

      console.log(colors.rainbow(salida));
    }
    
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
  
    return colors.rainbow(`tabla-${base}.txt`);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  crearArchivo  // crearArchivo = crearArchivo
}
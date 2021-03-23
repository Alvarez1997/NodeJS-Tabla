const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 5) => {

    try {     
         
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++){
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
            salida += `${base} x ${i} = ${base * i}\n` //sin los colores que dañan el .txt
        }
        if (listar) {
            console.log("========================")
            console.log(colors.magenta("       Tabla del: ", base))
            console.log("========================")
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}
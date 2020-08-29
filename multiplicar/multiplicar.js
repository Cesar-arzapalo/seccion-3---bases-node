//requireds
const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

const colors = require('colors');

const multiplicarRango = (base, inf, sup = 10) => {

    let data = '';
    for (let i = inf; i <= sup; i += 1) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    return data;
};

let generarArchivo = (base, limite, data) => {

    return new Promise((resolve, reject) => {

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });

    });

};

let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`=====Tabla del ${base}===`.green);
    console.log('===================='.green);

    return multiplicarRango(base, 1, limite);
}

let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) throw new Error('El valor de la base introducido no es un numero');

    console.log('==================================='.green);
    console.log(`=====Creacion de la tabla del ${base}===`.green);
    console.log('=================================='.green);

    let data_tabla = multiplicarRango(base, 1, limite);
    console.log(limite);
    const data = new Uint8Array(Buffer.from(data_tabla));

    return await generarArchivo(base, limite, data);
};

module.exports = {
    crearArchivo,
    listarTabla
};
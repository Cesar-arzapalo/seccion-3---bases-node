const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tala de nultiplicar', opts)
    .command('crear', 'crea la tabla de nultiplicar con un limite', opts)
    .help()
    .argv;

module.exports = {
    argv
};
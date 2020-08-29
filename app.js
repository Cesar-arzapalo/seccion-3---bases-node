const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

const { argv } = require('./config/yargs');



// let recibirParametros = () => {
//     let argv2 = process.argv;
//     let parametro = argv2[2];
//     let base = Number.parseInt(parametro.split('=')[1]);
//     console.log(base);

//     return base;
// };

let ejecutar = () => {
    const comando = argv._[0];
    switch (comando) {
        case 'crear':
            {
                console.log('crear');
                construirArchivo()
                .catch(err => console.log(err));
                break;
            }
        case 'listar':
            {
                console.log('listar');
                let tabla = listarTabla(argv.base, 1, argv.limite);
                console.log(tabla);
                break;
            }
        default:
            {
                console.log('Comando no reconocido');
            }
    }
};

let construirArchivo = async() => {
    let archivo = await crearArchivo(argv.base, argv.limite);
    console.log(`Archivo creado: ${archivo.green}`);
};

let app = async() => {
    let ejec = ejecutar();
    //let archivo = await crearArchivo(base);
    // console.log(`Archivo creado: ${archivo}`);
};

app();
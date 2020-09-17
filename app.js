//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer.js');

// para verificae al principio q esta bien
//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        //console.log("Crer por hacer");
        // la descripcion la agrupa en tarea
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('""""""Por Hacer""""""""""""""'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('""""""""""""""""""""""""""""""'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log("Comando no reconocido");
        break;

}
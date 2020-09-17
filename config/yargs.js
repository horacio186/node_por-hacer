// es un paquete de node, DEMAND  que sea obligatorio los parametros de base
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola ', { descripcion })
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Crea un elemento por hacer', { descripcion, completado })
    .command('borrar', 'Borrar un elemento por hacer', { descripcion })
    .help()
    .argv;

/* no resumido el codigo
 .command('borrar', 'Borrar un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
*/

// para ocupar el argv hay que exportarlo
module.exports = {
    argv

}
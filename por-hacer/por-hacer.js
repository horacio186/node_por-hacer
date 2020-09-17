const fs = require('fs');


let listadoPorHacer = [];

// guardando los datos en data.json de la descripción para que no se pierdan
const guardarDB = () => {
    // guarda un objeto de un arreglo en un json
    let data = JSON.stringify(listadoPorHacer);
    // sobreescribimos los datos al archivo data.json
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

// leer archivo json y cargarlo a una variables
const cargarDB = () => {
    // try pq si el json esta vacio se produce un error, se deja u narreglo vacio
    try {
        listadoPorHacer = require('../db/data.json');
        //console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];

    }
}

const crear = (descripcion) => {
    // antes de agregar al arreglo la descripción, lo agrego al archivo json
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    // agregp a la tabla
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

// listar
const getListado = () => {
    // antes de agregar al arreglo la descripción, lo agrego al archivo json
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    // cargar la BD
    cargarDB();
    // buscar un elemento que coincida con la tarea descripción y actualizar  
    // me indica la posición index del elemento y si no lo encuentra es -1
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    // cargar la BD
    cargarDB();
    // filter Se excluye del listado y se obtiene un nuevo listado
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    /*  otra manera
         let index = listadoPorHacer.findIndex(tarea => {
         return tarea.descripcion.toLowerCase() === descripcion.toLowerCase();
     })*/
    // Tengo los 2 listados (nuevoListado y listadoPorHacer) y los comparo
    // por la cantidad de registros si son iguales no lo borro
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    /* otra manera
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }*/
}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar

}
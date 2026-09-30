const STORAGE_KEY= 'especialidades';

//Declaramos una funcion para obtener los datos del localStorage. Si no hay, crea un array vacio

function obtenerEspecialidades (){
    let data= localStorage.getItem(STORAGE_KEY);

    //Verificamos que no sea nulo. Si lo es, devuelve array vacio
    if (data==null){
        return []; //No hace falta parsearlo porque al no tener nada, no hay que parsear a string nada.
    }
    
    //Si no es nulo, debemos parsear los datos
    let dataParseado= JSON.parse(data);
    return dataParseado;
}

//Declaramos una funcion para guardar datos en el Local Storage

function guardarEspecialidades(arrayEspecialidades){
    //Parseamos lo que viene por parametro en la funcion
    let texto = JSON.stringify(arrayEspecialidades);
    //Aqui lo guardamos (ya parseado claramente)
    localStorage.setItem(STORAGE_KEY, texto);
}


function agregarEspecialidad(nombre, descripcion){
    //Traemos lo que ya estaba en el local Storage
    let lista=obtenerEspecialidades();
    //Creamos la nueva especialidad con los parametros que recibimos y el id con la funcion crypto
    let nuevaEspecialidad= {
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
    }
    //Agregamos al array la nueva especialidad
    lista.push(nuevaEspecialidad);
    //LLamamos a guardarEspecialidades para que se encargue de guardar y parsear el array.
    guardarEspecialidades(lista);
}

function filtrarEspecialidades(termino) {
    const especialidades = obtenerEspecialidades();

    if (!termino || termino.trim() === '') {
        return especialidades;
    }

    const filtro = termino.toLowerCase().trim();
    return especialidades.filter(esp =>
        esp.nombre.toLowerCase().includes(filtro) ||
        esp.descripcion.toLowerCase().includes(filtro) ||
        esp.id.toLowerCase().includes(filtro)
    );
}
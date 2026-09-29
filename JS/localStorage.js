const STORAGE_KEY = 'specialties';

function inicializarStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

/**
 * Obtiene el array de especialidades desde localStorage.
 * @returns {Array} Lista de especialidades
 */
function obtenerEspecialidades() {
    inicializarStorage();
    const datos = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(datos);
}

/**
 * Agrega una especialidad al array "specialties" en localStorage.
 * Genera el identificador único con crypto.randomUUID().
 * @param {Object} especialidad Datos a guardar (sin id)
 * @returns {Object} La especialidad guardada con su id
 */
function guardarEspecialidad(especialidad) {
    const especialidades = obtenerEspecialidades();
    const nueva = {
        id: crypto.randomUUID(), // Genera GUID obligatorio
        ...especialidad
    };

    especialidades.push(nueva);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(especialidades));
    return nueva;
}

/**
 * Filtra las especialidades obteniendo los datos directamente desde localStorage.
 * @param {string} termino Texto a buscar
 * @returns {Array} Lista de especialidades que coinciden
 */
function filtrarEspecialidades(termino) {
    const especialidades = obtenerEspecialidades();

    if (!termino || termino.trim() === '') {
        return especialidades;
    }

    const filtro = termino.toLowerCase().trim();
    return especialidades.filter(esp =>
        esp.name.toLowerCase().includes(filtro) ||
        esp.description.toLowerCase().includes(filtro) ||
        esp.id.toLowerCase().includes(filtro)
    );
}

inicializarStorage();
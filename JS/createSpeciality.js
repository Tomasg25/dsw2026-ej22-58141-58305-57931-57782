document.addEventListener('DOMContentLoaded', function () {

    const BtnConfirmar = document.getElementById('BtnGuardar');

    BtnConfirmar.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;

        if (nombre.length > 15 ) {
            console.log('La longitud del nombre debe ser menor a 15 caracteres');
        } if (descripcion.length > 100) {
            console.log('La longitud de la descripcion debe ser menor a 100 caracteres');
        }else if (nombre.length <= 15 && descripcion.length <= 100) {
            const nuevaEspecialidad = {
                name: nombre,
                description: descripcion,
                id: "GUID-4"
            };
            console.log('Nueva especialidad creada:', nuevaEspecialidad);
        }

    });
});
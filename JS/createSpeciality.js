document.addEventListener('DOMContentLoaded', function () {
    //Capturamos los eventos
    const BtnConfirmar = document.getElementById('BtnGuardar');
    const inputNombre = document.getElementById('nombre')
    const inputDescripcion = document.getElementById('descripcion')
    const BtnCancelar= document.getElementById('BtnCancelar');

    //Funcionalidad para el boton guardar especialidad
    BtnConfirmar.addEventListener('click', function (event) {
        event.preventDefault();

        //Obtenemos el valor y limpiamos espacios en blanco si es que hubieran (trim)
        let nombre = inputNombre.value.trim();
        let descripcion = inputDescripcion.value.trim();

        //Validamos que tenga los caracteres establecidos (menos de 15 y 100)
        if (nombre.length > 0 && nombre.length < 15 && descripcion.length < 100) {
            //Si pasa, agrega la especialidad con la funcion de localStorage
            agregarEspecialidad(nombre,descripcion);
            alert('Especialidad guardada con éxito.');
            window.location.href = "speciality.html";
        } else {
            alert('El nombre debe tener entre 1 y 14 caracteres y la descripción menos de 100 caracteres.');
        }
    });
    //Funcionalidad para que el boton cancelar lleve a speciality.html de nuevo
    BtnCancelar.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href='speciality.html';
    })
});

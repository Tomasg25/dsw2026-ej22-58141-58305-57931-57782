document.addEventListener('DOMContentLoaded', function () {
    const BtnConfirmar = document.getElementById('BtnGuardar');

    BtnConfirmar.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();

        if (nombre.length > 0 && nombre.length < 15 && descripcion.length < 100) {
            guardarEspecialidad({
                name: nombre,
                description: descripcion
            });

            alert('Especialidad guardada con éxito.');
            window.location.href = "speciality.html";
        } else {
            alert('El nombre debe tener entre 1 y 14 caracteres y la descripción menos de 100 caracteres.');
        }
    });
});
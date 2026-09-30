

//Capturamos los eventos desde el formulario

  const cuerpoTabla = document.getElementById("specialityTableBody");
  const buscador = document.getElementById("filterByName");
  const btnAñadirEspecialidad= document.getElementById("addBtn");

 // Función para pintar la tabla
function mostrarTabla(lista) {
    cuerpoTabla.innerHTML = "";

    if (lista.length === 0) {
        cuerpoTabla.innerHTML = `<tr><td colspan="3">No hay especialidades registradas.</td></tr>`;
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        cuerpoTabla.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.descripcion}</td>
                <td><code>${item.id}</code></td>
            </tr>
        `;
    }
} 
// Carga datos al abrir la página principal
document.addEventListener("DOMContentLoaded",() => {
  let datos = obtenerEspecialidades();
  mostrarTabla(datos);
});

//Redirigir a la pantalla de alta al hacer clic en el botón
btnAñadirEspecialidad.addEventListener("click", () => {
  window.location.href='createSpeciality.html';
});


buscador.addEventListener("input", function(evento) {
    //Traemos el valor de lo que el usuario escribio en el input para poder buscar coincidencia
    let textoBusqueda = evento.target.value;
    //Guardamos en una variable lo que nos devuelve la funcion filtrar de LocalStorage
    let especialidadesFiltradas = filtrarEspecialidades(textoBusqueda);
    mostrarTabla(especialidadesFiltradas);
});

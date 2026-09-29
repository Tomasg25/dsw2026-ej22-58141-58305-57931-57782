document.addEventListener("DOMContentLoaded", () => {
  const addSpeciality = document.getElementById("addBtn");
  const tablaBody = document.getElementById("specialityTableBody");
  const inputBusqueda = document.querySelector("#busqueda input[type='search']");
 
  if (addSpeciality) {
    addSpeciality.addEventListener("click", () => {
      window.location.href = "createSpeciality.html";
    });
  }
 
 
  function cargarTabla(lista) {
    tablaBody.innerHTML = "";
 
    if (lista.length === 0) {
      let fila = document.createElement("tr");
      fila.innerHTML = `<td colspan="3" style="text-align: center;">No se encontraron especialidades</td>`;
      tablaBody.appendChild(fila);
      return;
    }
 
    lista.forEach((speciality) => {
      let fila = document.createElement("tr");
 
      let nombre = document.createElement("td");
      let descripcion = document.createElement("td");
      let id = document.createElement("td");
 
      nombre.textContent = speciality.name;
      descripcion.textContent = speciality.description;
      id.textContent = speciality.id;
 
      fila.appendChild(nombre);
      fila.appendChild(descripcion);
      fila.appendChild(id);
 
      tablaBody.appendChild(fila);
    });
  }
 
  cargarTabla(obtenerEspecialidades());
 
  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", (e) => {
      const resultados = filtrarEspecialidades(e.target.value);
      cargarTabla(resultados);
    });
  }
});

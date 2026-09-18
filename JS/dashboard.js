document.addEventListener('DOMContentLoaded', () => {
 /* const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  const menuButton = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });*/

  const addSpecialityButton = document.getElementById('addSpecialidadBtn');
  addSpecialityButton.addEventListener('click', () => {
    window.location.href = 'createSpeciality.html';
  });
});


const doctores = [
  { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología" , estado: "Disponible" },
  { id: 2, nombre: "Dra. María García", especialidad: "Neurología" , estado: "Disponible" },
  { id: 3, nombre: "Dr. Carlos López", especialidad: "Pediatría" , estado: "No Disponible" }
];

const tabla = document.getElementById('product-table-body');

doctores.forEach(doctor => {

  let fila = document.createElement('tr');

  let nombre = document.createElement('td');
  let especialidad = document.createElement('td');
  let estado = document.createElement('td');

  nombre.textContent = doctor.nombre;
  especialidad.textContent = doctor.especialidad;
  estado.textContent = doctor.estado;

  fila.appendChild(nombre);
  fila.appendChild(especialidad);
  fila.appendChild(estado);

  if(tabla){
    tabla.appendChild(fila);
  }
  else{
    console.error("No se encontró el elemento con id 'product-table-body'");
  }
});
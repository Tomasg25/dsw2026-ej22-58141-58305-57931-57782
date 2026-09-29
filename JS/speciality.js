document.addEventListener("DOMContentLoaded", () => {
    const addSpeciality=document.getElementById("addBtn");
    addSpeciality.addEventListener("click",()=>{
        window.location.href="createSpeciality.html";})
})
const tabla=document.getElementById("tabla");

var specialities = [];
 
fetch('../specialities.json')
    .then(response => response.json())
    .then(data => {
        specialities = data;
        cargarTabla();
    })
    .catch(error => console.error('Error fetching specialities:', error));
 
function cargarTabla() {specialities.forEach((speciality)=>{
 
    let fila=document.createElement("tr");
 
    let nombre=document.createElement("td");
 
    let descripcion=document.createElement("td");
 
    let id=document.createElement("td");
 
    nombre.textContent=speciality.name;
 
    descripcion.textContent=speciality.description;
 
    id.textContent=speciality.id;
   
    fila.appendChild(nombre);
   
    fila.appendChild(descripcion);
   
    fila.appendChild(id);
   
    tabla.appendChild(fila);
});}
 
 
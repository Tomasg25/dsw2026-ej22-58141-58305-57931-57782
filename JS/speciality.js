document.addEventListener("DOMContentLoaded", () => {
    const addSpeciality=document.getElementById("addBtn");
    addSpeciality.addEventListener("click",()=>{
        window.location.href="createSpeciality.html";})
})
const tabla=document.getElementById("tabla");
const specialitiess=[{
  "estado": "ACTIVO",
  "name": "Traumatología",
  "description": "Área médica dedicada al diagnóstico y tratamiento de lesiones y enfermedades del sistema musculoesquelético."},
{
  "estado": "INACTIVO",
  "name": "Ginecología",
  "description": "Especialidad orientada a la salud del aparato reproductor femenino y la prevención de enfermedades asociadas."},
{
  "estado": "ACTIVO",
  "name": "Otorrinolaringología",
  "description": "Especialidad que aborda las enfermedades del oído, nariz, garganta y estructuras relacionadas."}
];
 
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

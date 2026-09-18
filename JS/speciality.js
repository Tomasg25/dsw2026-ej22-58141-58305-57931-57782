document.addEventListener("DOMContentLoaded", () => {
    const addSpeciality=document.getElementById("addBtn");
    addSpeciality.addEventListener("click",()=>{
        window.location.href="createSpeciality.html";})
})
const tabla=document.getElementById("tabla");
const specialities=[{
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

specialities.forEach((speciality)=>{

    let fila=document.createElement("tr");

    let nombre=document.createElement("td");

    let descripcion=document.createElement("td");

    let estado=document.createElement("td");

    nombre.textContent=speciality.name;

    descripcion.textContent=speciality.description;

    estado.textContent=speciality.estado;
    
    fila.appendChild(nombre);
    
    fila.appendChild(descripcion);
    
    fila.appendChild(estado);
    
    tabla.appendChild(fila);
});


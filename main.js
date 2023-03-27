const ContainerTodo = document.querySelector("#contenedorTodito"); //Traemos nuestro contenedor principal de HTML (Luego lo utilizaremos)
// const otro=document.querySelectorAll  //Crea un HTML collection, donde

// Estableciendo el HTML
const headerContenedor = document.createElement("div"); //Creamos el contenedor del header o titulo en este caso un DIV

const header = document.createElement("header"); //Creamos un elemento header, donde tendrémos nuestro título

header.setAttribute("class", "title"); //Al header le agregamos el atributo, donde separamos por coma el identificador con el nombre = ('class', 'nombre')

header.textContent = "To do List"; //Agregamos texto al header que creamos anteriormente

headerContenedor.append(header); //Y agregamos el header al contenedor del Header

const inputs = document.createElement("div"); //Ahora creamos un div, el cual contendrá el input y el botón de agregar
inputs.className = "inputs"; //Le asignamos el nombre a la clase, una forma distinta al 'setAttribute'

const entrada = document.createElement("input");
entrada.setAttribute("class", "entrada");
entrada.placeholder = "Escriba su por hacer aquí";

const agregar = document.createElement("button");
agregar.setAttribute("class", "agregar");
agregar.textContent = "+";

inputs.append(entrada, agregar);
const elementos = document.createElement("div");
elementos.setAttribute("class", "lista");

// Agregando todo al HTML
ContainerTodo.append(headerContenedor);
ContainerTodo.append(inputs);
ContainerTodo.append(elementos);

let confirmar = document.createElement("div");
let tarea = document.createElement("div");
let borrarTarea = document.createElement("div");
let opciones = document.createElement("div");

// Botón Agregar
agregar.addEventListener("click", () => {
  confirmar = document.createElement("div");
  tarea = document.createElement("div");
  borrarTarea = document.createElement("div");
  opciones = document.createElement("div");

  if (entrada.value == "") {
    alert("Debe ingresar contenido en su tarea");
  } else {
    tarea.className = "tarea";
    tarea.textContent = `${entrada.value}`;
    entrada.value = "";

    confirmar.className = "bi bi-check";
    confirmar.onmouseenter = function (e) {
      e.target.style.color = "green";
    };
    confirmar.onmouseout = function (e) {
      e.target.style.color = "white";
    };

    borrarTarea.className = "bi bi-trash3";

    opciones.append(confirmar, borrarTarea);
    opciones.style.display = "flex";
    opciones.style.gap = "15px";

    tarea.append(opciones);
    elementos.appendChild(tarea);
    console.log(entrada.value);
  }
});

// Botón Borrar
elementos.addEventListener("click", (e) => {
  if (e.target.className == "bi bi-trash3") {
    elementos.removeChild(e.target.parentElement.parentElement);
  }
});

//Botón Check

elementos.addEventListener("click", (e) => {
  if (e.target.className == "bi bi-check") {
  tarea.style.backgroundColor = 'green'
  console.log(e.target);
  }
});

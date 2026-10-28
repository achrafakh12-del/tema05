/*
  Tarea 5 · DWEC · Achraf Akhmoul
  Manipular el DOM.
*/

console.log("app.js cargado");

// Ejercicio 1 · Selectores y modificación


function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const parrafos = document.querySelectorAll("#contenido p");
  if (parrafos.length >= 3) {
    parrafos[2].classList.add("text-danger");
  }

  console.log("Ejercicio 1: Cambios aplicados correctamente a los tres párrafos.");
}


// Ejercicio 2 · Crear y eliminar nodos


function anadirParrafo() {
  const contenedor = document.querySelector("#contenido");
  const numP = contenedor.children.length + 1;

  const nuevoP = document.createElement("p");
  nuevoP.textContent = `Párrafo nuevo ${numP}`;

  contenedor.append(nuevoP);

  const aviso2 = document.querySelector("#aviso2");
  aviso2.classList.add("d-none");

  console.log(`Ejercicio 2: Añadido párrafo número ${numP}.`);
}

function eliminarUltimo() {
  const contenedor = document.querySelector("#contenido");
  const ultimoP = contenedor.lastElementChild;

  if (ultimoP === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
    console.log("Ejercicio 2: No hay más párrafos para eliminar.");
  } else {
    ultimoP.remove();
    console.log("Ejercicio 2: Último párrafo eliminado.");
  }
}


// Ejercicio 3 · Resaltar al pasar el ratón

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log(`Ejercicio 3: Eventos activados en ${parrafos.length} párrafos.`);
}


// Ejercicio 4 · Cambiar el primer párrafo

function cambiarTexto() {
  const inputTexto = document.querySelector("#nuevoTexto");
  const texto = inputTexto.value.trim();
  const error4 = document.querySelector("#error4");

  if (texto === "") {
    error4.classList.remove("d-none");
    console.log("Ejercicio 4 (textContent): Intento fallido, campo vacío.");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#primero").textContent = texto;
    console.log("Ejercicio 4 (textContent): Texto actualizado correctamente.");
  }
}

function cambiarConHtml() {
  const inputTexto = document.querySelector("#nuevoTexto");
  const texto = inputTexto.value.trim();
  const error4 = document.querySelector("#error4");

  if (texto === "") {
    error4.classList.remove("d-none");
    console.log("Ejercicio 4 (innerHTML): Intento fallido, campo vacío.");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#primero").innerHTML = texto;
    console.log("Ejercicio 4 (innerHTML): Texto con HTML actualizado correctamente.");
  }
}

// Ejercicio 5 · Lista de tareas

function anadirTarea() {
  const inputTarea = document.querySelector("#tareaInput");
  const texto = inputTarea.value.trim();
  const error5 = document.querySelector("#error5");

  if (texto === "") {
    error5.textContent = "Debes escribir el texto de la tarea.";
    error5.classList.remove("d-none");
    console.log("Ejercicio 5: No se puede añadir una tarea vacía.");
    return;
  }

  error5.classList.add("d-none");

  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center gap-2";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";

  const span = document.createElement("span");
  span.textContent = texto;

  li.append(checkbox);
  li.append(span);

  document.querySelector("#listaTareas").append(li);
  inputTarea.value = "";

  actualizarContadorTareas();
  console.log(`Ejercicio 5: Tarea "${texto}" añadida.`);
}

function borrarCompletadas() {
  const completadas = document.querySelectorAll("#listaTareas input:checked");
  const error5 = document.querySelector("#error5");

  if (completadas.length === 0) {
    error5.textContent = "No hay ninguna tarea marcada para borrar.";
    error5.classList.remove("d-none");
    console.log("Ejercicio 5: No hay tareas seleccionadas para eliminar.");
    return;
  }

  error5.classList.add("d-none");

  for (const checkbox of completadas) {
    checkbox.parentElement.remove();
  }

  actualizarContadorTareas();
  console.log(`Ejercicio 5: Se eliminaron ${completadas.length} tareas completadas.`);
}

function actualizarContadorTareas() {
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}


// Ejercicio 6 · Datos de la ventana (BOM)

function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let puntoCorte = "";
  if (ancho < 576) {
    puntoCorte = "xs (menos de 576 px)";
  } else if (ancho < 768) {
    puntoCorte = "sm (desde 576 px)";
  } else if (ancho < 992) {
    puntoCorte = "md (desde 768 px)";
  } else if (ancho < 1200) {
    puntoCorte = "lg (desde 992 px)";
  } else if (ancho < 1400) {
    puntoCorte = "xl (desde 1200 px)";
  } else {
    puntoCorte = "xxl (desde 1400 px)";
  }
  document.querySelector("#datoPunto").textContent = puntoCorte;

  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log("Ejercicio 6: Datos de la ventana mostrados en la tabla.");
}
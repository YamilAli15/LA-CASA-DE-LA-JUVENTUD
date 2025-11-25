import Carrousel from './carrusel.js';
"use strict";

let carrusel;

// ===============================
// MARCAR BOTÓN ACTIVO (SUBRAYADO)
// ===============================
function activarBoton(id) {
    // Quita la clase activa de todos
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("activo");
    });

    // Activa el que corresponde
    const boton = document.getElementById(id);
    if (boton) boton.classList.add("activo");
}

// ===============================
// CARGA DINÁMICA DE PÁGINAS
// ===============================

document.addEventListener('DOMContentLoaded', () => {

    cargarPaginaInicio();
    activarBoton("btn-inicio");

    document.getElementById("btn-talleres").addEventListener('click', () => {
        cargarPaginaTalleres();
        activarBoton("btn-talleres");
    });

 function cargarLogin() {
    fetch('./paginas/login.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;

            // 🔥 RE-ASIGNAR EVENTO DEL BOTÓN AQUÍ
            const btnAdmin = document.getElementById("btn-admin");
            if (btnAdmin) {
                btnAdmin.addEventListener('click', (e) => {
                    e.preventDefault();
                    cargarPaginaAdmin();
                });
            }
        });
}
    document.getElementById("btn-inicio").addEventListener('click', () => {
        cargarPaginaInicio();
        activarBoton("btn-inicio");
    });

    document.getElementById("btn-login").addEventListener('click', () => {
        cargarLogin();
        activarBoton("btn-login");
    });

    document.getElementById("logo").addEventListener('click', () => {
        cargarPaginaInicio();
        activarBoton("btn-inicio");
    });

    document.getElementById("btn-consultas").addEventListener('click', () => {
        cargarPaginaConsultas();
        activarBoton("btn-consultas");
    });

});


function cargarPaginaConsultas() {
    fetch('./paginas/consultas.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;
        });
}
function cargarPaginaAdmin() {
    fetch('./paginas/deportesadmin.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;
        });
}

function cargarPaginaTalleres() {
    fetch('./paginas/talleres.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;
        });
}

function cargarPaginaInicio() {
    fetch('./paginas/inicio.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;
            carrusel = new Carrousel(); // Iniciar tu carrusel
        });
}

function cargarLogin() {
    fetch('./paginas/login.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.contenedor').innerHTML = data;
        });
}

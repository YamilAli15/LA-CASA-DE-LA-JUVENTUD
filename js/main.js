import Carrousel from './carrusel.js';
"use strict";
let carrusel;

document.addEventListener('DOMContentLoaded', () => {

    cargarPaginaInicio();

    document.getElementById("btn-talleres").addEventListener('click', () => {
        cargarPaginaTalleres();
    });

    document.getElementById("btn-inicio").addEventListener('click', () => {
        cargarPaginaInicio();
    });

    document.getElementById("logo").addEventListener('click', () => {
        cargarPaginaInicio();
    });

    document.getElementById("btn-consultas").addEventListener('click', () => {
        cargarPaginaConsultas();
    })
})

function cargarPaginaConsultas() {
    fetch('./paginas/consultas.html')
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
            carrusel = new Carrousel();
        });
}

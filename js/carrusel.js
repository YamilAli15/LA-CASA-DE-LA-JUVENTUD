

class Carrousel {

    constructor() {

        /* ==========================================
            CARRUSEL DE LA SECCIÓN TALLER CON INFO
        ========================================== */
        this.carruselImg = document.getElementById("carrusel-img");
        this.btnIzq = document.getElementById("flecha-izq");
        this.btnDer = document.getElementById("flecha-der");
        this.tituloTaller = document.getElementById("taller-titulo");
        this.descTaller = document.getElementById("taller-descripcion");
        this.btnVerTaller = document.getElementById("btn-ver-taller");

        /* Datos de los talleres */
        this.talleres = [
            { nombre: "Deporte", descripcion: "Participá de actividades físicas y deportes recreativos para todas las edades. Mejorá tu coordinación, trabajo en equipo y hábitos saludables mientras te divertís.", url: "this.talleres/deporte.html", imagen: "imagenes/iconos/deporte-01.png" },
            { nombre: "Ajedrez", descripcion: "Aprendé estrategias y técnicas para mejorar tu juego de ajedrez y participar en torneos locales. Ideal para todas las edades y niveles, fomentando concentración, pensamiento crítico y diversión.", url: "this.talleres/ajedrez.html", imagen: "imagenes/iconos/ajedrez-01.png" },
            { nombre: "Arte", descripcion: "Explorá tu creatividad con pintura, dibujo y técnicas mixtas. Compartí tus obras y aprendé de otros participantes en un ambiente artístico y motivador.", url: "this.talleres/arte.html", imagen: "imagenes/iconos/arte-01.png" },
            { nombre: "Carpintería", descripcion: "Aprendé a construir muebles y objetos de madera con herramientas básicas. Fomentamos la creatividad y la seguridad en el manejo de herramientas.", url: "this.talleres/carpinteria.html", imagen: "imagenes/iconos/carpinteria-01.png" },
            { nombre: "Cerámica", descripcion: "Descubrí técnicas de modelado, esmaltado y decoración. Ideal para quienes quieren expresarse con sus manos y crear piezas únicas.", url: "this.talleres/ceramica.html", imagen: "imagenes/iconos/ceramica-01.png" },
            { nombre: "Herrería", descripcion: "Aprendé a trabajar el hierro creando herramientas y piezas decorativas. Fomentamos la creatividad y el respeto por la seguridad en el taller.", url: "this.talleres/herreria.html", imagen: "imagenes/iconos/herreria-01.png" },
            { nombre: "Hilorama", descripcion: "Desarrollá destreza manual y creatividad con hilorama y tejidos. Aprendé técnicas paso a paso para crear obras únicas.", url: "this.talleres/hilorama.html", imagen: "imagenes/iconos/hilorama-01.png" },
            { nombre: "Huerta", descripcion: "Aprendé a cultivar y mantener un huerto urbano de forma sostenible. Ideal para quienes quieren conectarse con la naturaleza y la alimentación saludable.", url: "this.talleres/huerta.html", imagen: "imagenes/iconos/huerta-01.png" },
            { nombre: "Informática", descripcion: "Introducción a computación, software y programación básica. Desarrollá habilidades digitales y aprendé a crear tus propios proyectos.", url: "this.talleres/informatica.html", imagen: "imagenes/iconos/informatica-01.png" },
            { nombre: "Manualidades", descripcion: "Proyectos de manualidades con distintos materiales y técnicas. Ideal para desarrollar creatividad, paciencia y atención al detalle.", url: "this.talleres/manualidades.html", imagen: "imagenes/iconos/manualidades-01.png" },
            { nombre: "Música", descripcion: "Iniciate en la práctica de instrumentos musicales y teoría básica. Desarrollá oído musical, ritmo y expresión artística.", url: "this.talleres/musica.html", imagen: "imagenes/iconos/musica-01.png" },
            { nombre: "Panadería", descripcion: "Aprendé técnicas de panadería y repostería casera. Desde pan simple hasta recetas creativas y dulces, fomentando la pasión por la cocina.", url: "this.talleres/panaderia.html", imagen: "imagenes/iconos/panaderia-01.png" },
            { nombre: "Ping Pong", descripcion: "Torneos y técnicas para mejorar tu juego de ping pong. Ideal para todas las edades, promoviendo concentración, reflejos y diversión.", url: "this.talleres/pingpong.html", imagen: "imagenes/iconos/ping_pong-01.png" }
        ];

        /* Estado actual del carrusel */
        this.indiceActual = 0;

        this.mostrarCarrusel();
        this.cargarListeners();
    }


    /* Función para actualizar carrusel e info */
    mostrarCarrusel() {
        const taller = this.talleres[this.indiceActual];
        this.carruselImg.style.backgroundImage = `url('${taller.imagen}')`;
        this.tituloTaller.textContent = taller.nombre;
        this.descTaller.textContent = taller.descripcion;
        this.btnVerTaller.onclick = () => {
             fetch('./paginas/deporte.html')
                    .then(response => response.text())
                    .then(data => {
                        document.querySelector('.contenedor').innerHTML = data;
                       
                    });
        };
    }

    /* Navegación */
    cargarListeners() {
        this.btnIzq.addEventListener("click", () => {
            this.indiceActual = (this.indiceActual - 1 + this.talleres.length) % this.talleres.length;
            this.mostrarCarrusel();
        });

        this.btnDer.addEventListener("click", () => {
            this.indiceActual = (this.indiceActual + 1) % this.talleres.length;
            this.mostrarCarrusel();
        });
    }

}


export default Carrousel;
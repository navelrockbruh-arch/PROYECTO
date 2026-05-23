// script.js

const explorarBtn = document.getElementById("explorarBtn");

explorarBtn.addEventListener("click", () => {

    document.getElementById("lecciones")
    .scrollIntoView({
        behavior:"smooth"
    });

});


// CONTENIDO DE LECCIONES

function abrirLeccion(tipo){

    const contenedor = document.getElementById("contenido-leccion");

    if(tipo === "web"){

        contenedor.innerHTML = `

        <div class="lesson-box">

            <h3>Desarrollo Web</h3>

            <p>
                HTML crea la estructura de una página.
                CSS agrega estilos y JavaScript añade interactividad.
            </p>

<code>
&lt;h1&gt;Hola Mundo&lt;/h1&gt;
</code>

            <p>
                Este ejemplo crea un título básico usando HTML.
            </p>

        </div>

        `;

    }

    else if(tipo === "juegos"){

        contenedor.innerHTML = `

        <div class="lesson-box">

            <h3>Creación de Juegos</h3>

            <p>
                Los juegos web usan JavaScript para mover objetos,
                detectar colisiones y crear animaciones.
            </p>

<code>
let jugador = {
    x: 100,
    y: 200
};
</code>

            <p>
                Este código crea un objeto jugador.
            </p>

        </div>

        `;

    }

    else if(tipo === "apps"){

        contenedor.innerHTML = `

        <div class="lesson-box">

            <h3>Aplicaciones Modernas</h3>

            <p>
                Las aplicaciones modernas utilizan componentes,
                interfaces limpias y animaciones suaves.
            </p>

<code>
button{
    background:black;
    color:white;
}
</code>

            <p>
                Este CSS crea un botón minimalista.
            </p>

        </div>

        `;

    }

}


// FORMULARIO

const form = document.querySelector(".review-form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Gracias por enviar tu propuesta o reseña.");

    form.reset();
    
   
});

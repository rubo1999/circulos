const circulos = document.querySelectorAll(".circulo");
const contenedorTimer = document.querySelector(".timer");
const modal = document.querySelector(".modal");
var texto = document.querySelector(".modal button");

let puntuacion = 0;
let timer = null;


texto.addEventListener("click", () =>{
    modal.classList.add("desaparecer");
    timer=null;
});

function juego(tiempo){
    //reiniciar el juego
    puntuacion = 0;
    circulos.forEach(circulo => circulo.className = "circulo");
    //crear el timer
    for(let i = 0; i < tiempo; i++){
        let cuadro = document.createElement("div");
        cuadro.style.width = `calc(${100/tiempo}% - 10px)`;
        contenedorTimer.appendChild(cuadro);
    }
    timer = setInterval(() => {
        contenedorTimer.children[0].remove();
        if(contenedorTimer.children.length == 0){
            clearInterval(timer);
            console.log("Perdiste")
        }
    }, 1000);
}



circulos.forEach(circulo => {
    circulo.addEventListener("click", () => {
        circulo.classList.add("invisible");
        puntuacion++;
        if(puntuacion == 12){
            clearInterval(timer);
            console.log("hemos ganado")
        }
    });
});
juego(10);
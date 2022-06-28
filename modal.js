articulosCarrito = [];

const body = document.body;
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');

let resultado = document.getElementById('resultado');

let titulo = document.createElement('h1');
titulo.setAttribute('class', 'text-center mt-5');
body.prepend(titulo);


let input = document.getElementById('input');
let boton = document.querySelector('#btn');
const carritoWrapper = document.getElementById("carrito-wrapper");
const carritoContainer = document.getElementById("carrito-container");


carritoWrapper.addEventListener("mouseover",() =>{
    carritoContainer.style.display = "block";
});

carritoWrapper.addEventListener("mouseleave",() =>{
    carritoContainer.style.display = "none";
});

boton.addEventListener('click', mostrar)

document.addEventListener("DOMContentLoaded",() => {
    crearTarjetasHTML(productos)
    articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []
    carritoHTML()
});

vaciarCarrito.addEventListener('click', () => {
    articulosCarrito = []; 
    carritoHTML(); 
})


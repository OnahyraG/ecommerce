const BBDD = [
    {
        "id": 1,
        "nombre": "belleza de manos",
        "img": "imagenes/spa/belleza de manos.png",
        "precio": 600,
        "cantidad":1,
        "descripcion": " Limpieza de uña( esmalte, cuticula ). Exfoliacion para retirar celulas muertas y mascara de fango para aclarar la piel y generar celulas madres",
    },
    {
        "id": 2,
        "nombre": "esmaltado tradicional",
        "img": "imagenes/spa/esmaltado tradicional.jpg",
        "precio": 500,
        "cantidad":1,
        "descripcion": "Nunca pasara de moda. Secado al aire, facil desmaquillado",
    },
    {
        "id": 3,
        "nombre": "esmaltado semipermanente",
        "img": "imagenes/spa/esmaltado semi.webp",
        "precio": 800,
        "cantidad":1,
        "descripcion": " El servis tiene una duracion de 2 a 3 semanas aproximadamente, la capa es un poco mas gruesa que la tradicional proporcionando mas cobertura de la uña",

    },
    {
        "id": 4,
        "nombre": "esmaltado semi + baño en acrilico",
        "img": "imagenes/spa/baño en acrilico.png",
        "precio": 1000,
        "cantidad": 1,
        "descripcion":" El baño en acrilico consiste en aplicar el polvo altes del esmaltado, creando una capa un poco mas dura para proteccion de la uña",

    },
    {
        "id": 5,
        "nombre": " kappig de uñas",
        "img": "imagenes/spa/kapping.jpg",
        "precio": 1300,
        "cantidad": 1,
        "descripcion":" Antes del esmaltado semi se prepara la uña con 2 capaz finas de gel para crear una coraza del tamaño de tu uña, este servis requiere de cuidado continuo",

    },
    {
        "id": 6,
        "nombre": "uña esculpida en gel",
        "img": "imagenes/spa/esculpida.jpg",
        "precio": 1600,
        "cantidad": 1,
        "descripcion":"Las uñas de tu sueño, desde estilo ROSALIA hasta estilo oficina, con este metodo podemos alargar y darle forma a la uña a gusto",

    }
]

const carrito = [];

let total = 0;

let usuario = prompt("BIENVENIDO. ingresa tu nombre");



function renderizarProductos(){

    let tienda = document.getElementById('tienda');

    let filtro = document.getElementById('opc_manos');
   
  
       BBDD.forEach((servis)=>{
        
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${servis.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${servis.nombre}</h5>
                <p class="card-text">${servis.descripcion}</p>
                <p>${servis.precio}.Pesos</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${servis.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });

}
renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;
       

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);
    

    }
    
    renderizarCarrito();
}

function renderizarCarrito(){

    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{
        
        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>${producto.precio}.Pesos</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${id})">Eliminar</button>
                </div>
            </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;

    calcularTotal();
}

function calcularTotal(){

    carrito.forEach((producto) => {
        
        total += producto.precio * producto.cantidad;
    });
    
    console.log(total);

}


const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad);
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    renderizarCarrito();
}


function filtroPrecio(){

    let bd = BBDD.filter(producto => producto.precio);
    console.log(bd);

}


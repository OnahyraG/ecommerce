
const carrito = [];

let total = 0;




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


/// Confirmacion

const inputNombre = document.querySelector('#input-nombre')
const inputTelefono = document.querySelector('#input-telefono')
const btnEnviar = document.querySelector('#btn-enviar')

btnEnviar.addEventListener('click', () => {
    console.log(inputNombre.value)
    console.log(inputTelefono.value)
})


const carrito = JSON.parse(localStorage.getItem('carrito')) || []
;

const BBDDJSON = JSON.stringify(BBDD)


// producto en html

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
                <button id="agregar" class="btn btn-primary"  onClick="agregarProductoAlCarrito(${servis.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        
        `
        tienda.innerHTML += productoHTML
    });

}

        

renderizarProductos();

//agregar al carrito

function agregarProductoAlCarrito(id){

    const btnToast = document.querySelector('#agregar');

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;
       

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);
        console.log(carrito);
    

    }
            
    

    btnToast.addEventListener('click', () => {
   
        Toastify({
            text: "servis en carrito",
            duration: 3000,
            position: 'right'
        }).showToast();
    })
    

    renderizarCarrito();
    calcularTotal();
}

//carrito de compras  

function renderizarCarrito(){

    let carritoHTML = document.getElementById('carrito');

    let html = '';


    carrito.forEach((producto, id)=>{
        
        html += `
        <tr>
            
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <button class="btn btn-primary" onClick="eliminarProductoDelCarrito(${id})">X</button>
        </tr>
        `
    })

    carritoHTML.innerHTML = html;

}

function calcularTotal(){

    let total = 0;

    let totalFinal = document.getElementById('total');

    carrito.forEach((producto) => {
        

        total += producto.precio * producto.cantidad;
    });

    totalFinal.innerHTML = `<h3>Total: ${total}Pesos</h3>`;
    
}


const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad);
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }

    renderizarCarrito();
    calcularTotal();

}


function filtroPrecio(){

    let bd = BBDD.filter(producto => producto.precio);
    console.log(bd);

}


/// formulario

const inputNombre = document.querySelector('#input-nombre')
const inputTelefono = document.querySelector('#input-telefono')
const btnEnviar = document.querySelector('#btn-enviar')

btnEnviar.addEventListener('click', () => {
   
    localStorage.setItem('nombre', inputNombre.value)
    localStorage.setItem('telefono', inputTelefono.value)

    Swal.fire({
        title: 'Perfecto',
        text: 'Se envio la confirmacion !',
        icon: 'success',
        confirmButtonText: 'ok'

    })
    
})



localStorage.setItem('servicio', BBDDJSON)

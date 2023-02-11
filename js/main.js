////////////////////
//  CAPTURAS DEL DOM
///////////////////
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let verProductos = document.getElementById("verProductos")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
let ocultarProductos = document.getElementById("ocultarProductos")
let selectOrden = document.getElementById("selectOrden")
let shop = document.getElementById("shop")
let miFormulario = document.getElementById("formulario");
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")


///////////////
// FUNCIONES
//////////////

// ver catalogo - shop - plantillas para las tablas
function catalogo(array){
    shop.innerHTML = "" 
    for(let tablis of array){
        let nuevaTabla = document.createElement("div")
        nuevaTabla.innerHTML = `
        <div class="card border border-secondary rounded">
            <img class="card-img-top img-producto" src="assets/${tablis.imagen}" alt="Card image cap">
            <div class="card-body bg-secondary">
                <h5 class="card-title">${tablis.nombre}</h5>
                <p class="card-text">$ ${tablis.precio}</p>
                <p class="card-text"><small class="text-muted">Producto original de SURF CLUB</small></p>
                <button id="buttonSumar${tablis.id}" class="btn btn-outline-warning">Sumar al carrito</button>
            </div>
        </div>
        `
        shop.appendChild(nuevaTabla)

        let buttonSumar = document.getElementById(`buttonSumar${tablis.id}`)
        buttonSumar.addEventListener("click", ()=>{
            agregarAlCarrito(tablis)
        })

    }
}

//carrito localStorage
let productosEnCarrito = []
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
}

// personalizar tabla 
function agregarTabla(array){
    let inputModelo = document.getElementById("inputModelo")
    let inputPrecio = document.getElementById("inputPrecio")
    const tablaNueva = new tabla(inputModelo.value, inputPrecio.value, tablas.length+1, "tablaPersonalizada.jpg" )
    tablas.push(tablaNueva) 
    localStorage.setItem("tablas", JSON.stringify(array))
    catalogo(array)
    inputModelo.value = ""
    inputPrecio.value = ""
}

// buscador
function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        //especifico
        // (tablis) => tablis.nombre.toLowerCase() == buscado.toLowerCase() || tablis.precio == buscado
        // (tablis) => tablis.nombre.toLowerCase().includes(buscado.toLowerCase) == buscado.toLowerCase() || tablis.precio == buscado
        (tablis) => tablis.nombre.toLowerCase().includes(buscado.toLowerCase())
    )
    
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = ` <h3 class=" coincidenciaNO"> - No hay coinidencias con su busqueda - </h3> `
        catalogo(busquedaArray)
    }else{
        catalogo(busquedaArray)
    }
}

//ORDENAR POR
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    catalogo(menorMayor)
}
function ordenarMayorMenor(arr){
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    catalogo(mayorMenor)
}
function ordenarAlfabeticamenteTitulo(array){
    const ordenadoAlfabeticamente = [].concat(array)
    ordenadoAlfabeticamente.sort((a,b) => {
        if(a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0;
    })
    catalogo(ordenadoAlfabeticamente)
}

// agregar al carrito productos y al localStorage
function agregarAlCarrito(tablis){
    alert(`El producto ${tablis.nombre} con un costo de ${tablis.precio} fue agregado al carrito con exito.`)
    productosEnCarrito.push(tablis)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    verCarritoEstandar(productosEnCarrito)
}

// Ver carrito estandar
function verCarritoEstandar(productosEnCarrito){
    productosEnCarrito.forEach((tablis)=>{
        alert(`Tienes ${productosEnCarrito.length} tablas estandar en tu carrito:
        Modelo: ${tablis.nombre}
        Precio: $${tablis.precio} `)
    })
}

// modal modificacion cargar carrito
function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito) => {

        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" height="300px" src="assets/${productoEnCarrito.imagen}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${productoEnCarrito.nombre}</h4>
                
                        <p class="card-text">$${productoEnCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
        `
    })
}

// borra ultimo producto creado del array y del storage 
// FALTA AGREGAR BOTON EN HTML
function borrarUltimoProducto (){
    tablas.pop()
    localStorage.setItem("tablas", JSON.stringify(tablas))
}


/////
//formulario
//enviar formulario o consulta


////////////////////
// EVENTOS
//////////////////
verProductos.onclick = () => {
    catalogo(tablas)
}

guardarLibroBtn.addEventListener("click", ()=>{
    agregarTabla(tablas)
})

ocultarProductos.addEventListener("click", ()=>{
    shop.innerHTML = ""})

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})

buscador.addEventListener("input", ()=>{
    buscarInfo(buscador.value, tablas)
})

miFormulario.addEventListener("submit", validarFormulario);
    function validarFormulario(e){
        e.preventDefault();
        alert("Formulario Enviado");
}

selectOrden.addEventListener("change",()=>{
    console.log(selectOrden.value)
    if(selectOrden.value == 1){
        ordenarMayorMenor(tablas)
    }else if(selectOrden.value == 2){
        ordenarMenorMayor(tablas)
    }else if(selectOrden.value == 3){
    ordenarAlfabeticamenteTitulo(tablas)
    }else{mostrarCatalogo(tablas)
    }
})









////////////////
// MENU MAIN  //
///////////////
function MENU(){
    let exitMenu = false
    do{
        let selector = parseInt(prompt(`
        Bienvenido a la APP de SURF CLUB  ${nombre}!
        
        Seleccione una accion:
        1 - Medidor de vela para kitesurf
        2 - Ver nuestros modelos de Balance Board
        3 - Personalizar tu Balance Board
        4 - Administrar tu carrito
        0 - Exit`))
        
        switch(selector){
            case 1:
                iniciarMedidor()
            break
            case 2:
                verTodas()
            break
            case 3:
                personalizarTabla()
            break
            case 4:
                administrarCarrito()
            break
            case 0:
                alert('Un gusto tenerte en nuestra web!!')
                exitMenu = true
            break
            default:
                alert('Error, ingresa del 1 al 4 para elegir una funcion. Si queres salir ingresa 0')
            break
        }
    }while(!exitMenu)
}

////////////////////////
//CASE 1 - MENU MAIN
//Iniciadora de APP MEDIDOR DE VELAS kitesurf
function iniciarMedidor(){
    let salir = false
    while(!salir){
        let pregunta = prompt(`Queres probar nuestro medidor?
        - Si
        - No`)
        if(pregunta.toLowerCase() == "no"){
            alert("Saludos!")
            salir = true
        }else if(pregunta.toLowerCase() == "si"){
            medidor()
        }else{
            alert("Respuesta incorrecta, ingrese 'si' o 'no' ")
        }
    }
}

//Aplicacion MEDIDOR DE VIENTO
function medidor(){
    let nudos = prompt("Ingresa en numeros la cantidad de nudos que sopla en tu spot.");
    
    if (nudos <= 10){
        alert("Hay muy poco viento, espera a otro dia que sople, no seas manija.");
    }
    else if ((nudos >= 11) && (nudos <= 19)){
        alert("Usa el kite 12 de metros.");
    }
    else if ((nudos >= 20) && (nudos <= 23)){
        alert("Usa el kite de 10 metros.");
    }
    else if ((nudos >= 24) && (nudos <= 28)){
        alert("Usa el kite de 9 metros.");
    }
    else if ((nudos >= 29) && (nudos <= 35)){
        alert("Usa el kite de 7 metros.");
    }
    else {
        alert("Peligro!!! Hay mucho mucho viento. No Apto para kitesurf.");
    }
}

/////////////////////////
//CASE 2 - MENU MAIN 
//Ver todas las tablas
function verTodas(){
    let exitMenuu = false
    do{
        let eleccion3 = parseInt(prompt(`
        Seleccione una opcion             
        1 - Ver todos los modelos con detalles
        2 - Ver los modelos ordenados por precio
        3 - Buscar stock de un modelo especifico
        4 - Cargar modelo estandar al carrito
        5 - Ver y filtrar tablas con cola fish
        0 - Volver al menu principal
        `))
            switch(eleccion3){
                    case 1:
                        verTablas(tablas)
                    break
                    case 2:
                        ordenadorTablas()
                    break
                    case 3:
                        buscarModelo()
                    break
                    case 4:
                        cargarCarrito()
                    break
                    case 5:
                        soloFishh()
                    break
                    case 0:
                        exitMenuu = true
                    break
                    default:
                        alert("Ingrese con numeros del 1 al 5 para realizar una accion. Ingrese 0 para salir.")
                    break
                    }
    }while(!exitMenuu)
}

//Ver catalogo
function verTablas(tablas){
    alert(`Tenemos ${tablas.length} modelos diferentes para ofrecerte.`)
    tablas.forEach((tabla)=>{
        alert(`MODELO: 
                    ${tabla.nombre} 
                    Precio: $${tabla.precio}
                    Width: ${tabla.width}
                    Heigth: ${tabla.heigth} `)
    })
}

//Ordenar tablas menos precio
function ordenadorTablas(){
    tablas.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        // a es igual a b
        return 0;
    })
    alert("A continuacion vas a ver todos nuestros productos ordenados por precio de menos a mayor.")
    verTablas(tablas)
}

//Consulta stock nombre de tablas
function buscarModelo(){
    let modeloBuscado  = prompt(`    Fabricamos los modelos:

    - Wakeboard
    - Skate
    - Retrofish
    - Shortfish
    - Snowboard
    - Bigwave
    - Longboard
    - Kiteboard

    Escribi la que quieras consultar si tenemos en stock.
    `).toUpperCase()
    let modeloEncontrado = tablas.find(
        (board)=> board.nombre == modeloBuscado
        )
    if( modeloEncontrado == undefined){
        alert("No hay stock")
    }else {
        alert( "Hay stock")
    }
}

//Filtrar por cola fish
function soloFish(){
    const colafish = tablas.filter((el) => el.nombre.includes('fish'))
    console.log(colafish)
}

//Sumar al carrito tablas estandar
function cargarCarrito(){
    let exitMenu2 = false
    do{
        let cargaIngresada = prompt(`
        Seleccione el modelo que desea cargar al carrito:

        1 - Wakeboard
        2 - Retrofish
        3 - Shortfish
        4 - Longboard
        5 - Kiteboard
        0 - EXIT
        `)
        if(cargaIngresada == 1){
            carritoEstandar.push(wakeboard)
            alert(`Tu tabla "wakeboard" fue cargada al carrito con exito. Para salir ingresa 0.`)
        }else if(cargaIngresada == 2){
            carritoEstandar.push(retrofish)
            alert(`Tu tabla "retrofish" fue cargada al carrito con exito. Para salir ingresa 0.`)
        }else if(cargaIngresada == 3){
            carritoEstandar.push(shortfish)
            alert(`Tu tabla "shortfish" fue cargada al carrito con exito. Para salir ingresa 0.`)
        }else if(cargaIngresada == 4){
            carritoEstandar.push(longboard)
            alert(`Tu tabla "longboard" fue cargada al carrito con exito. Para salir ingresa 0.`)
        }else if(cargaIngresada == 5){
            carritoEstandar.push(kiteboard)
            alert(`Tu tabla "kiteboard" fue cargada al carrito con exito. Para salir ingresa 0.`)
        }else if(cargaIngresada == 0){
            exitMenu2 = true
        }else if((cargaIngresada == " ")||(cargaIngresada == "")){
            alert("Ingrese un numero del 1 al 6. Ingrese 0 para salir.")
        }else{
            alert("Ingrese un numero del 1 al 6. Ingrese 0 para salir.") 
        }    
    }while(!exitMenu2 )
}

//Filtrar por tablas de tail fish
function soloFishh(){
    const soloFishhh = tablas.filter(producto => producto.nombre.includes('FISH'))
    verTablas(soloFishhh)
}

/////////////////////////
//CASE 3 - MENU MAIN
//clase CONSTRUCTORA de objetos (tablas personalizadas por clientes)
class tablaPer{
    constructor (tail, color, largo, ancho) {
        this.tail = tail;
        this.color = color;
        this.largo = largo;
        this.ancho = ancho;
    }
}

//Function INSTANCIADORA de objetos (tablas personalizadas por clientes) + push carrito
function personalizarTabla(){
    let tail = prompt(`Escriba el tipo de Tail para su tabla:
    - Short
    - Fish
    - RetroFish
    - Wake `)
    let color = prompt(`Escriba el color de la tabla.
Tenemos en stock:
    - Rojo
    - Azul
    - Negra`)
    let largo = parseInt(prompt("Ingrese el largo en cm de la tabla"))
    let ancho = parseInt(prompt("Ingrese el ancho en cm de la tabla"))
    const tablaPersonalizada = new tablaPer(tail, color, largo, ancho)
    carrito.push(tablaPersonalizada) 
    tablasPersonalizadas.push(tablaPersonalizada)
    alert(`Tu tabla perzonalizada ${tablaPersonalizada.tail.toUpperCase()} fue cargada al carrito con exito.
            Color: ${tablaPersonalizada.color}
            Largo: ${tablaPersonalizada.largo}
            Ancho: ${tablaPersonalizada.ancho}
            Precio: $8999`)
}

/////////////////////////
//CASE 4 - MENU MAIN
//Function administradora de carrito 
function administrarCarrito(){
    let exitMenuuu = false
    do{
        let eleccion4 = parseInt(prompt(`
        Seleccione una opcion             
        1 - Ver tu carrito de compras
        2 - Borrar carrito
        0 - Volver al menu principal
        `))
            switch(eleccion4){
                    case 1:
                        if((carrito.length == 0) && (carritoEstandar.length == 0)){
                            alert("Su carrito esta vacio")
                        }else{
                            verCarritoEstandar(carritoEstandar)
                            verCarrito(carrito)
                            alert(`Tu carrito tiene un total de ${carritoEstandar.length + carrito.length} productos cargados.`)
                        }
                    break
                    case 2:
                        carrito.splice(0, carrito.length)
                        carritoEstandar.splice(0, carritoEstandar.length)
                        alert(`Tu carrito tiene ${carrito.length} productos. Fue borrado con exito!`)
                    break
                    case 0:
                        exitMenuuu = true
                    break
                    default:
                    alert("Ingrese con numeros del 1 al 2 para realizar una accion. Ingrese 0 para salir.")
                    break
            }
        }while(!exitMenuuu)
    }

//Ver carrito perzonalizado
function verCarrito(carrito){
    carrito.forEach((personalizarTabla)=>{
        alert(`Tienes ${carrito.length} tablas personalizadas en tu carrito: 
        Tail: ${personalizarTabla.tail}
        Color: ${personalizarTabla.color}
        Largo: ${personalizarTabla.largo}
        Ancho: ${personalizarTabla.ancho} `)
    })
}

//Ver carrito estandar
function verCarritoEstandar(carritoEstandar){
    carritoEstandar.forEach((tabla)=>{
        alert(`Tienes ${carritoEstandar.length} tablas estandar en tu carrito:
        Modelo: ${tabla.nombre}
        Precio: $${tabla.precio}
        Ancho: ${tabla.width}
        Largo: ${tabla.heigth} `)
    })
}

//Saludo final 
function gracias(nombre){
    alert("Gracias por utilizar nuestra aplicacion, buenos vientos " + nombre + "!!!");
    console.log("Gracias por ver mi codigo programador ;)");
}

// clase  CONSTRUCTORA de objetos (tablas estandar)
class tabla {
    constructor (nombre, precio, width, heigth) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.width   = width;
        this.heigth  = heigth;
    }
    mostrarNombre (){
        console.log("Tu tabla"+ this.nombre + "fue cargada al sistema con exito")
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//ARRAY de tablas estandar
const tablas = []

//ARRAY de tablas personalizadas 
const tablasPersonalizadas = []

//ARRAY de carrito perzonalizado
const carrito = []

//ARRAY de carrito estandar
const carritoEstandar = []

//INSTANCIACION de objetos (tablas estandar)
const retrofish = new tabla("retrofish", 5600, 36, 74);
const shortfish = new tabla("shortfish", 5500, 34, 75);
const longboard = new tabla("longboard", 6000, 37, 85);
const kiteboard = new tabla("kiteboard", 5100, 34, 74);
const wakeboard = new tabla("wakeboard", 5500, 35, 75);

//AGREGAMOS OBJETOS al array tablas estandar
tablas.push(retrofish, shortfish, longboard, kiteboard, wakeboard);
tablas.push(new tabla("bigwave", 5800, 36, 76));


//BUCLE FOR para sumar iva a las tablas estandar
for(const sumarI of tablas){
    sumarI.sumaIva();
}




/////////////////
//    GO      //
///////////////
const nombre = prompt("Ingrese su nombre");

MENU();
gracias(nombre);


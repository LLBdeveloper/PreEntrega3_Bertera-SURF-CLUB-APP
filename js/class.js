////////////////////////
// clase  CONSTRUCTORA de objetos (tablas estandar)
class tabla {
    constructor (nombre, precio, id, imagen) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.id = id;
        this.imagen = imagen;
    }
    mostrarNombre (){
        console.log("Tu tabla"+ this.nombre + "fue cargada al sistema con exito")
    }
}

////////////////////////
//INSTANCIACION de objetos (tablas estandar)
const shortfish = new tabla("Shortfish", 5500, 1, "surftranierlanita800x600.jpg");
const kiteboard = new tabla("Kiteboard", 5100, 2, "surftrainerKITE800x600.jpg");
const retrofish = new tabla("Retrofish", 5600, 3, "modelofront800x600.jpg" );
const llavero = new tabla("Llavero", 1500, 4, "llaveroceleste800x600.jpg");
const perchero = new tabla("Perchero", 3000, 5, "perchero3q800x600.jpg" );

////////////////////
// ARRAY
let tablas = []

///////////////////
// storage y json 
if(localStorage.getItem("tablas")){
    tablas = JSON.parse(localStorage.getItem("tablas"))
}else{
    console.log("seteando libros")
    tablas.push(shortfish, kiteboard, retrofish, llavero, perchero)
    localStorage.setItem("tablas", JSON.stringify(tablas))
}
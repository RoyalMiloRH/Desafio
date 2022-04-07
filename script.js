
// Construyo la clase primero

class Comida {
    constructor(comida) {
        this.id = comida.id;
        this.marca = comida.marca;
        this.precio = comida.precio;
        this.cantidad = comida.cantidad;
        this.precioTotal = comida.precio;
    }


    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

// objetos!
const comidas = [
    {
        id: 0,
        marca: "Royal Canin",
        cantidad: 1,
        descripcion: "Nutrición completa y balanceada. Sin colorantes artificiales",
        precio: 100,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 1,
        marca: "Optimum",
        cantidad: 1,
        descripcion: "El Alimento Optimum Perro Adulto Mediano y Grande, cuenta con proteína refinada de pollo cocido al vapor y fibras naturales para una digestión equilibrada.",
        precio: 80,
        img: "./img/imagenproducto.jpg"
    },
    {
        id: 2,
        marca: "Infinity",
        cantidad: 1,
        descripcion: "Contiene semillas de Chía, fuente natural de Omega 3 sin procesos industriales, que contribuye a la salud de la piel y un correcto metabolismo de las grasas",
        precio: 450,
        img: "./img/imagenproducto.jpg"
    },
    {
        id: 3,
        marca: "Dog chow",
        cantidad: 1,
        descripcion: "Formulado con Taurina, la cual es esencial para el mantenimiento y la mejora de la función cardíaca del perro. ",
        precio: 30,
        img: "./img/imagenproducto.jpg"
    },
    {
        id: 4,
        marca: "Pro Plan",
        cantidad: 1,
        descripcion: "Proporción equilibrada de calcio y fósforo que contribuyen a desarrollar huesos y dientes fuertes.",
        precio: 320,
        img: "./img/imagenproducto.jpg"
    },
    {
        id: 5,
        marca: "Excellent",
        cantidad: 1,
        descripcion: "Contiene un excelente equilibrio de calcio y fósforo. La croqueta es del tamaño adecuado sin colorantes ni sabores artificiales.",
        precio: 460,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 6,
        marca: "Pedigree",
        cantidad: 1,
        descripcion: " Con calcio y prebióticos para un sano crecimiento y además cubre las 4 necesidades universales.",
        precio: 960,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 7,
        marca: "Old Prince",
        cantidad: 1,
        descripcion: "Old Prince es la línea Premium de alimento para perros y gatos. No contiene soja ni sus derivados y utiliza ingredientes superiores de origen natural para brindar la más alta calidad.",
        precio: 230,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 8,
        marca: "Natural Meat",
        cantidad: 1,
        descripcion: "Es una alimento para perros adultos a partir de los 12 meses de edad, contiene ingredientes naturales como frutas y vegetales que proveen una alimentación completa y equilibrada.",
        precio: 120,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 9,
        marca: "Eukanuba",
        cantidad: 1,
        descripcion: " Las fórmulas para adulto de EUKANUBA aseguran un nivel de glucosa en sangre adecuado y sostenido en el tiempo, y una digestión más prolongada gracias al balance especial entre diferentes tipos de granos.",
        precio: 1430,
        img: "./img/imagenproducto.jpg",
    },
    {
        id: 10,
        marca: "Balanced",
        cantidad: 1,
        descripcion: "formulada para lograr un óptimo equilibrio orgánico y estructural en la adultez.",
        precio: 1032,
        img: "./img/imagenproducto.jpg",
    },
];


let carrito;

// Aqui hago la declaracion en storage en dos ejemplos
// uno simple ! y otro relacionado con mi proyecto que falta mejorar


function agregarCarritoEnStorage() {
    if (localStorage.getItem("carrito")) {
        console.log("Local Storage ya tiene contenido.");

    }else {
        localStorage.setItem("carrito", JSON.stringify(comidas));
    }
}

function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log("contenido en chequear Carrito en 1s", contenidoEnStorage);

    if (contenidoEnStorage) {
        let array = [];
        for (let i = 0; i < contenidoEnStorage.length; i++) {
            let comida = new Comida(contenidoEnStorage[i]);
            comida.actualizarPrecioTotal();
            array.push(comida);
        }

        return array;
    }

    return [];
};

// Aqui imprimo la comida en el HTML que se recibe por el array


function imprimirProductosEnHtml(comidas) {

    let contenedor = document.getElementById("contenedor");

    // por cada array se ira creando una card!

    for (const comida of comidas) {

        let card = document.createElement("div");
        
        // Aplico bootstrap y agrego una card

        card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <img src="${comida.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title">${comida.marca}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${comida.descripcion}</h5>
                <p class="card-text">$${comida.precio}</p>

                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${comida.id}" type="button"  class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>      
        `;
        // ya creada la card la agregamos al contenedor
        contenedor.appendChild(card);
        // se asigna un evento en el boton, agregamos una palabra " agregar" seguido del id 
        // y le dara a cada uno un id unico por cada boton se hara referencia a la card selecionada
        let boton = document.getElementById(`agregar${comida.id}`);

        boton.onclik = () => agregarAlCarrito(comida.id);
    }
};

// aqui voy !! aaaaaa ayuda 

function dibujarTabla(array) {
    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    // let precioTotal = obtenerPrecioTotal(array);
    let precioTotal = 123;

    let tabla = document.createElement("div");

    tabla.innerHTML = `
    <table id="tablaCarrito" class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Parcial</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>

        <tbody id="bodyTabla">
            <tr>
                <td>Total: $${precioTotal}</td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
        <tr> 
            <td> <button id="vaciarCarrito" class="btn btn-dark"> Vaciar Carrito </button> </td>
        </tr>

        </tbody>
    </table>
`;

contenedor.appendChild(tabla);
}

imprimirProductosEnHtml(comidas);

agregarCarritoEnStorage();

carrito = chequearCarritoEnStorage();
dibujarTabla(carrito);
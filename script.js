

const comidas = [
    {
        id: 0,
        marca: "Royal Canin",
        descripcion: "Nutrición completa y balanceada. Sin colorantes artificiales",
        precio: 100,
        imagen: "./img/imagenproducto.jpg",
    },
    {
        id: 1,
        marca: "Optimum",
        descripcion: "El Alimento Optimum Perro Adulto Mediano y Grande, cuenta con proteína refinada de pollo cocido al vapor y fibras naturales para una digestión equilibrada.",
        precio: 80,
        imagen: "./img/imagenproducto.jpg"
    },
    {
        id: 2,
        marca: "Infinity",
        descripcion: "Contiene semillas de Chía, fuente natural de Omega 3 sin procesos industriales, que contribuye a la salud de la piel y un correcto metabolismo de las grasas",
        precio: 450,
        imagen: "./img/imagenproducto.jpg"
    },
    {
        id: 3,
        marca: "Dog chow",
        descripcion: "Formulado con Taurina, la cual es esencial para el mantenimiento y la mejora de la función cardíaca del perro. ",
        precio: 30,
        imagen:"./img/imagenproducto.jpg"
    },
    {
        id: 4,
        marca: "Pro Plan",
        descripcion: "Proporción equilibrada de calcio y fósforo que contribuyen a desarrollar huesos y dientes fuertes.",
        precio: 320,
        imagen: "./img/imagenproducto.jpg"
    },
    {
        id: 5,
        marca: "Excellent",
        descripcion: "Contiene un excelente equilibrio de calcio y fósforo. La croqueta es del tamaño adecuado sin colorantes ni sabores artificiales.",
        precio: 460,
        imagen: "./img/imagenproducto.jpg"
    },
    {
        id: 6,
        marca: "Pedigree",
        descripcion: " Con calcio y prebióticos para un sano crecimiento y además cubre las 4 necesidades universales.",
        precio: 960,
        imagen: "./img/imagenproducto.jpg",
    },
    {
        id: 7,
        marca: "Old Prince",
        descripcion: "Old Prince es la línea Premium de alimento para perros y gatos. No contiene soja ni sus derivados y utiliza ingredientes superiores de origen natural para brindar la más alta calidad.",
        precio: 230,
        imagen: "./img/imagenproducto.jpg",
    },
    {
        id: 8,
        marca: "Natural Meat",
        descripcion: "Es una alimento para perros adultos a partir de los 12 meses de edad, contiene ingredientes naturales como frutas y vegetales que proveen una alimentación completa y equilibrada.",
        precio: 120,
        imagen: "./img/imagenproducto.jpg",
    },
    {
        id: 9,
        marca: "Eukanuba",
        descripcion: " Las fórmulas para adulto de EUKANUBA aseguran un nivel de glucosa en sangre adecuado y sostenido en el tiempo, y una digestión más prolongada gracias al balance especial entre diferentes tipos de granos.",
        precio: 1430,
        imagen: "./img/imagenproducto.jpg",
    },
    {
        id: 10,
        marca: "Balanced",
        descripcion: "formulada para lograr un óptimo equilibrio orgánico y estructural en la adultez.",
        precio: 1032,
        imagen: "./img/imagenproducto.jpg",
    },
];

const contenedor = document.getElementById("container");

comidas.forEach((alimento, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `    <img src="${alimento.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${alimento.marca}</h4>
          <p class="card-text">${alimento.precio}</p>
          <a href="#cart" class="btn btn-primary" onClick="agregarAlCarrito(${indice})">Comprar</a>
        </div>`;

    card.innerHTML = html;
    contenedor.appendChild(card);

});

let modalCarrito = document.getElementById("cart");
const agregarAlCarrito = (indiceDelArrayAlimento) => {

    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === productos[indiceDelArrayAlimento].id;
    });

    if (indiceEncontradoCarrito === -1) {
        const productoAgregar = comidas[indiceDelArrayAlimento];
        productoAgregar.cantidad = 1;
        cart.push(productoAgregar);
        actualizarStorage(cart);
        dibujarCarrito();
    } else {
        cart[indiceEncontradoCarrito].cantidad += 1;
        actualizarStorage(cart);
        dibujarCarrito();
    }
};

const dibujarCarrito = () => {
    let total = 0;
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = "";

    if (cart.length > 0) {
        cart.forEach((alimento, indice) => {
            total = total + alimento.precio * alimento.cantidad
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "alimento-carrito";
            carritoContainer.innerHTML = `
        <img class="car-img" src="${alimento.imagen}"/>
        <div class="product-details">
        ${alimento.marca}
        </div>
        <div class="product-details" > Cantidad: ${alimento.cantidad}</div>
        <div class="product-details"> Precio: $ ${alimento.precio}</div>
        <div class="product-details"> Subtotal: $ ${alimento.precio * alimento.cantidad
                }</div>
        <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
        `;

            modalCarrito.appendChild(carritoContainer);
        });

        const totalContainer = document.createElement("div");
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
        <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
        modalCarrito.appendChild(totalContainer);

    } else {
        modalCarrito.classList.remove("cart");
    }
};

let cart = [];

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    dibujarCarrito();
}


const removeProduct = (indice) => {
    cart.splice(indice, 1);
    actualizarStorage(cart);
    dibujarCarrito();
  };
  const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
    <div class="datos-cliente">
    <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
    <button class= "btn btn-danger formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </button>
    </div>`;
    modalCarrito.innerHTML = compraFinalizada;
  };
  const dibujarFormu = () => {
    modalCarrito.innerHTML = "";
    const formulario = `
    <h2> DATOS PARA EL ENVÍO </h2>
    <div class="contact__secction-container">
     <div class="row">
       <div class="contact__secction__item">
         <label>Nombre</label>
         <input type="text" id="nombre" placeholder="Nombre"  />
       </div>
       <div class="contact__secction__item">
         <label>E-mail</label>
         <input type="text" id="mail" placeholder="E-mail" />
       </div>
       <div class="contact__secction__item">
         <label>Telefono</label>
         <input type="text" id="telefono" placeholder="Telefono"  />
       </div>
       <div class="contact__secction__item">
         <label>Domicilio</label>
         <input type="text" id="domicilio" placeholder="Domicilio" />
       </div>
       <div class="contact-button">
         <button type="button" class="btn btn-danger envio" onClick="mostrarMensaje()" >Confirmar</button>
       </div>
     </div>
   </div>`;
    modalCarrito.innerHTML = formulario;
  };
  
  const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente} </div>`;
    modalCarrito.innerHTML = mensaje;
  };
  



const actualizarStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

let avisoDeAgregado = () => {
    alert('Agregado con exito')
}


class mascota {

    constructor(nombre, dueño, direccion, edad, raza) {
        this.nombre = nombre;
        this.dueño = dueño;
        this.direccion = direccion;
        this.edad = edad;
        this.raza = raza;
    };

};

let cliente = parseInt(prompt('Bienvenido al registro automatico para mascota.'));

if (cliente) {

    let mascotas = [];

    for (let i = 0; i < cliente; i++) {

        let nombre = prompt('Ingrese nombre de mascota');
        let dueño = prompt('Ingrese nombre del dueño de la mascota');
        let direccion = prompt('Ingrese direccion de la mascota');
        let edad = prompt('Ingrese edad de la mascota');
        let raza = prompt('Ingrese raza de la mascota');

        const informacion = new mascota(nombre, dueño, direccion, edad, raza);

        mascotas.push(informacion);

        avisoDeAgregado()

        console.log(mascotas);
    };
}
else {
    alert('No se a detectado el ingreso adecuado.')
};


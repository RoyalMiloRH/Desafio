let informacionPrecio = ()=> {
    alert('Eleccion por orden numerico: \n1.- Aries\n 2.- Tauro\n 3.- Géminis\n 4.- Cáncer\n 5.- Leo\n 6.- Virgo\n 7.- Libra\n 8.- Escorpio \n 9.- Sagitario \n 10.- Capricornio\n 11.-Acuario \n 12.- Piscis')
};

let fortuna = () => {

    let signo = parseInt(prompt('Cuantas personas son?'));
    let precioSigno = 0
    let z = signo;

    if (signo <= 12) {
        for (let i = 1; i <= signo; i++) {

            informacionPrecio();

            let eleccion = parseInt(prompt("Elige el signo zodiacal  (Valor:$200/c) \n" + "Signos restantes: " + z--));

            switch (eleccion) {
                case 1:
                    let Aries = 200;
                    precioSigno = Aries + precioSigno;
                    alert('Aries: Algunos problemas de salud, sobre todo musculares, podrían darte un poco de problema, pero nada que no puedas superar')
                    break;
                case 2:
                    let Tauro = 200;
                    precioSigno = Tauro + precioSigno;
                    alert('Tauro: Pon atención sobre todo en el aspecto laboral para que no te lleves ninguna clase de sorpresa desagradable, pues en el amor obtendrás tu recompensa.')
                    break;
                case 3:
                    let Geminis = 200;
                    precioSigno = Geminis + precioSigno;
                    alert('Geminis: Cuida tu bolsillo, recuerda que la situación económica no está rebosante, así que no malgastes y piensa muy bien lo que vas hacer con tu dinerito.')
                    break;
                case 4:
                    let Cancer = 200;
                    precioSigno = Cancer + precioSigno;
                    alert('Cancer: Échale ganas y recupera eso que dejaste por ahí pendiente. Si ya tienes una pareja estable, cierra filas con esa persona, afianza la relación y vete para arriba')
                    break;
                case 5:
                    let Leo = 200;
                    precioSigno = Leo + precioSigno;
                    alert('Leo: La economía está de tu lado. Te irá bien en los negocios o en el trabajo, pero no te confíes, hay que cuidar cada detalle para que no se venga abajo')
                    break;
                case 6:
                    let Virgo = 200;
                    precioSigno = Virgo + precioSigno;
                    alert('Virgo: Llénate de energía positiva, rodéate de gente inteligente, que te quiera y vaya hacia el mismo lado. Deja atrás a esas personas que no te aportan nada')
                    break;
                case 7:
                    let Libra = 200;
                    precioSigno = Libra + precioSigno;
                    alert('Libra: En el amor puedes encontrar algunas complicaciones, chismes o desconfianza, pero todo mejorará con o sin la persona con la que estés.')
                    break;
                case 8:
                    let Escorpion = 200;
                    precioSigno = Escorpion + precioSigno;
                    alert('Escorpion: Del dinero no te preocupes, trabaja para que no te haga falta, pues el futuro vislumbra que te irá bien en las finanzas.')
                    break;
                case 9:
                    let Sagitario = 200;
                    precioSigno = Sagitario + precioSigno;
                    alert('Sagitario: Los amigos siempre están a tu lado, ahora échale más ganas con tu pareja para que las cosas salgan como las quieres.')
                    break;
                case 10:
                    let Capricornio = 200;
                    precioSigno = Capricornio + precioSigno;
                    alert('Capricornio: Si te sientes mal no dudes en acudir al médico, nunca está de más una consulta acertada para que estés bien y mejor.')
                    break;
                case 11:
                    let Acuario = 200;
                    precioSigno = Acuario + precioSigno;
                    alert('Acuario: Si te quieres sentir liberado, ahora es el momento para hacerlo, pero hazlo con precaución, con paso lento, pero firme y seguro.')
                    break;
                case 12:
                    let Piscis = 200;
                    precioSigno = Piscis + precioSigno;
                    alert('Piscis: Si es verdad que el dinero de repente es un problema, eso se solucionará con tus nuevos proyectos o situaciones que cambiarán en tu trabajo y que te beneficiarán.')
                    break;
                case 0:
                    i = signo;
                    break;
                default:
                    alert("Error, Vuelva a intentarlo");
                    i--;
                    break;
            }/* Cierre switch */
        }; /* Cierre de Ciclo */

    } /* Cierre de Condicion */
    else alert('Opcion incorrecta');

    alert("El precio por fortuna es: $" + precioSigno);

}; /* Ciere de funcion */

fortuna();

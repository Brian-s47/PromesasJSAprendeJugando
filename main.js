// *******************************  Zona De Funciones Base **********************************
// ****  Mensaje de Bienvenida ****
function mensajeBienvenida(){ alert(
    `
Bienvenido al sistema de Enseñanza
Prende Jugando
Tema: Metodos de Promesas (.race(); .any(); .all())
Presiona Enter Para Continuar
`
);
}
// ****  Mostrar Explicacion Teorica ****
function menuTeoria(){
    let opcionMenu
    do{
        opcionMenu = prompt(`Elije el tema que desea ver:
        1. Promise.race()
        2. Promise.any()
        3. Promise.all()
        4. Salir del programa.`
        );
        switch (opcionMenu){
            case "1":
                alert(`
                Promise.race() 
                Recibe un iterable (generalmente un array) de promesas y devuelve una nueva promesa. Esta nueva promesa se resuelve o rechaza tan pronto como una de las promesas del iterable se resuelva o rechace. La promesa que se resuelva primero (sin importar si es resuelta o rechazada) determina el resultado de la promesa devuelta.`)
                break
            case "2":
                alert(`
                Promise.any() 
                También recibe un iterable de promesas, pero a diferencia de Promise.race(), devuelve la primera promesa que se resuelve exitosamente. Si todas las promesas en el iterable se rechazan, Promise.any() devuelve una promesa rechazada con un objeto AggregateError que contiene los motivos de los rechazos.`)
                break
            case "3":
                alert(`
                Promise.all() 
                También recibe un iterable de promesas, pero se resuelve cuando todas las promesas del iterable se resuelven exitosamente. Si alguna de las promesas se rechaza, Promise.all() inmediatamente devuelve una promesa rechazada con el motivo del rechazo de la primera promesa que falla.`)
                break
            case "4":
                window.alert("Gracias por usar nuestro sistema");
                break;
        }
    }while (opcionMenu !== "4");
}
// ****  Funcion Para Menu principal del sistema ****
function iniciarSistema(){
    mensajeBienvenida();
    let opcionMenu
    do{
        opcionMenu = prompt(`Elije una opcion:
        1. Aprender Jugando -> Promise.race()
        2. Aprender Jugando -> Promise.any()
        3. Aprender Jugando -> Promise.all()
        4. Ver Explicacion Teorica
        5. Salir del programa.`
        );
        switch (opcionMenu){
            case "1":
                promiseRase();
                break;
            case "2":
                promiseAny();
                break;
            case "3":
                promiseAll();
                break;
            case "4":
                menuTeoria();
                break
            case "5":
                window.alert("Gracias por usar nuestro sistema");
                break;
        }
    }while (opcionMenu !== "5");
} 
// ****  Juego de Promise.race() ****
function promiseRase(){
    alert(`
     ---> Promise.race() <---
     Explicación:

    `)
    // Hermano -> 
    // Hermana -> 
    // Abuela  -> 
    // Papà    -> 
    // Pareja  -> 
    juegoRase()
}
function juegoRace(){

}
// ****  Juego de Promise.any() ****
function promiseAny(){
    alert(`
     ---> Promise.any() <---
     Explicación:

    `)
    // Hermano -> 
    // Hermana -> 
    // Abuela  -> 
    // Papà    -> 
    // Pareja   -> 
    juegoAny()
}
function juegoAny(){

}

// *******************************  Zona de Variables  **********************************
let objetos = {
    hermano: "video Juego",
    hermana: "peluche",
    abuela: "tarro de galletas",
    papa: "herramientas",
    pareja: "invitacion a salir",
}

// *******************************  Zona De funciones de juego ******************************************** 
// ****  Juego de Promise.all() ****
function promiseAll(){
    alert(`
     ---> Promise.all() <---
     Explicación:
     A cada miembro de la familia le prometiste algo. Se te mostrará todo en un cuadro durante 5 segundos para que puedas memorizarlo. Luego, se te preguntará a cada uno qué le prometiste y deberás ingresarlo.
     Cuando aciertes (resuelvas) la promesa, pasarás al siguiente miembro de la familia. En cuanto falles una de las promesas, se te devolverá el mensaje de que faltaste a tu promesa (rechazo).
    `)
    // Hermano -> Video Juego
    // Hermana -> Peluche
    // Abuela  -> Tarro de Galletas
    // Papà    -> Herramienta
    // Pareja   -> invitacion a salir
    juegoAll()
}
function juegoAll(){
    let promesaHermano = new Promise((resolve, reject) => {
        let obgetoHermano = prompt(`Favor Ingresar el Obgeto Prometido a tu Hermano`)
            let cumplimiento = true;
            if(obgetoHermano.toLowerCase === objetos.hermano){
                resolve(cumplimiento = true);
            }else{
                reject(cumplimiento = false);
            }
    });
    let promesaHermana = new Promise((resolve, reject) => {
        let obgetoHermana = prompt(`Favor Ingresar el Obgeto Prometido a tu Hermana`)
            let cumplimiento = true;
            if(obgetoHermana.toLowerCase === objetos.hermana){
                resolve(cumplimiento = true);
            }else{
                reject(cumplimiento = false);
            }
    });
    let promesaAbuela = new Promise((resolve, reject) => {
        let obgetoAbuela= prompt(`Favor Ingresar el Obgeto Prometido a tu Abuela`)
            let cumplimiento = true;
            if(obgetoAbuela.toLowerCase === objetos.abuela){
                resolve(cumplimiento = true);
            }else{
                reject(cumplimiento = false);
            }
    });
    let promesaPapa = new Promise((resolve, reject) => {
        let obgetoPapa= prompt(`Favor Ingresar el Obgeto Prometido a tu Papà`)
            let cumplimiento = true;
            if(obgetoPapa.toLowerCase === objetos.papa){
                resolve(cumplimiento = true);
            }else{
                reject(cumplimiento = false);
            }
    });
    let promesaPareja = new Promise((resolve, reject) => {
        let obgetoPareja= prompt(`Favor Ingresar el Obgeto Prometido a tu Pareja`)
            let cumplimiento = true;
            if(obgetoPareja.toLowerCase === objetos.pareja){
                resolve(cumplimiento = true);
            }else{
                reject(cumplimiento = false);
            }
    });
    promiseAll([promesaHermano, promesaHermana, promesaAbuela, promesaPapa, promesaPareja]).them(result => {
        
    })
    promiseAll([promesaHermano, promesaHermana, promesaAbuela, promesaPapa, promesaPareja]).catch(result => {
        
    })
}
// *******************************  Zona de Codigo de ejecucion **********************************
iniciarSistema();

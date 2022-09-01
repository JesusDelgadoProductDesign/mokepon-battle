//function iniciar juego
const sectionSeleccionAtaque = document.getElementById("seleccionaAtaque")   
const sectionSeleccionarReiniciar = document.getElementById("Reiniciar")
const botonSeleccionarMascotaJugador = document.getElementById("boton-seleccionar")
sectionSeleccionarReiniciar.style.display = "none"
const botonReiniciar = document.getElementById("boton-reiniciar")

//function seleccionar mascota jugador
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

//function seleccionar mascota enemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

//function combate
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

//function crear mensajes
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorAtaques = document.getElementById("contenedorAtaques")
//function crear mensaje final
const sectionReiniciar = document.getElementById("Reiniciar")

const contenedorTarjetas = document.getElementById("contenedor-tarjertas")
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatihueya
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/Mokepon-mapa.png"
let alturaMapa
let anchoMapa = window.innerWidth - 20
const anchoMaximoMapa = 350

if (anchoMapa > anchoMaximoMapa) {
    anchoMapa = anchoMaximoMapa - 20
}
alturaMapa = anchoMapa * 600 / 800
mapa.width = anchoMapa
mapa.height = alturaMapa


class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 45
        this.alto = 45
        this.x = Random(0, mapa.width - this.ancho )
        this.y = Random(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let hipodoge = new Mokepon ("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, "./assets/hipodoge.webp")
let capipepo = new Mokepon ("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5, "./assets/capipepo.webp")
let ratihueya = new Mokepon ("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, "./assets/ratigueya.png")

let hipodogeEnemigo = new Mokepon ("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, "./assets/hipodoge.webp")
let capipepoEnemigo = new Mokepon ("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5, "./assets/capipepo.webp")
let ratihueyaEnemigo = new Mokepon ("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, "./assets/ratigueya.png")

hipodoge.ataques.push(
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
)

hipodogeEnemigo.ataques.push(
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
)

capipepo.ataques.push(
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
)

capipepoEnemigo.ataques.push(
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Agua💧 ", id: "boton-agua" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
)

ratihueya.ataques.push(
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Agua💧 ", id: "boton-agua" },
)

ratihueyaEnemigo.ataques.push(
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Fuego🔥 ", id: "boton-fuego" },
    { nombre: "Tierra🌱 ", id: "boton-tierra" },
    { nombre: "Agua💧 ", id: "boton-agua" },
)

mokepones.push(hipodoge, capipepo, ratihueya)

function iniciarJuego() {
    sectionSeleccionAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatihueya = document.getElementById("Ratigueya")

    })
    botonSeleccionarMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        seleccionMokepon = `<img src=${hipodoge.foto}
        <p></p>`     
        spanMascotaJugador.innerHTML = seleccionMokepon + inputHipodoge.id
        mascotaJugador = inputHipodoge.id

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        seleccionMokepon = `<img src=${capipepo.foto}
        <p></p>`     
        spanMascotaJugador.innerHTML = seleccionMokepon + inputCapipepo.id
        mascotaJugador = inputCapipepo.id

    } else if (inputRatihueya.checked) {
        spanMascotaJugador.innerHTML = inputRatihueya.id
        seleccionMokepon = `<img src=${ratihueya.foto}
        <p></p>`    
        spanMascotaJugador.innerHTML = seleccionMokepon + inputRatihueya.id
        mascotaJugador = inputRatihueya.id

    } else {
        alert('Selecciona una mascota')
        botonSeleccionarMascotaJugador.style.display = 'none'
        reiniciarJuego ()
    }
    extraerAtaques (mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
        ataques = mokepones[i].ataques            
        }  
    }
mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
  })
    botonFuego =  document.getElementById("boton-fuego")
    botonAgua =  document.getElementById("boton-agua")
    botonTierra =  document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "Fuego🔥 ") {
                ataqueJugador.push("Fuego🔥 ")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "Agua💧 ") {
                ataqueJugador.push("Agua💧 ")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push("Tierra🌱 ")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true 
            }
            ataqueAleatorioEnemigo ()
        })
    })
}

function seleccionarMascotaEnemigo (enemigo) {
    //let mascotaAleatoria = Random (0, mokepones.length -1)
    mokeponEnemigo = `<img src=${enemigo.foto}
    //<p></p>`
    //spanMascotaEnemigo.innerHTML = mokeponEnemigo + mokepones[mascotaAleatoria].nombre
    //ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    spanMascotaEnemigo.innerHTML = mokeponEnemigo + enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    
    secuenciaAtaques()
}

//Ataques Enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = Random (0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Fuego🔥 ")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("Agua💧 ")
    } else {
        ataqueEnemigo.push("Tierra🌱 ")
    }
    console.log(ataqueEnemigo)
    iniciarCombate()
}

function iniciarCombate() {
    if (ataqueJugador.length === 5) {
        combate()
        
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate () {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("Empate ⚔")
            
        } else if (ataqueJugador[index] === "Fuego🔥 " && ataqueEnemigo[index] === "Tierra🌱 ") {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML =victoriasJugador

        }  else if (ataqueJugador[index] === "Agua💧 " && ataqueEnemigo[index] === "Fuego🔥 ") {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML =victoriasJugador

        }  else if (ataqueJugador[index] === "Tierra🌱 " && ataqueEnemigo[index] === "Agua💧 ") {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML =victoriasJugador

        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("Perdiste🤕")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML =victoriasEnemigo
        }
    }
    revisarVictorias ()
} 

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal ("🥱Esto fue un empate")

    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal ("🏆Ganaste, has vencido a tu enemigo🏆")
    
    } else {
        crearMensajeFinal ("🤕Perdiste, tu enemigo te ha vencido")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = "Atacaste con: " + indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = "Enemigo atacó con: " + indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultado) {
    sectionMensajes.innerHTML = resultado
    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego (){
    location.reload()
}

function Random (min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX,
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY,    
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratihueyaEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !==0) {
        revisarColisiones(hipodogeEnemigo)
        revisarColisiones(capipepoEnemigo)
        revisarColisiones(ratihueyaEnemigo)
    }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 1
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 1
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 1
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 1
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function teclaPresionada(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "w":
                moverArriba()
                break
        case "s":
                moverAbajo()
                break
        case "a":
                moverIzquierda()
                break
        case "d":
                moverDerecha()
                break
        default:
            break;
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 10)
    window.addEventListener("keydown", teclaPresionada)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
        return mokepones[i]
        }  
    }
}

function revisarColisiones(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota =
        mascotaJugadorObjeto.y
    const abajoMascota =
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota =
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota =
        mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionAtaque.style.display = 'flex'
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    alert(enemigo.nombre + " está listo para pelear🔥")
    //console.log(ataquesMokeponEnemigo);
}

window.addEventListener("load", iniciarJuego)

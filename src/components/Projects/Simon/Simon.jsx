import React from "react"

import "../../../assets/styles/components/projects/SimonSays/Simon.css"

import { Link } from "react-router-dom"

const Simon = () => {


const ULTIMO_NIVEL = 7

let puntaje = ""
let contador = 0
let btnEmpezar = ""
let celeste = ""
let violeta = ""
let naranja = ""
let verde = ""

class Juego
{
  constructor()
    {
      this.inicializar()
      this.generarSecuencia()
      setTimeout(this.siguienteNivel, 500)
    }
  inicializar()
    {
      this.elegirColor = this.elegirColor.bind(this)
      this.siguienteNivel = this.siguienteNivel.bind(this)
      this.inicializar = this.inicializar.bind(this)
      btnEmpezar.classList.add("hide")
      this.nivel = 1
      this.colores =
        {
          celeste,
          violeta,
          naranja,
          verde
        }
    }
  generarSecuencia()
    {
      this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel()
    {
      this.subnivel = 0
      this.nombreAtributo = "valor"
      this.iluminarSecuencia()
      this.agregarEventosClick()
    }

    transformarNumeroAColor(numero)
    {
      switch (numero)
       {
        case 0:
          return "celeste"
        case 1:
          return "violeta"
        case 2:
          return "naranja"
        case 3:
          return "verde"
        default:
          return undefined  
      }
      
    }
    transformarColorANumero(color)
    {
      switch (color)
       {
        case "celeste":
          return 0
        case "violeta":
          return 1
        case "naranja":
          return 2
        case "verde":
          return 3
        default:
          return undefined  
      }
    }

    iluminarSecuencia()
      {
        for (let i = 0; i < this.nivel; i++)
        {
          const color = this.transformarNumeroAColor(this.secuencia[i])
          setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
      }
    iluminarColor(color)
      {
        this.colores[color].classList.add("light")
        setTimeout(() => this.apagarColor(color), 350)
      }

      apagarColor(color)
      {
        this.colores[color].classList.remove("light")
      }
      agregarEventosClick()
      {
        this.colores.celeste.addEventListener("click", this.elegirColor)
        this.colores.verde.addEventListener("click", this.elegirColor)
        this.colores.violeta.addEventListener("click", this.elegirColor)
        this.colores.naranja.addEventListener("click", this.elegirColor)
      }
      eliminarEventosClick()
        {
          this.colores.celeste.removeEventListener("click", this.elegirColor)
          this.colores.verde.removeEventListener("click", this.elegirColor)
          this.colores.violeta.removeEventListener("click", this.elegirColor)
          this.colores.naranja.removeEventListener("click", this.elegirColor)
        }
      elegirColor(ev)
      {
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel])
         {
          this.subnivel++

          if (this.subnivel === this.nivel)
          {
            contador++
            puntaje.innerHTML = contador
            this.nivel++
            this.eliminarEventosClick()
            if (this.nivel === (ULTIMO_NIVEL + 1))
            {
              this.ganoElJuego()
            }
            else
            {
              setTimeout(this.siguienteNivel, 1500)
            }
          }
        }
        else {
          this.perdioElJuego()
        }
      }
      ganoElJuego()
      {
          alert("Felicitaciones, ganaste el juego!!!")
          btnEmpezar.classList.remove("hide")
          contador = 0
          puntaje.innerHTML = contador

      }
      perdioElJuego()
      {
        alert("Lo lamentamos, perdiste :C")
          this.eliminarEventosClick()
          btnEmpezar.classList.remove("hide")
          contador = 0
          puntaje.innerHTML = contador
      }
}

function empezarJuego() {
   btnEmpezar = document.getElementById("btnEmpezar")
   celeste = document.getElementById("celeste")
   violeta = document.getElementById("violeta")
   naranja = document.getElementById("naranja")
   verde = document.getElementById("verde")
   puntaje = document.getElementById("puntaje")
  var juego = new Juego()
}

    return(
        <>
                <Link to="/portafolio" className="header-back">Volver a la Pagina Principal</Link>

            <div className="contador">
                <p className="contador-texto"> Tu puntaje es </p>
                <p id="puntaje"> 0 </p>
                </div>
                <div className="gameboard">
                <div id="celeste" className="color celeste left" data-color="celeste"></div>
                <div id="violeta" className="color violeta right" data-color="violeta"></div>
                <div id="naranja" className="color naranja left" data-color="naranja"></div>
                <div id="verde" className="color verde right" data-color="verde"></div>
                <button id="btnEmpezar" className="btn-start" onClick={empezarJuego}>Empezar a jugar!</button>
            </div>
        </>
    )
}

export default Simon
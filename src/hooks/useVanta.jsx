import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
  const myRefDiv = useRef(null) // valor inicial
  const [vanta, setVanta] = useState(0) // vanta va a ser inicializado en "0"

  // useEffect siempre se ejecuta después de la renderización del componente
  useEffect(() => {

    if (!vanta) {
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current
      }))
    }
    // Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + vanta effect)
    return () => {
      // Dentro de esta función se va a realizar la tarea
      // de destruir los recursos tomados por "vanta"
      if (vanta) {
        vanta.destroy()
      }
    }
  }, [vanta]) // Con esto me aseguro que siga funcionando bien
  // si tuviera más variables "use"

  return myRefDiv
}

export default useVanta
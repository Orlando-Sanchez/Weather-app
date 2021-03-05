import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utilities/urls'
import getAllWeather from './../utilities/transform/getAllWeather'
import { getCityCode } from './../utilities/utilities'

// useCityList es un 'custom hook'
const useCityList = (cities, allWeather, actions) => {
  // const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {

      const url = getWeatherUrl({city, countryCode})
      
      try {
        const propName = getCityCode(city, countryCode)

        // onSetAllWeather({ [propName]: {} })
        actions({ type: 'SET_ALL_WEATHER', payload: { [propName]: {} } })
        
        const response = await axios.get(url)

        const allWeatherAux = getAllWeather(response, city, countryCode)
        // setVariableEstado(variableEstado => variableEstado+1 ) Actualiza el estado anterior
        // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
        // onSetAllWeather(allWeatherAux)
        actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux})
        
      } catch (error) {
        if (error.response) { // Errores que nos responde el server
            setError("Ha ocurrido un error en el servidor del clima")
        } else if (error.request) { // Errores que suceden por no llegar al server
            setError("Verifique la conexión a internet")
        } else { // Errores imprevistos (Por ejemplo: error de tipeo)
            setError("Error al cargar los datos")
        }          
      }
    
      
      // El try and catch de arriba equivale a hacer esto:
      // .then(response => {
      //   const { data } = response
      //   const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
      //   const state = data.weather[0].main.toLowerCase()

      //   const propName = `${city}-${country}` // Ej: [Ciudad de México-México]
      //   const propValue = { temperature, state } // Ej: { temperature: 10, state: "sunny" }

      //   // setVariableEstado(variableEstado => variableEstado+1 ) Actualiza el estado anterior
      //   setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
      // })
      // .catch(error => {      
      //   if (error.response) { // Errores que nos responde el server
      //     setError("Ha ocurrido un error en el servidor del clima")
      //   } else if (error.request) { // Errores que suceden por no llegar al server
      //       setError("Verifique la conexión a internet")
      //   } else { // Errores imprevistos (Por ejemplo: error de tipeo)
      //       setError("Error al cargar los datos")
      //   }      
      // })
    }
    
    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode)
      }
    });
  }, [cities, actions, allWeather])

  return { error, setError }
}

export default useCityList
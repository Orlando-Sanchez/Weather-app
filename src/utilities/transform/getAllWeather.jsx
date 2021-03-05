import { validValues } from './../../components/IconState'
import { getCityCode, toCelsius } from './../utilities'

const getAllWeather = (response, city, countryCode) => {
  const { data } = response
  const temperature = toCelsius(data.main.temp)
  const humidity = data.main.humidity
  const wind = data.wind.speed

  const stateFromServer = data.weather[0].main.toLowerCase()

  const state = validValues.includes(stateFromServer) ? stateFromServer : null // data.weather[0].main.toLowerCase()
  
  const propName = getCityCode(city, countryCode)
  const propValue = { temperature, state, humidity, wind } // Ej: { temperature: 10, state: "sunny" }
  
  // setVariableEstado(variableEstado => variableEstado+1 ) Actualiza el estado anterior
  return ({ [propName]: propValue })
}

export default getAllWeather
const appid = "0f73843a5e932710846616394e675bdd"

export const getWeatherUrl = ({ city, countryCode }) => (
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({ city, countryCode }) => (
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)
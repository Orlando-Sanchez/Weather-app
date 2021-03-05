import React from 'react'
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'

const App = () => {

/*
  const [allWeather, setAllWeather] = useState({})
  const [allChartData, setAllChartData] = useState({})
  const [allForecastItemList, setForecastItemList] = useState({})

  const onSetAllWeather = useCallback((weatherCity) => {
    setAllWeather(allWeather => {
      return ({ ...allWeather, ...weatherCity })
    })
  }, [setAllWeather])

  const onSetChartData = useCallback((chartDataCity) => {
    setAllChartData(chartData => ({ ...chartData, ...chartDataCity}))
  }, [setAllChartData])

  const onSetForecastItemList = useCallback((forecastItemListCity) => {
    setForecastItemList(forecastItemList => ({ ...forecastItemList, ...forecastItemListCity }))
  }, [setForecastItemList])

  const actions = useMemo(() => (
    {
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList
    }
  ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

  const data = useMemo(() => (
    {
      allWeather,
      allChartData,
      allForecastItemList
    }
  ), [allWeather, allChartData, allForecastItemList])
*/

  return (
    <WeatherContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/main" >
            <MainPage />
          </Route>
          <Route path="/city/:countryCode/:city">
            <CityPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>        
        </Switch>
      </Router>
    </WeatherContext>
  )
}

export default App
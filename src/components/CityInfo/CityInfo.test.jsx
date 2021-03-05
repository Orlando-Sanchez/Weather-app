import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'
import { ExpansionPanelActions } from '@material-ui/core'

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const city = "Buenos Aires"
  const country = "Argentina"

  // Render: Renderiza el componente y retorna una serie de funciones de utilidad
  // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
  // Vamos a analizar su estado en el "Assert"
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)

  // Assert 
  // findAllByRole nos va a buscar (en este caso) todos los componentes que sean "heading" => h1,h2,h3, etc
  const cityAndCountryComponents = await findAllByRole("heading")

  // evalúa si el componente contiene los dos headings ("Buenos Aires" y "Argentina")
  expect(cityAndCountryComponents[0]).toHaveTextContent(city)
  expect(cityAndCountryComponents[1]).toHaveTextContent(country)

  //Si estas condiciones se cumplen (expect), entonces el test está "Pass", es decir está bien el componente.
})
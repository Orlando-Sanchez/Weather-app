import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: "AppFrame",
  component: AppFrame
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi officia dolore cupiditate eos quae, nobis blanditiis, repellendus fuga cumque sapiente odio ut ducimus aut, maxime corporis et culpa. Sed, cum.  
    </AppFrame>
  </Router>
)
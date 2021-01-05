import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './views/main'

import './App.css'
import "./assets/custom.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

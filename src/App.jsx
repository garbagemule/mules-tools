import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import Home from './pages/Home/Home'
import WaveAnalyzer from './pages/WaveAnalyzer'

import './App.css'

const App = () => {
  const [maximized, setMaximized] = useState(false)

  return (
    <Router basename="/">
      <div className="app">
        <nav>
          <span className="title">Mule's Tools</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wave-analyzer">Wave Analyzer</Link></li>
          </ul>
        </nav>

        <main className={maximized ? '' : 'sheet'}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/wave-analyzer">
              <WaveAnalyzer />
            </Route>
          </Switch>
        </main>

        <img
          className="maximize-button"
          src={`icons/${maximized ? 'restore' : 'maximize'}.svg`}
          alt={maximized ? 'Restore' : 'Maximize'}
          onClick={() => setMaximized(!maximized)}
        />
      </div>
    </Router>
  )
}

export default App

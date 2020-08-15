import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'
import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Involved from "./components/Involved"

function App () {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/involved">
              <Involved />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/*">
                404 Page not found
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
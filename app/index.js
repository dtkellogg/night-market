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
import Footer from "./components/Footer"
import logo from '../img/svg/logo.svg'
import logoMain from '../img/svg/logo__main.svg'
import group from '../img/svg/group.svg'
import logoMain from '../img/svg/partner__dickeys.svg'
import logoMain from '../img/svg/partner__chickpeas.svg'
import logoMain from '../img/svg/partner__coop.svg'
import logoMain from '../img/svg/partner__barista.svg'
import logoMain from '../img/svg/partner__upperCrust.svg'

function App () {
    return (
      <Router>
        <div className="container__main">

         <img src={logo} className='logo' alt='logo' />
         <img src={logoMain} className='logo' alt='logo' />

          <Nav />
          <div className="container__body">
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
          <Footer />
          </div>
        </div>
      </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import Header from './components/Header'
import Footer from './components/Footer'

import styles from './app.css'

export default () => (
  <Router>
    <div>
      <Header />
      <div className="main-container">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
)

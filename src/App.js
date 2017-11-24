import React from 'react'
import { getSiteProps, Head, Router } from 'react-static'
import Routes from 'react-static-routes'
import Header from './components/Header'
import Footer from './components/Footer'

import styles from './app.css'

export default getSiteProps(({ title, metaDescription }) => (
  <Router>
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <div className="main-container">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
))

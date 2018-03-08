import React from 'react'
import { Head, Router, Link, withSiteData } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Header from './components/Header'

import './app.css'
import './static/fonts/bebasneue_bold-webfont.woff'

const App = withSiteData(({ title, metaDescription }) => (
  <Router>
    <div className="full-height">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.min.css" />
      </Head>
      <Header />
      <Link className="vertical-text d-sm-block" to="/">who am i</Link>
      <Link className="vertical-text-right d-sm-block" to="/oss">what i do</Link>
      <div className="main-container container">
        <Routes />
      </div>
    </div>
  </Router>
))

export default hot(module)(App)

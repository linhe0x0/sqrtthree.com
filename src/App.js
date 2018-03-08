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
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64863915-3"></script>
        <script type="text/javascript">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-64863915-3');
        `}</script>
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

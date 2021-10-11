import React, { Suspense } from 'react'
import { Head, Root, Routes, useSiteData } from 'react-static'
import { Link, Router } from '@reach/router'

import Header from './components/Header'

import './app.css'
import './static/fonts/bebasneue_bold-webfont.woff'

function App() {
  const { title, metaDescription } = useSiteData()

  return (
    <Root>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="stylesheet"
          href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.min.css"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-64863915-3"
        ></script>
        <script type="text/javascript">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-64863915-3');
          `}</script>
      </Head>
      <Header />
      <Link className="vertical-text d-sm-block" to="/">
        who am i
      </Link>
      <Link className="vertical-text-right d-sm-block" to="/oss">
        what i do
      </Link>
      <div className="main-container container full-height">
        <div className="main">
          <Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </Suspense>
        </div>
      </div>
    </Root>
  )
}

export default App

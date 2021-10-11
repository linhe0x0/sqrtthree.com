import React from 'react'
import { Link } from '@reach/router'

import './index.css'

export default () => (
  <div className="row home-container">
    <div className="col-md-6">
      <div className="intro">
        <h3 className="intro__title">
          HELLO,
          <br />
          I'M AN INDEPENDENT
          <br />
          WEB DEVELOPER
        </h3>
        <span className="divider"></span>
        <p className="intro__work">
          Solo-founder of <a href="">Jianying, Inc.</a>
        </p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="info">
        <h3 className="info__title">Who am i?</h3>
        <p className="info__desc">
          I'm a software engineering consultant specialized in TypeScript,
          Node.js, GraphQL, Web Perf, Go and Cloud technologies. I’ve been
          working with coding since 2014, creating valuable, free and
          easy-to-use{' '}
          <Link className="info__link" to="/oss">
            software
          </Link>
          . Located in ZhengZhou, China.
        </p>
        <p className="info__desc">
          If you want to say “hello”, just let me know and{' '}
          <a className="info__link" href="mailto:sqrtthree@foxmail.com">
            get in touch
          </a>
          .
        </p>
        <Link className="oss__link d-sm-none" to="/oss">
          what i do
        </Link>
      </div>
    </div>
  </div>
)

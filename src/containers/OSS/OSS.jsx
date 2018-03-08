import React from 'react'
import { withRouteData } from 'react-static'

import "./OSS.css"

export default withRouteData(({ projects }) => (
  <div className="row">
    {
      projects.map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.name}>
          <a className="project__card" href={item.url} target="_blank">
            <h2 className="project__title">{item.name}</h2>
            <p className="project__desc">{item.desc}</p>
          </a>
        </div>
      ))
    }
  </div>
))

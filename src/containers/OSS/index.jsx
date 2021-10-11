import React from 'react'
import { withRouteData } from 'react-static'

import Icon from '../../components/Icon'

import './index.css'

export default withRouteData(({ projects }) => (
  <div className="oss__container">
    <div className="row">
      {projects.map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.name}>
          <a
            className="project__card"
            href={item.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="project__title">{item.name}</h2>
            <p className="project__desc">{item.description}</p>
            <div className="project__metadata">
              <div className="project__stars">
                <Icon type="star" />
                <span>{item.stargazers_count}</span>
              </div>
              <div className="project__pushed-at">
                <span>{new Date(item.pushed_at).toLocaleDateString()}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
))

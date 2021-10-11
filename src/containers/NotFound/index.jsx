import React from 'react'

import errorImage from '../../static/404.svg'
import './index.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={errorImage} alt="404" />
    </div>
  )
}

import React from 'react'
import { Link } from 'react-static'
import styles from './NotFound.css'

import errorImage from '../../static/404.svg'

export default () => (
  <div className="not-found">
    <img src={errorImage} alt="404"/>
  </div>
)

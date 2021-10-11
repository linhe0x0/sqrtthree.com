import React from 'react'
import { Link } from '@reach/router'

import Icon from '../Icon'
import './index.css'

export default function Header() {
  return (
    <header className="headerbar">
      <div className="headerbar__avatar d-sm-none">
        <img
          src="https://avatars1.githubusercontent.com/u/8622362?s=112"
          alt=""
        />
      </div>
      <Link className="headerbar__name" to="/">
        根号三
      </Link>
      <nav className="headerbar__nav">
        <a
          className="headerbar__nav-item"
          href="https://dribbble.com/sqrtthree"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="dribbble" />
        </a>
        <a
          className="headerbar__nav-item"
          href="https://www.instagram.com/sqrtthree"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="instagram" />
        </a>
        <a
          className="headerbar__nav-item"
          href="https://github.com/sqrthree"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="github" />
        </a>
        <a
          className="headerbar__nav-item"
          href="https://twitter.com/sqrtthree"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="twitter" />
        </a>
        <a className="headerbar__nav-item" href="511249910">
          <Icon type="wechat" />
        </a>
        <a className="headerbar__nav-item" href="https://blog.sqrtthree.com">
          <Icon type="blog" />
        </a>
        <a className="headerbar__nav-item" href="mailto:sqrtthree@foxmail.com">
          <Icon type="mail" />
        </a>
      </nav>
    </header>
  )
}

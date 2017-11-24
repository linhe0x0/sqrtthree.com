import React from 'react'
import { Link, withRouter } from 'react-static'
import styles from './Header.css'

import logo from '../../static/logo.svg'

const Header = ({ location }) => {
  const isAboutPage = location.pathname === '/about'

  return (
    <header className="headerbar container">
      <div className="header">
        <div className="logo__box">
          <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        </div>
        <nav className="nav">
          <Link className="nav__item" to="/about">About</Link>
          <a className="nav__item" href="http://blog.sqrtthree.com/" target="_blank">Blog</a>
        </nav>
      </div>
      <div className="meta">
        <h3 className="meta__name">根号三</h3>
        <p className="meta__description">Independent Developer</p>
        {
          isAboutPage ? '' : (<p className="meta__description">I firmly believe that we can change the world by creating valuable, free and easy-to-use software.</p>)
        }
      </div>
    </header>
  )
}

export default withRouter(Header)

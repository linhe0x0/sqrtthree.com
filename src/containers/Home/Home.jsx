import React from 'react'
import { Link } from 'react-static'
import styles from './Home.css'
import logo from '../../static/logo.svg'
import comeon from '../../static/comeon.svg'
import book from '../../static/book.svg'

export default () => (
  <div className="container-fluid">
    <div className="project__box">
      <div className="project__item">
        <a href="https://github.com/sqrthree/comeon" target="_blank">
          <div className="project__thumbnail"><img src={comeon} /></div>
          <div className="project__info">
            <h3 className="project__name">comeon</h3>
            <p className="project__description">Simple, usefully tool to open documents with the fastest way.</p>
          </div>
          <div className="project__more">
            <p className="project__url">sqrthree/comeon</p>
          </div>
        </a>
      </div>
      <div className="project__item">
        <a href="https://github.com/sqrthree/codewars" target="_blank">
          <div className="project__thumbnail"><img src={book} /></div>
          <div className="project__info">
            <h3 className="project__name">Codewars</h3>
            <p className="project__description">My code wars.</p>
          </div>
          <div className="project__more">
            <p className="project__url">github.com</p>
          </div>
        </a>
      </div>
      <div className="project__item">
        <a href="http://codesign.me/" target="_blank">
          <div className="project__thumbnail"><img src={logo} /></div>
          <div className="project__info">
            <h3 className="project__name">简影</h3>
            <p className="project__description">Build your resume online with a lot of beautiful templates.</p>
          </div>
          <div className="project__more">
            <p className="project__url">codesign.me</p>
          </div>
        </a>
      </div>
      <div className="project__item">
        <a href="javascript:;">
          <div className="project__thumbnail"><img src={book} /></div>
          <div className="project__info">
            <h3 className="project__name">Node.js notebook</h3>
            <p className="project__description">Learn nodejs from getting start to give up.</p>
          </div>
          <div className="project__more">
            <p className="project__url">github.com</p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

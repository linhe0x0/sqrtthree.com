import React from 'react'
import styles from './Footer.css'

export default () => (
  <footer>
    <ul className="footer__list">
      <li className="footer__title">Code</li>
      <li><a href="//github.com/sqrthree" target="_blank">GitHub</a></li>
      <li><a href="http://blog.sqrtthree.com/" target="_blank">Blog</a></li>
    </ul>
    <ul className="footer__list">
      <li className="footer__title">Photos</li>
      <li><a href="//www.instagram.com/sqrtthree/" target="_blank">Instagram</a></li>
    </ul>
    <ul className="footer__list">
      <li className="footer__title">Contact</li>
      <li><a href="//twitter.com/sqrtthree" target="_blank">Twitter</a></li>
      <li><a href="//weibo.com/sqrtthree" target="_blank">Weibo</a></li>
      <li><a href="mailto:sqrtthree@foxmail.com">sqrtthree@foxmail.com</a></li>
    </ul>
  </footer>
)

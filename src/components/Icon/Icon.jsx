import React from 'react'

import styles from './Icon.css'

import github from '../../static/icons/github.svg'
import dribbble from '../../static/icons/dribbble.svg'
import instagram from '../../static/icons/instagram.svg'
import twitter from '../../static/icons/twitter.svg'
import wechat from '../../static/icons/wechat.svg'
import mail from '../../static/icons/mail.svg'

const iconList = {
  github,
  dribbble,
  instagram,
  twitter,
  wechat,
  mail,
}

export default ({ type }) => {
  const icon = iconList[type]

  if (!icon) return null

  return (
    <img className={`icon icon-${type}`} src={icon} alt={type}/>
  )
}

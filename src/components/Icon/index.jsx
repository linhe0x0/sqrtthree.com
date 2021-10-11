import React from 'react'

import github from '../../static/icons/github.svg'
import dribbble from '../../static/icons/dribbble.svg'
import instagram from '../../static/icons/instagram.svg'
import twitter from '../../static/icons/twitter.svg'
import wechat from '../../static/icons/wechat.svg'
import mail from '../../static/icons/mail.svg'
import blog from '../../static/icons/blog.svg'
import star from '../../static/icons/star.svg'

import './index.css'

const iconList = {
  github,
  dribbble,
  instagram,
  twitter,
  wechat,
  mail,
  blog,
  star,
}

export default function Icon(props) {
  const { type } = props
  const icon = iconList[type]

  if (!icon) return null

  return <img className={`icon icon-${type}`} src={icon} alt={type} />
}

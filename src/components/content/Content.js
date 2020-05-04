import React from 'react'

import contentStyles from './content.module.scss'
const Content = ({ title, description, buttonName }) => {
  return (
    <div>
      <h1 className={contentStyles.header}>{title}</h1>
      <p className={contentStyles.para}>{description}</p>
      {buttonName}
    </div>
  )
}

export default Content

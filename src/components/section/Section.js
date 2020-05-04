import React from 'react'
import sectionStyle from './section.module.scss'

const Section = props => {
  return (
    <div className={sectionStyle.container}>
      <div className={sectionStyle.header}>
        <p className={sectionStyle.title}> {props.title} </p>
        <p className={sectionStyle.description}>{props.description} </p>
      </div>
      <div className={sectionStyle.children}>{props.children}</div>
    </div>
  )
}

export default Section

import React from 'react'
import newsLetterStyles from './newsletter.module.scss'

const NewsLetter = ({ title, description }) => {
  return (
    <div className={newsLetterStyles.newsDiv}>
      <h1 className={newsLetterStyles.title}>{title}</h1>
      <p className={newsLetterStyles.para}>{description}</p>
      <input
        type="email"
        placeholder="Your-Email"
        className={newsLetterStyles.emailInput}
      />
      <br />
      <button type="submit" className={newsLetterStyles.submitButton}>
        Subscribe
      </button>
    </div>
  )
}
export default NewsLetter

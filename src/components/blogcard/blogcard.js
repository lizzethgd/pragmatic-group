import React from 'react'
import './blogcard.scss'

const BlogCard = props => {
  const { cardImage, cardTitle, cardDate, cardText } = props
  return (
    <div className="content" key="1">
      <img src={cardImage} className="thumbnail-img" alt={cardTitle} />
      <div className="post-item">
        <p className="post-title">
          {cardTitle}
          <small> &bull; {cardDate}</small>{' '}
        </p>
        <p className="post-text">{cardText}</p>
        <button className="post-button">Read More → </button>
      </div>
    </div>
  )
}

export default BlogCard

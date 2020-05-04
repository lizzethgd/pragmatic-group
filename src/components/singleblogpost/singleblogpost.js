import React from 'react';
import './singleblogpost.scss'

const SingleBlogPost = props => {
  const { blogTitle, blogSubtitle, blogContent} = props
  return (
    <div className='blog_content' >
      <h2>{blogTitle}</h2>
      <h6>{blogSubtitle}</h6>
      <div className='blog_richtextcontent'>{blogContent}</div>
    </div>
  )

}

export default SingleBlogPost

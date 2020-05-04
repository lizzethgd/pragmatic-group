import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout/layout"
import SingleBlogPost from '../components/singleblogpost/singleblogpost'
//import './singleblogpost.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} className='blog_img'/>
      }
    }
  }
  const texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam.'

  return (
    <Layout>
      <SingleBlogPost  blogTitle={props.data.contentfulBlogPost.title} blogSubtitle={props.data.contentfulBlogPost.subtitle} 
    blogContent={documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}/>

    </Layout>
  )
}

export default Blog

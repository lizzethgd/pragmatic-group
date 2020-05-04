import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../components/blogcard/blogcard'
import Layout from '../components/layout/layout'
import imagePlaceHolder from '../images/img-placeholder.png'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        image {
                            fluid(maxWidth: 1000) {
                              src
                            }
                        }
                    }
                }
            }
        }
    `)

    const texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Faucibus interdum posuere lorem ipsum dolor. Magna etiam tempor orci eu...'
    return (
        <Layout>
            <h1>Blog</h1>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                            <Link className='link_active' to={`/blog/${edge.node.slug}`} key={edge.node.slug}>
                            <BlogCard cardTitle={edge.node.title} cardDate={edge.node.publishedDate} cardText={texto} 
                            cardImage={edge.node.image.fluid!=null ? edge.node.image.fluid.src : imagePlaceHolder}/>
                            </Link>
                    )
                })}
        </Layout>
    )
}

export default BlogPage
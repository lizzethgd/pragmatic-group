import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import ContactCard from '../components/contactcard/contactcard'

const Contact = props => {
  return (
    <Layout>
      <ContactCard />
    </Layout>
  )
}

Contact.propTypes = {}

export default Contact

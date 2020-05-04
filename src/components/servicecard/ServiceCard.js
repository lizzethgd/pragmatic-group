import React from 'react'
import serviceStyles from './servicecard.module.scss'
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={serviceStyles.serviceContent}>
      <img className={serviceStyles.serviceImg} src={icon} alt="icon" />
      <h1 className={serviceStyles.serviceHeading}>{title}</h1>
      <p className={serviceStyles.servicePara}>{description}</p>
    </div>
  )
}

export default ServiceCard

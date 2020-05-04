import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import footerStyle from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={footerStyle.footerBox}>
        <p className={footerStyle.footerText}>
          © Pragmatic Intelligence Consulting {new Date().getFullYear()}
        </p>

        <div className={footerStyle.socialIcons}>
          <ul>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer

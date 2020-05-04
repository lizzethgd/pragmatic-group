import React from 'react'
import headerStyles from './header.module.scss'
const Header = ({ imageURL, children }) => {
  return imageURL ? (
    <div
      style={{
        backgroundImage: `url(${imageURL})`,
        height: '28rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  ) : (
    <div className={headerStyles.bgColor}>{children}</div>
  )
}

export default Header

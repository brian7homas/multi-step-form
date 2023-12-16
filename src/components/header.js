import * as React from "react"
import { Link } from "gatsby"
import GatsbyLogo from '../images/gatsby-icon.png'
import '../media-queries/header.css'
const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      margin: `0 auto`,
      padding: `28px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    
    <img
      className="header-logo"
      alt="Gatsby logo"
      height={20}
      src={GatsbyLogo}
    />
    <Link
      className="header-link"
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header

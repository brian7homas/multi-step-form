import * as React from "react"
import { Link } from "gatsby"
import GatsbyLogo from '../images/gatsby-icon.png'
const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    
    <img
      alt="Gatsby logo"
      height={20}
      src={GatsbyLogo}
    />
    <Link
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

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"
import "../media-queries/medias.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div 
      className="media-container"
      style={{ 
                background: `var(--color-ala)`,
                overflowX: 'hidden',
                position: `relative`,
                }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        className="main-container"
        style={{
          margin: `.3em auto`,
          padding: `0`,
          
        }}
      >
        <main
          style={{
            paddingBottom: `2.5rem` 
          }}
        >{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            position: `absolute`,
            bottom: 0,
            width: `100%`,
            height: `2.5rem`
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

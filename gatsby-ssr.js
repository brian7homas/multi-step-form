import * as React from "react"
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Ubuntu-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntu-bold"
    />,
    <link
      rel="preload"
      href="/fonts/Ubuntu-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntu-medium"
    />,
    <link
      rel="preload"
      href="/fonts/Ubuntu-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntu-regular"
    />,
  ])
}
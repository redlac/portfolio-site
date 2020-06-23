import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (

    to.startsWith('/') ? 

    <Link
    cover bg="#FF8A00"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
    >
      {children}
    </Link>

    : <a cover bg="#FF8A00"
      className="nav-link"
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
      href="https://flamboyant-cray-f7bbf5.netlify.app/">
      {children}
      </a>

  )
}

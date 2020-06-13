import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Calder Trombley</title>
      </Helmet>
      <div className="row">
        {projectList.map(({ node }, index) => {
          console.log(index);
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              cardSubtitle2={node.subtitle2}
              link={node.link}
              screenshot={index === 0 ? p1 : (index === 1 ? p2 : null) }
              key={node.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          subtitle2
          link
          id
        }
      }
    }
  }
`

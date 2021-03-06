import React from "react"
import portrait from "../images/cartoon1576343341291.jpg"

import {
  FaLinkedin as LinkedIn,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <img src={portrait} alt="portrait" width="200"/>
        <span id="heading-span" style = {{color : "white"}}>Hi, I'm </span>
        Calder.
      </div>
      <div className="h1 code mt-4 mb-3">software developer{"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
          I'm always looking for new opportunities to solve problems for your business.
          <br/>
          My specialty is working with JavaScript with React and Node.js, as well as Java with Spring Boot. 
          <br/>
          Please contact <a href="mailto:caldertrombley@gmail.com"><u>Contact Me</u></a> if you need any help!
        <br /> 
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://github.com/redlac">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/caldertrombley/">
          <LinkedIn/>
        </a>
        <a className="mr-5 icon" href="mailto:caldertrombley@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}

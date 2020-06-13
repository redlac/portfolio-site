import React from "react"
import "../style.css" 

function card(props) {
  const { cardTitle, cardSubtitle, cardSubtitle2, screenshot, link } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <img className="card-image" src={screenshot} alt=""/>
          <br/>
          <br/>
          <p className="card-text">{cardSubtitle}</p>
          <p className="card-text">{cardSubtitle2}</p>
          <a href={link} className="card-link">
            {screenshot === null ? "See Code" : "See Demo"}
          </a>
        </div>
      </div>
    </div>
  )
}

export default card

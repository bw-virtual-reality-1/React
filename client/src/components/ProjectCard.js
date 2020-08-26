import React from 'react'
import {Link} from 'react-router-dom'

import "../styles/card.css"


export default function Card({projects}){
    console.log(projects)

    return (
            <div className="parent">
            <div className="card-wrapper">
                <h3 id="name">{projects.firstName}{projects.lastName} </h3>
                <hr/>
                <h4>{projects.title}</h4>
              
                <p id="description-p"> {projects.description}
                    </p>

               <Link to='/payment'> <button id="donate-btn">Donate</button> </Link>
            </div>
            </div>
        
    )
}
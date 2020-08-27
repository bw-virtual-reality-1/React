import React from 'react'
import {Link} from 'react-router-dom'

import "../styles/card.css"


export default function Card({projects}){
    console.log(projects)

    return (
            <div className="parent">
            <div className="card-wrapper">
                <h3 id="name">{projects.title} </h3>
                <hr/>
                <p>{projects.description}</p>
              

               <Link to='/payment'> <button id="donate-btn">Donate</button> </Link>
            </div>

          
            </div>
        
    )
}
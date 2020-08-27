import React from 'react'
import {Link} from 'react-router-dom'

import "../styles/card.css"


export default function Card({projects}){
    
    console.log(projects)

    return (
            <div className="parent">
            <div className="card-wrapper">
                <h3>{projects.title} </h3>
                <hr/>
                <p>{projects.description} </p>
              
                <p>{projects.description}
                    </p>

                <button id="donate-btn"><Link to='/payment'>Donate</Link></button> 
            </div>

          
            </div>
        
    )
}
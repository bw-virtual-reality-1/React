import React from 'react'
import {Link} from 'react-router-dom'

import "../styles/card.css"


export default function Card({projects}){
    console.log(projects)

    return (
            <div className="parent">
            <div className="card-wrapper">
                <h3 id="name">{projects.first_name} </h3>
                <hr/>
              
                <p id="description-p"> Learning curve business model canvas incubator
                     creative value proposition entrepreneur A/B testing startup marketing termsheet. Twitter leverage stealth success network effects pivot virality
                    </p>

               <Link to='/payment'> <button id="donate-btn">Donate</button> </Link>
            </div>
            </div>
        
    )
}
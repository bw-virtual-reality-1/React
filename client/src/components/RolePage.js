import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/role.css'



 export default function Role() {
    return(
        <div className="role-wrap"> 
           <Link to='/dashboard'>
           <button className="main-btn">Funder</button>
               </Link> 
               <Link to='/add-project'>
               <button className="main-btn">Fundraiser</button>

                   </Link>
            
        </div>
    )
}


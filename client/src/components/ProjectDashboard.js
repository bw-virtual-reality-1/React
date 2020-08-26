import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'

function Dashboard(){
    const [projects, setProjects] = useState([])
  fetch("https://virtual-reality-fundraiser.herokuapp.com/api/auth/funder",{
      method: 'GET',
      headers:{
          "Content-Type": 'application/json'
      },
  body: JSON.stringify({
      projects
  })
  .then(res => {
      return res.json()
  }}
.then(data => console.log(data))
.catch(err => console.log(err))
  )

return(
    <div>
    
    <div>
      
        <Container>
            <Row>
        {/*
         projects.map(item =>(
            <Col xs="3">
           <Link key={item.id} to={`/dashboard/${item.id}`} >
               <ProjectCard projects={item}/>
           </Link>
         </Col>
            ))
         */}
        </Row>
        </Container>
    </div>
    </div>
)
}
 export default Dashboard
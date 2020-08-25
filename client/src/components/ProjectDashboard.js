import React from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'

function Dashboard({projects}){
return(
    <div>
    
    <div>
      
        <Container>
            <Row>
        {
         projects.map(item =>(
            <Col xs="3">
           <Link key={item.id} to={`/dashboard/${item.id}`} >
               <ProjectCard projects={item}/>
           </Link>
         </Col>
            ))
        }
        </Row>
        </Container>
    </div>
    </div>
)
}
 export default Dashboard
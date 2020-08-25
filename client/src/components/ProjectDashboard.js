import React from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";


function Dashboard({projects}){
return(
    <div>
          <h1> Projects</h1>
    <div>
      
        <Container>
            <Row>
        {
         projects.map(item =>(
            <Col>
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
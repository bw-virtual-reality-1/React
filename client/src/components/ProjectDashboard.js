import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import {Link, useHistory} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'
import axiosWithAuth from '../utils/axiosWithAuth';

function Dashboard(){
    const [projects, setProjects] = useState([])
    const location = useHistory()


 function getProjects() { 
 axiosWithAuth()
.get("https://virtual-reality-fundraiser.herokuapp.com/api/projects")
.then(res =>{ 
    console.log(res) 
    setProjects(res.data.info)
})
.catch(err=> console.log(err))
 }

useEffect(()=>{
    getProjects()
}, [location])


return(
    <div>
    
    <div>
      
        <Container>
            <Row>
        {
         projects.map(item =>(
            <Col >
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
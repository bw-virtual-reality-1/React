import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import {Link, useHistory} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'
import  axiosWithAuth  from '../utils/axiosWithAuth';

function Dashboard(){
    const [projects, setProjectList] = useState([]);
    const {location} = useHistory();
    const [user, setUser] = useState({ loggedin: false });
  
    const getProjectList = () => {
      axiosWithAuth()
        .get("https://virtual-reality-fundraiser.herokuapp.com/api/projects")
        .then((res) => {
            console.log(res)
          setProjectList(res.data.info);
        }) 
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getProjectList();
    }, [location]);

    
return(
    <div>
    
    <div>
      <Link to='/add-project'>Add Project</Link>
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
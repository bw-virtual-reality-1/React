import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'


import Role from './components/RolePage'
import Dashboard from './components/ProjectDashboard'
import AddProject from './components/AddProject'
import Payment from './components/Payment'
import ProjectCard from './components/ProjectCard'

import {Route} from 'react-router-dom'


function App() {
const [projects, setProjectList] = useState([]);
  const {location} = useHistory()

  const getProjectList = () => {
    axios
      .get("https://reqres.in/api/users")
      .then(res => {
        
         setProjectList(res.data.data) 
    })
      .catch(err => console.log(err));
  };



  useEffect(() => {
    getProjectList();
  }, [location]);

  
  console.log(projects)
  return (
    <div >
<Route exact path='/main'>
  <Role/>
  </Route>
  <Route exact path='/dashboard'>
    <Dashboard projects={projects}/>
  </Route>
  <Route exact path='/add-project'>
    <AddProject/>
  </Route>
  <Route exact path ='/payment'>
    <Payment/>
  </Route>
  <Route exact path='/dashboard/:id'>
    <ProjectCard/>
  </Route>
    
    </div>
  );
}

export default App;


import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import ProjectCard from './ProjectCard'

function Project(){
    const [project, setProject] = useState(null);
    const params = useParams();
    const {push} = useHistory()

    const getProject= (id) =>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => setProject(res.data))
        .catch(err=> console.log(err))
    }

    useEffect(()=>{
        getProject(params.id);
    },[params.id])

    if(!project){
        return <h2>Loading</h2>
    }

    const onDelete = e => {
        e.preventDefault()
        axios
        .delete(`https://reqres.in/api/users/${params.id}`)
        .then(res =>{
            push('/dashboard')
            setProject(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            <ProjectCard projects = {project}/>

            <button onClick={()=> push(`/dashboard/${params.id}`)}> Update </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Project
import React , {useState} from 'react'
import axios from 'axios'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {Route, useHistory} from 'react-router-dom'
import '../styles/add.css'


library.add(faTrash)

const initFormValues = {
    title:'',
    description:'',
    id: Date.now()
}

 export default function AddProject(){
    const [addProject, setProject] = useState(initFormValues)
    const {push} = useHistory();

    
    const onChange = e => {
        e.persist();
        setProject({
            ...addProject,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit= e =>{
        e.preventDefault();
        axios 
        .post("https://reqres.in/api/users", addProject)
        .then(res => {
            console.log(res.data)
            setProject(res.data)
            push('/dashboard')
            
        })
        .catch(err => {
            console.log( err)
        })
    }

    return(
        <div id="parent">
        <div className="add-wrap">
            <h2>Add <br/>A Project</h2>
            <form onSubmit={onSubmit}>
            <label htmlFor="title">Project Title</label>
                <br/>
            <input
            type="text"
            name="title"
            value={addProject.title}
            onChange={onChange}
            /> <br/>
            <label htmlFor="description"> Description</label><br/>
            <input
            type='text'
            name="description"
            id="description"
            value={addProject.description}
            onChange={onChange}
            /> <br/>

            <button id="submit" type="submit">Add</button>

            </form>

        </div>
      
        </div>
    )
    
}





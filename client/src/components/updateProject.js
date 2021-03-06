import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'

const initValues={
    first_name:'',
    email:''
}

function Update(props){
    const [update, setupdate] = useState(initValues)

    const params = useParams();
    const {push} = useHistory();


    useEffect(()=>{
        axios
        .get(`https://virtual-reality-fundraiser.herokuapp.com/api/projects${params.id}`)
        .then(res =>{
            console.log(res)
            setupdate(res.data)
        })
        .catch(err =>{
            console.log("uh-oh spaghetti-oh", err)
            })
        
    },[])

    const  onChange = e =>{
        setupdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axios
        .put(`https://reqres.in/api/users${update.id}`, update)
        .then(res =>{
            console.log(res)
            setupdate(res.data)
            push('/dashboard')
        })
        .catch(err=>{
            console.log("This is the error", err)
        })
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                name="first_name"
                value={update.title}
                onChange={onChange}/> <br/>

                <label htmlFor="description">Description</label>
                <input 
                type='text'
                name="email"
                value={update.description}
                onChange={onChange}/> <br/>

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

 export default Update;

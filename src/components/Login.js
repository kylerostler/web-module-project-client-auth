import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'

const initFormValues = {
    username: '',
    password: ''
}


export default function Login(props) {

    const [values, setValues] = useState(initFormValues)
    let history = useHistory();

    const onChange = evt => {
        const { id, value } = evt.target
        setValues({ ...values, [id]: value })
    }

    const onSubmit = evt => {
        props.signIn(values)
    }


    return(
        <form id="loginForm" onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <input 
                value={values.username}
                onChange={onChange}
                placeholder="enter username"
                id="username"
            />
            <input 
                value={values.password}
                onChange={onChange}
                placeholder="enter password"
                id="password"
            />
            <button id="submit-info">Submit</button>
        </form>
    )
}
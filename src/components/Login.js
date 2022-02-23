import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initFormValues = {
    username: '',
    password: ''
}


export default function Login(props) {

    const { push } = useHistory();

    const [values, setValues] = useState(initFormValues)

    const onChange = evt => {
        const { id, value } = evt.target
        setValues({ ...values, [id]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        props.signIn(values)
        push('/friends')
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
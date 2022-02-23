import React, { useEffect } from "react"
import axiosWithAuth from "../axios"
import { useHistory } from "react-router-dom"

export default function Logout() {

    useEffect(() => {
        axiosWithAuth().post('http://localhost:9000/api/logout', {})
        .then(res => {
            localStorage.removeItem('token')
        })
        .catch(err => {
            debugger
        })
    }, [])

    return (<div></div>)
}
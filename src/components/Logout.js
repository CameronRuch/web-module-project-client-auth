import React, { useEffect } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";


const Logout = () => {
    const { push } = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('token')
        axiosWithAuth().post('/logout', {})
        .then(res => {
            localStorage.removeItem('token')
            push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(<div>;)</div>)
}

export default Logout;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
    const { push } = useHistory()
    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axiosWithAuth().post('/friends', form)
        .then(res => {
            push('./friends')
        })
        .catch(err => {
            console.log(err)
        })

    }

    console.log(form)
    return (
        <div>

            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name-container">Friend Name </label>
                <input onChange={handleChange} name="name" id="name"/>
                </div>

                <div>
                <label htmlFor="email-container">Friend Email </label>
                <input onChange={handleChange} name="email" type="email" id="email"/>
                </div>

                <button>SUBMIT</button>

            </form>

        </div>
    )
  
  }

export default AddFriend;
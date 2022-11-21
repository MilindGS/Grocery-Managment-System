import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from '../../components/customer/navbar';



export default function
    () {
    const navigate = useNavigate()
    toast.success('You are successfully logged out..')
    sessionStorage.clear()
    navigate('/home')

    return (
        <div>
            <Navbar />
        </div>
    )
}

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


export function Auth(){
    const token = localStorage.getItem('token')
    if(token){
        return <Outlet/>
    }
    else{
     return   <Navigate to='/login'/>
    }
}


export function AvoidSign(){
    const token = localStorage.getItem('token')
    if(token){
        return <Navigate to='/'/>
    }
    else{
      return  <Outlet/>
    }
}
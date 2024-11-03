import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [images,setImages] = useState([])
 const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios("https://project-login-1.onrender.com/users/getdata",{headers:{'Authorization':`bearer ${token}`}}).then(result=>{
      console.log(result.data);
      setImages(result.data)
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem('token')
      navigate('/login')
    })
  },[navigate])
  return (
    <div>
      {images.length >0 && 
      
      
      <div>
        {images.map(image=><div key={image._id}><img  height='200px'  style={{ margin: '20px 40px' }} src={image["image-url"]} alt={image.description}/></div>)}
        </div>}
    </div>
  )
}

export default Home
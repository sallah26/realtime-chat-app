import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    const handlClick = () => {
        navigate("/login")
    }
  return (
    <section className='flex items-center justify-center min-h-screen'>
      <p className='text-4xl'>Well come to This Blog posting website <br />This is Landing page</p>
      <button onClick={handlClick}>Get Started</button>
    </section>
  )
}

export default Landing

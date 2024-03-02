import React, { useState } from 'react'

const BuildProfile = () => {
    const [name, setName] = useState("");
    const [currentRole, setCurrentRole] = useState("");
    const [location, setLocation] = useState("");
    // const [, set] = useState("");
    // const [, set] = useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: name,
            currentRole: currentRole,
            location: location,
        }
        console.log(data);
    };

    const myData = {
        
    }
    
    return (
    
    <div>
        <form action="" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="name">Enter Your Name Here</label>
                <input value={name} onChange={((e) => {setName(e.target.value)})} type="text"/>
            </div>
            <div>
                <label htmlFor="currentrole">What is Your Current Role?</label>
                <input value={currentRole} onChange={((e) => {setCurrentRole(e.target.value)})} type="text"/>
            </div>
            <div>
                <label htmlFor="currentrole">Where Are You From?</label>
                <input value={location} onChange={((e) => {setLocation(e.target.value)})} type="text"/>
            </div>
            <button type='submit'>Build Portifolio</button>
        </form>
      
    </div>
  )
}

export default BuildProfile

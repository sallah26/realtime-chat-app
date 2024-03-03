import React, { useState } from 'react'
import { addDoc,collection } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const BuildProfile = () => {
    const [name, setName] = useState("");
    const [currentRole, setCurrentRole] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate(); 
    const createBasicProfile = async () =>{
        await addDoc(collection(db,"basicprofile"),{
            id: auth.currentUser.uid,
            name: name,
            currentRole: currentRole,
            location: location,
        }
        )
        alert("Data is sent to firebase go and check it!")
        localStorage.hasProfile = true;
        navigate("/")
    };

    return (
    <section className='flex min-w-full min-h-screen justify-center items-center'>
    <div>
        <p className='text-3xl'>Let us build your basic profile</p>
            <div>
                <label htmlFor="name">Enter Your Name Here</label>
                <input className='border-2 p-2' value={name} onChange={((e) => {setName(e.target.value)})} type="text"/>
            </div>
            <div>
                <label htmlFor="currentrole">What is Your Current Role?</label>
                <input className='border-2 p-2' value={currentRole} onChange={((e) => {setCurrentRole(e.target.value)})} type="text"/>
            </div>
            <div>
                <label htmlFor="currentrole">Where Are You From?</label>
                <input className='border-2 p-2' value={location} onChange={((e) => {setLocation(e.target.value)})} type="text"/>
            </div>
            {/* <div>
                <label htmlFor="img">Upload your profile picture</label>
                <input className='border-2 p-2' onChange={()=>{}} type="file"/>
            </div> */}
            <button type='' onClick={createBasicProfile} className='bg-green-400 text-white border-2 p-2 px-5'>Build Portifolio</button>      
    </div>
    </section>
  )
}

export default BuildProfile

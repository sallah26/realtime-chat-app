import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../config/firebase';

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [anythingElse, setAnythingElse] = useState("");

    const handleAddPost = async () =>{
        await addDoc(collection(db,"posts"),{
            id: auth.currentUser.uid,
            title: title,
            description: description,
            AdditionalInfo: anythingElse? anythingElse : null,
        }
        )
        alert("New Post added check it!")
        // localStorage.hasProfile = true;
        // navigate("/")
    };
  return (
    <div className="flex flex-col gap-3">
        <p>Add a new post</p>
        <div>
            <label htmlFor="title">write the title of your post here:</label>
            <input type="text" className='border-2 p-2' placeholder="title..." onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="title">write body/description of your post here:</label>
            <input type="text" className='border-2 p-2' placeholder="title..." onChange={(e) => {setDescription(e.target.value)}} />
        </div><div>
            <label htmlFor="title">Anything else?</label>
            <input type="text" className='border-2 p-2' placeholder="title..." onChange={(e) => {setAnythingElse(e.target.value)}} />
        </div>
        <button className='p-2 px-5 bg-green-500' onClick={handleAddPost}>Add post</button>
      
    </div>
  )
}

export default AddPost

import React, { useEffect, useState } from 'react'
import { getDocs,collection } from 'firebase/firestore'
import { db } from '../config/firebase'

const AllPosts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'posts')); // Replace with your collection name
          const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setData(newData);
        } catch (error) {
          console.error('Error reading data:', error.message);
        }
      };
  
      fetchData();
    }, []);
    // const [postList, setPostList] = useState([]);
    // const postCollectionRef = collection(db, 'posts')
    // useEffect(()=>{
    //     const getPosts = async () => {
    //         const data = await getDocs(postCollectionRef);
    //         setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     }
    //     getPosts();
    // })
  return (
    <div className='flex flex-col justify-center items-center'>
      <p>Here are all of the posts</p>
      {/* {postList} */}
      <ul className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8'>
        {data.map((post) => {
            <div id={post.id} className='border-2 rounded-xl p-4 m-4'>
                {/* <p className="text-4xl font-bold text-gray-900">{post.title}</p> */}
                {/* <p className=" font-bold text-gray-900">{post.description}</p> */}
                <p className=" font-bold text-gray-900">{JSON.stringify(post)}</p>{console.log(post[0])}
            </div>
        })}
      </ul>
    </div>
  )
}

export default AllPosts

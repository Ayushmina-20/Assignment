import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import UserDetails from "./UserDetails";
const Details=()=>{
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await fetch('https://www.breakingbadapi.com/api/characters');
             setLoading(false);
            setUsers(await response.json());
           
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    },[]);
   if(loading){
       <Loading/>
   }

    return (
        <>
        <UserDetails users={users}/>
        </>
    )

}
export default Details;
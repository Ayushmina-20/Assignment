
import React from 'react'
import { useState,useEffect } from 'react'


import Quotes from './Quotes'

const UserDetails = () => {

    const [id,setId] = useState("")
    const [user,setUser]= useState(null)
    useEffect(()=>{
        console.log('this ..')
        const urlParams = new URLSearchParams(window.location.search)
        for (const [key, value] of urlParams) {
            console.log(value,'ths is')
            setId(value)
        }
        getUser()
        console.log(id)
    },[])
    
    const getUser =async()=>{
        let res= await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        res = await res.json()
        console.log(res)
        setUser(res[0])
    }

    

    return (
        <div>
            {user===null?null:
            <>
             
            <div className="container w-100 mt-5">
                <div className="row-center w-100 ">

                    <div className=" col-md-6 col-6 col-md-offset-2 col-sm-12  mt-2 text-white text-center">
                        <div className="d-flex card flex-column p-2 align-items-center bg-dark">
                            <div className="image"> <img src={ user.img } className="rounded" width="155" /> </div>  
                            <div className="card-body">
                                <div className="col-md-12">NAME : {user.name}</div>
                                <div className="col-md-12">BIRTHDAY: {user.birthday}</div>
                                <div className="col-md-12">STATUS:{user.status}</div>
                                <div className="col-md-12">NICKNAME:{user.nickname}</div>
                                <div className="col-md-12">ACTOR: {user.portrayed}</div>
                                <div className="col-md-12">OCCUPATION:{user.occupation}</div>
                                <div className="col-md-12">Appearance:[{user.appearance}]</div>
                                <Quotes prop={user.name}/>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div> 
            </>             
            }
        </div>
            
        
    )
}

export default UserDetails
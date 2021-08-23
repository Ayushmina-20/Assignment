import React from 'react'
import { useHistory } from 'react-router-dom'
import Loading from './Loading'
import Quotes from './Quotes'
import Profile from './Profile'
const UserDetails = ({users}) => {
    const history=useHistory();

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Details</h2>
            <div className="container w-100 mt-5">
                <div className="row w-100 ">
                    {users.map((curElem) => {
                        return (
                            <>
                        <div className=" col-md-6 col-6 col-md-offset-2 col-sm-12  mt-2 text-white text-center" key={curElem.char_id}>
                        <div className="d-flex card flex-column p-2 align-items-center bg-dark">
                        <div className="image"> <img src={ curElem.img } className="rounded" width="155" /> </div>  
                        <div className="card-body">
                      <div className="col-md-12">NAME : {curElem.name}</div>
                      <div className="col-md-12">BIRTHDAY: {curElem.birthday}</div>
                      <div className="col-md-12">STATUS:{curElem.status}</div>
                      <div className="col-md-12">NICKNAME:{curElem.nickname}</div>
                      <div className="col-md-12">ACTOR: {curElem.portrayed}</div>
                      <div className="col-md-12">OCCUPATION:{
                          curElem.occupation.map((ele)=>{
                              return(
                                  <>
                                  {ele + " "}
                                  </>
                              )

                          })
                          }</div>
                       <div className="col-md-12">Appearance:[{
                          curElem.appearance.map((ele)=>{
                              return(
                                  <>
                                  {ele + " "}
                                  </>
                              )
                            })
                          }]</div>
                          
                         
                    
                        </div>
                        <button class="btn btn-primary"
                        onClick={() => history.push(`/Location?id=${curElem.char_id}`)}>More Details</button>
                        </div>
                       
                        </div>
                    </>
                        )
                })        
}
                    
                </div>
            </div>
        </div>
    )
}

export default UserDetails
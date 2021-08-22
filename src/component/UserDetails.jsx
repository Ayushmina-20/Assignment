import React from 'react'
import Quotes from './Quotes'

const UserDetails = ({users}) => {

    return (
        <div>
            <h2>Details</h2>
            <div className="container mt-5">
                <div className="row">
                    
                {

                        users.map((curElem) => {
                        
                            
                        return (
                            <>
                        <div className=" col-md-6 mt-2 card  pl-2" key={curElem.char_id}>
                      <div className="col-md-12"> {curElem.name}</div>
                      <div className="col-md-12"> {curElem.birthday}</div>
                      <div className="col-md-12"> {curElem.status}</div>
                      <div className="col-md-12"> {curElem.nickname}</div>
                      <div className="col-md-12"> {curElem.portrayed}</div>
                      <div className="col-md-12">{
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
                           
                      <Quotes prop={curElem.name}/>
                        
                       
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
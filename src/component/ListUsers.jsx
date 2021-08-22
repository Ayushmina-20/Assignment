import React from 'react'

import ReactPaginate from "react-paginate";
const ListUsers = ({users}) => {
    return (
        <div>
            <h2>List of Characters</h2>
            <div className="container-fluid mt-2">
                <div className="row">
                    
                {

                        users.map((curElem) => {
                        
                            
                        return (
                            <>
                        <div className="col-10 col-md-4 mt-5 " key={curElem.char_id}>
                      <span>{curElem.name}</span>
                      <div>{curElem.status}</div>
                      <div>{curElem.birthday}</div>
                      <div>{
                          curElem.occupation.map((ele)=>{
                              return(
                                  <div>{ele}</div>
                              )

                          })
                          }</div>
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

export default ListUsers
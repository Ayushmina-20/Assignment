import React,{useEffect,useState} from 'react'
import Loading from './Loading'
const Quotes=({prop})=>{
    const name=prop
    var Arr=name.split(" ")
    const fname=Arr[0]
    const lname=Arr[1]
  
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await fetch(`https://www.breakingbadapi.com/api/quote?author=${fname}+${lname}`);
             setLoading(false);
            setUsers(await response.json());
          // const data=await response.json();
           //console.log(data);
           
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
return(
    <>
  {
      users.map((ele)=>{
          return(
          <>
              <div key={ele.quote_id}></div>
              <div style={{fontFamily:'monospace'}}>
                  
              {'"'+ele.quote+'"'}
              </div>
         </> )
      })
  }

    </>
)
}
export default Quotes
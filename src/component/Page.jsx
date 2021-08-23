import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import ListUsers from "./ListUsers";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import './searchbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
const Page = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const[category,setCategory]=useState("Breaking+Bad");
    const[newusers,setNew]=useState([]);
    const handleCategory = (e) => {
      console.log(e);
      setCategory(e);
      console.log(category);
      getUsers(e);
      };
   
    const getUsers = async (categoryString) => {
      try {
    
          const response = await fetch(`https://www.breakingbadapi.com/api/characters?category=${categoryString}`);
          setLoading(false);
          setNew(await response.json());
          console.log(newusers);
          
         
      } catch (error) {
          setLoading(false);
          console.log("my error is "+ error);
      }
  }
   

    useEffect(() => {
     
      getUsers(category);
      
      },[]);
   if(loading){
       <Loading/>
   }

   const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = users.filter((v) => {
      return v.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
 
    return (
        <>
         <div className="row container">
         
                <div className="col-md-6">
                <DropdownButton
      alignRight
      title="Category"
      id="dropdown-menu-align-right"
      onSelect={handleCategory}
        >
              <Dropdown.Item eventKey="Better+Call+Saul">Better Call Saul</Dropdown.Item>
              <Dropdown.Item eventKey="Breaking+Bad">Breaking Bad</Dropdown.Item>
      </DropdownButton>
      </div>


                <div className="col-md-6">
                <div className="search">
      <div className="col-md-3 searchInputs">
        <input
          type="text"
          placeholder="Type the name"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="col-md-1 searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  </div>
              </div>
              <div className="row-center container mt-2" > 
              
              {filteredData.length === 0? <ListUsers users={newusers}/>:<ListUsers users={filteredData}/>}
               
       
        </div>
        </>
    )
}

export default Page

import { useState } from 'react';

import './App.css';
let userId = 0;



function App() {
  const [person,updatePerson] = useState({
    name:"Sajan Koirala",
    artwork:{
      title:"Cats",
      City:"Kathmandu",

    }
  })
  const [name,setName]  = useState('');
  const [artists,setArtists] = useState([]);
  const handleClickList = (e) => {
    setName(e.target.value)    
  }
  const handleClickAdd = (e) => {
    setName(e.target.value);
    artists.push({
      id:userId++,
      name:name
    })
  }




  

  
  return (
    

  
    <>
      <div className= "container mx-3 my-3">
      <h6 className = "m-3 p-1 ">Welcome to My  Basic Todo List :</h6>
      {/*  Here We Will Create the input Field Required */}
      <div>
        <label className = " m-3 p-1 my-3"> Write Things To Do </label>
        <br/>
        <input type = "name" value={name} onChange={handleClickList}/>
        <br/>
        <button className='btn btn-primary my-3' onClick={handleClickAdd}>Add</button>
        <br/>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>{artist.name} <button className='btn btn-danger mx-3 my-3' onClick={() =>setArtists(artists.filter(e => e.id !== artist.id))}>Delete</button></li>
          ))}
        </ul>
        
        
      </div>
     

        
      </div>
    </>
    
  );
}

export default App;

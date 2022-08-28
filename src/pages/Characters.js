import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Characters() {
  const [ peopleData, setPeopleData ] = useState([]);
  const [ characterList, setCharacterList ] = useState([]);
  
  useEffect(()=> {
    getPeopleData()
  }, [])

  const getPeopleData = async () =>{
    const data = await axios.get("https://swapi.dev/api/people/");
    setPeopleData(data.data);
  };

  console.log("data: ", peopleData)
  console.log("data: ", peopleData.results)
  console.log("data: ", peopleData.results.map((character)=>{return character.name}))

  return (
    <div className=''>
      <div className='text-zinc-100'>
        Characters
      </div>
      <div >
        {peopleData.results.map((character)=>{ 
          return(
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <p>{character.name}</p>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Characters
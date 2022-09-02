import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';

function Species() {
  const [ speciesData, setSpeciesData ] = useState();
  const [ speciesFromPlanetList, setSpeciesFromPlanetList ] = useState([]);
  const { selectedPlanet } = useContext(Context);

  useEffect(()=> {
    getSpeciesData();
  }, [])

  const getSpeciesData = async () =>{
    const data = await axios.get("https://swapi.dev/api/species/");
    setSpeciesData(data.data);
  };

  // Gets each species' homeworld and compares to the user selected homeworld. If there's a match, they are set to a useState array. 
  const getSpeciesFromPlanet = () => {
    const list = [];
    speciesData.results.map((being)=>{ 
      if(being.homeworld === selectedPlanet){ 
        list.push(being.name);
      } 
      if (list.length > 0){
        return setSpeciesFromPlanetList(list);
      } else{
        return setSpeciesFromPlanetList(["No matches - please select another character!"]);
      }
    })
  }

  useEffect(()=>{
    if(speciesData){
      getSpeciesFromPlanet()
    }
  },[speciesData])

  return (
    <div className="grid place-items-center w-full block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className='text-red-500'>Species</div>
      {speciesData ? <>
        {speciesFromPlanetList.map((x, i)=>{
          return( 
            <ul key={i}>
              <li >{x}</li>
            </ul>
            )
        })}
        </>
      : 
        "....Loading" 
      }
    </div>
  )
}

export default Species
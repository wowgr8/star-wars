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
    speciesData.results.map((being)=>{   // URL's will soon be replaced with: selectedPlanet.(Character list is limited to 10. This ensures conditional statement is functional - for dev purposes.)
      if(being.homeworld === "https://swapi.dev/api/planets/24/" || being.homeworld ===  "https://swapi.dev/api/planets/29/"){ 
        list.push(being.name);
        console.table(being.homeworld, being)
        return setSpeciesFromPlanetList(list);
      } 
    })
  }

  useEffect(()=>{
    if(speciesData){
      getSpeciesFromPlanet()
    }
  },[speciesData])

  return (
    <div className=" grid place-items-center block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
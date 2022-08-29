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
    speciesData.results.map((being)=>{   // will soon replaced with: selectedPlanet - for dev purposes. (Character list is limited to 10. This ensures conditional can properly be tested.)
      if(being.homeworld === "https://swapi.dev/api/planets/24e/" || being.homeworld ===  "https://swapi.dev/api/planets/29e/"){ 
        list.push(being.name);
        setSpeciesFromPlanetList(list);
      } else {
        setSpeciesFromPlanetList(["No matching species - Try another character!"]);
      }
    })
  }

  useEffect(()=>{
    if(speciesData){
      getSpeciesFromPlanet()
    }
  },[speciesData])

  return (
    <div class=" grid place-items-center block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className='text-red-500'>Species</div>
      {speciesData ? <>
        {speciesFromPlanetList.map((x)=>{
          return( 
            <ul>
              <li>{x}</li>
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
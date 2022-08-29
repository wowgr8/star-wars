import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';

function Species(props) {
  const { planetData } = props;
  const [ speciesData, setSpeciesData ] = useState();
  const [ speciesFromPlanetList, setSpeciesFromPlanetList ] = useState([]);
  const { selectedPlanet, setCurrentView } = useContext(Context);

  useEffect(()=> {
    getSpeciesData();
    // getSpeciesFromPlanet()
  }, [])

  const getSpeciesData = async () =>{
    const data = await axios.get("https://swapi.dev/api/species/");
    setSpeciesData(data.data);
  };
  console.log("data: ", speciesData)

  // Gets each species homeworld and compares to user selected homeworld. If there's a match, they are saved to an useState array. 
  const getSpeciesFromPlanet = () => {
    const list = [];
    speciesData.results.map((being)=>{
      console.log(being.homeworld)
      if(being.homeworld === "https://swapi.dev/api/planets/24/" || being.homeworld ===  "https://swapi.dev/api/planets/29/"){ // will soon be selectedPlanet
        console.log( being.name);
        list.push(being.name);
        console.log(list)
        setSpeciesFromPlanetList(list);
      }
    })
  }

  useEffect(()=>{
    if(speciesData){
      getSpeciesFromPlanet()
    }
  },[speciesData])

  return (
    <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className='text-red-500'>Species</div>
      {speciesData ? <>
        {speciesFromPlanetList.map((x)=>{return x + "  "})}
        </>
      : 
        "....Loading" 
      }
    </div>
  )
}

export default Species
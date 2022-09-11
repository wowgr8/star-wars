import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';

function Species() {
  const [ speciesData, setSpeciesData ] = useState();
  const [ speciesFromPlanetList, setSpeciesFromPlanetList ] = useState([]);
  const { selectedPlanet } = useContext(Context);

  const [ allSpecies, setAllSpecies ] = useState([]);
  const [ nextPage, setNextPage ] = useState();

  useEffect(()=> {
    getSpeciesData();
  }, [])

  const getSpeciesData = async () =>{
    const data = await axios.get("https://swapi.dev/api/species/");
    setNextPage(data.data.next); //page2
    setAllSpecies(data.data.results) // First 10 results.
    setSpeciesData(data.data); // object holding next and results(array of species)
  };

  const getNextSpeciesData = async () =>{
    console.log("All next pages after #1", nextPage)
    const data = await axios.get(nextPage);
    console.log("NEW DATA: ", data.data)
    setAllSpecies(allSpecies => allSpecies.concat(data.data.results)) // will need fixing. Perhaps set data.data.results to a variable and spread that puppy in.
    setNextPage(data.data.next) //pages 3+4
    setSpeciesData(data.data);
  };

  useEffect(()=>{
    if(speciesData){
      // console.log("NEXT PAGE IN USEEFFECT", nextPage)
      // console.log("SPECIES DATA", speciesData)
        if(allSpecies.length < 36){
          console.table("All Species in useEffect allSpecies < 36", allSpecies)
          getNextSpeciesData()
        } else {
          console.log("ELSE")
          getSpeciesFromPlanet()
        }
      //  getSpeciesFromPlanet()
    }
  },[speciesData])

    // Gets each species' homeworld and compares to the user selected homeworld. If there's a match, they are set to a useState array. 
    const getSpeciesFromPlanet = () => {
      const list = [];
      console.table(allSpecies)
      allSpecies.map((being)=>{ 
        if(being.homeworld === selectedPlanet){ 
          list.push(being.name);
        } 
        if (list.length > 0){
          return setSpeciesFromPlanetList(list);
        } else{
          return setSpeciesFromPlanetList(["No known Species on this home world - please select another character!"]);
        }
      })
    }

  return (
    <div className="grid place-items-center w-full block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className='text-red-500'>Species</div>
      {allSpecies.length >= 37 ? <>
        {speciesFromPlanetList.map((x, i)=>{
          return( 
            <ul key={i}>
              <li >{x}</li>
            </ul>
            )
        })}
        </>
      : 
        "....Searching all galaxies" 
      }
    </div>
  )
}

export default Species
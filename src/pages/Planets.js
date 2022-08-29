import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';
import Species from './Species';

function Planets() {
  const [ planetData, setPlanetData ] = useState();
  // const [ characterList, setCharacterList ] = useState([]);

  const { selectedPlanet, setCurrentView } = useContext(Context);
  
  useEffect(()=> {
    getPlanetData();
  }, [])

  const getPlanetData = async () =>{
    const data = await axios.get(`${selectedPlanet}`);
    setPlanetData(data.data);
  };
  // console.log("data: ", planetData)

  // // Gets called once peopledata is fetched. Sets characterList - used to return name in loop.
  // useEffect(()=> {
  //   if(planetData){
  //     console.log("planet data acquired!")
  //     console.log(planetData, planetData.name)
  //     console.log(planetData.name)

  //     // getCharacters()
  //   }
  // }, [planetData])

  // const getCharacters = () =>{
  //   setCharacterList(planetData.results);
  //   // console.log(characterList)
  // }

  // function with onclick handler. Gets character homeworld. Navigates to planet.js with that state. which is used in the getPlanet api call...
  // const handleOnCharacterSelect = (value) => {
  //   console.log(value);
  //   // loop through list of characters. Find match to the selected value by name. if match setplanet to character.homeworld.
  //   {characterList.map((character)=>{ 
  //     if (character.name === value){
  //       console.log(character.homeworld, " Line 60())()")
  //       // setSelectedPlanet(character.homeworld);
  //       setCurrentView(<Planets />)
  //     }
  //   })}
  // }

  // useEffect(()=> {
  //   if(selectedPlanet){
  //     console.log("PLANET SELECTED")
  //     console.log(selectedPlanet)

  //   }
  // }, [selectedPlanet])

  return (
    <div className='container mx-auto text-gray-50 pl-40'>
      <p>HomeWorld Details!</p>
        {planetData ? 
          <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{planetData.name}</h5>
            <table className="table-auto">
              <tbody className="font-normal text-gray-700 dark:text-gray-400">
                <tr>
                  <td>Population: </td>
                  <td>{planetData.population}</td>
                </tr>
                <tr>
                  <td>Residents: </td>
                  <td>{planetData.residents.length}</td>
                </tr>
                <tr>
                  <td>Terrain: </td>
                  <td>{planetData.terrain}</td>
                </tr>
                <tr>
                  <td>Climate: </td>
                  <td>{planetData.climate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        : 
          "....Loading" 
        }
    </div>
  )
}

export default Planets
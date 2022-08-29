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

    </div>
  )
}

export default Planets
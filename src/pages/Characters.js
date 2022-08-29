import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Characters() {
  const [ peopleData, setPeopleData ] = useState();
  const [ characterList, setCharacterList ] = useState([]);
  const [ selectedPlanet, setSelectedPlanet ] = useState();
  
  useEffect(()=> {
    getPeopleData()
  }, [])

  const getPeopleData = async () =>{
    const data = await axios.get("https://swapi.dev/api/people/");
    setPeopleData(data.data);
  };
  // console.log("data: ", peopleData)

  // Gets called once peopledata is fetched. Sets characterList - used to return name in loop.
  useEffect(()=> {
    if(peopleData){
      console.log("people data got!")
      getCharacters()
    }
  }, [peopleData])

  const getCharacters = () =>{
    setCharacterList(peopleData.results);
    // console.log(characterList)
  }

  // function with onclick handler. Gets character homeworld. Navigates to planet.js with that state. which is used in the getPlanet api call...
  const handleOnCharacterSelect = (value) => {
    console.log(value);
    // loop through list of characters. Find match to the selected value by name. if match setplanet to character.homeworld.
    {characterList.map((character)=>{ 
      if (character.name === value){
        console.log(character.homeworld, " Line 60())()")
        setSelectedPlanet(character.homeworld);
      }
    })}
  }

  // useEffect(()=> {
  //   if(selectedPlanet){
  //     console.log("PLANET SELECTED")
  //     console.log(selectedPlanet)

  //   }
  // }, [selectedPlanet])

  return (
    <div className='container mx-auto text-gray-50 pl-40'>
      <p>CHARACTERS!</p>
      <div className="relative inline-flex">
        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
        <select onChange={(e)=> handleOnCharacterSelect(e.target.value)} className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>Select a character</option>
          {characterList.map((character, i)=>{ 
            return(
              <option key={i}>{character.name}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default Characters



// PRE-dropdown styling:

    // <div className=''>
    //   <div className='text-zinc-100'>
    //     Characters
    //   </div>
    //   <div >
    //     {characterList.map((character)=>{ 
    //       return(
    //         // add div with onClick handler. Once it's clicked it should grab navigate to Planets.js and display the characters home planet details. 
    //         <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
    //           <li>
    //             <p>{character.name}</p>
    //           </li>
    //         </ul>
    //       )
    //     })}
    //   </div>
    // </div>
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';
import Planets from './Planets';

function Characters() {
  const [ peopleData, setPeopleData ] = useState();
  const [ characterList, setCharacterList ] = useState([]);
  const [ nextPage, setNextPage ] = useState();
  const [ listFull, setListFull ] = useState(false);

  const { setSelectedPlanet, setCurrentView, allCharactersList, setAllCharactersList } = useContext(Context);
  
  useEffect(()=> {
    getPeopleData()
  }, [])

  // Creates GET request for an object of people. Error handling by Axios.
  const getPeopleData = async () =>{
    const data = await axios.get("https://swapi.dev/api/people/");
    setNextPage(data.data.next);
    setCharacterList(data.data.results)
    setPeopleData(data.data);
  };

  const getNextPeopleData = async () =>{
    const data = await axios.get(nextPage);
    setNextPage(data.data.next);
    setCharacterList(characterList => characterList.concat(data.data.results))
  };


  // Add to useEffect ELSE statement. Else setListFull(true).
  useEffect(()=> {
    if(peopleData){
      console.log(nextPage)
      console.log(characterList)
      if(characterList.length < 82){
        console.log(characterList)
        getNextPeopleData();
      } else {
        console.log("DONE")
        setListFull(true);
      }
    }
  }, [characterList])

  // const getCharacters = () =>{
  //   setCharacterList(peopleData.results);
  // }

  // Gets character homeworld. Navigates to planet.js with homeworld in state - used in getPlanet() api call.
  const handleOnCharacterSelect = (value) => {
    {characterList.map((character)=>{ 
      if (character.name === value){
        setSelectedPlanet(character.homeworld);
        setCurrentView(<Planets />)
      }
    })}
  }

  return (
    <div className='grid place-items-center text-gray-50'>
      <p>CHARACTERS!</p>
      <div className="hover:text-sky-400" onClick={()=>getNextPeopleData()}>
        <button>
          {listFull ? <>All Characters Loaded</>  : <>Click here to Load More Characters</> }
        </button>
      </div>
      <div className="flex justify-center items-center relative inline-flex">
        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
        <select onChange={(e)=> handleOnCharacterSelect(e.target.value)} className=" flex justify-center items-center border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>Select a character</option>
          {/* {allCharacters > 100 ? show loop below OR show Option in line above. : "Loading first set of characters"} */}
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
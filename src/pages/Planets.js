import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../utils/Context';
import Species from './Species';

function Planets() {
  const [ planetData, setPlanetData ] = useState();
  const [ viewSpecies, setViewSpecies ] = useState(false);

  const { selectedPlanet } = useContext(Context);
  
  useEffect(()=> {
    getPlanetData();
  }, [])

  const getPlanetData = async () =>{
    try {
      const data = await axios.get(`${selectedPlanet}`);
      setPlanetData(data.data);
    } catch (err){
      console.error(err);
    } finally {}
  };

  const handleShowSpecies = () => {
    setViewSpecies(prev => !prev)
  }

  return (
    <div className='grid place-items-center text-gray-50'>
      <p>HomeWorld Details!</p>
        {planetData ? <>
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
                <tr>
                  <td>Species: </td>
                  <td onClick={handleShowSpecies}>Click to see species from this character's planet.</td>
                </tr>
              </tbody>
            </table>
          </div>  
          {viewSpecies ? <Species /> : null } </>
        : 
          "....Loading" 
        }
    </div>
  )
}

export default Planets
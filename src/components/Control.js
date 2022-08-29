import React, { useContext }from 'react';
import { Context } from '../utils/Context';

function Control() {
  const { currentView } = useContext(Context);

  return (
    <div className="container py-40 mx-auto border-4 border-solid border-yellow-300">
      <div >
        {currentView}
      </div>
    </div>
  )
}

export default Control
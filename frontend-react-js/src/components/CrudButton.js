import './CrudButton.css';
import React, { useState } from 'react'

const CrudButton = () => {
  const [ popped, setPopped ] = useState()

  //remove this line when its time to
  console.log(popped)
  
  const pop_activities_form = () => {
    setPopped(true);
  }

  return (
    <button onClick={pop_activities_form} className='post' href="/#">Crud</button>
  );
}

export default CrudButton
import React, { useState } from 'react';

function Count() {
  const [cars,setCar]=useState([]);
  const [carYear,setCarYear]=useState(new Date().getFullYear());
  const [carMake,setCarMake]=useState("");
  const [carModel,setCarModel]=useState("");
  
  function handleCarYear(event){
    setCarYear(event.target.value);
  }; 
  function handleCarMake(event){
    setCarMake(event.target.value);


  }; 
  function handleCarModel(event){
    setCarModel(event.target.value);


  }; 
   function handleAddItem(){
const newCar={ year:carYear,
  make:carMake,
  model:carModel,
  }
 setCar(c =>[...c,newCar]);

  }; 
  return (
   <>
   <h2>CAR LIST</h2>
   <ul>
    {
      cars.map((car,index) => <li key={index}>
        {car.year}  {car.make}  {car.model}
      </li>)
    }
   </ul>

   <input type="number" value={carYear} onChange={handleCarYear} placeholder="enter the year"/><br/>
   <input type="text" value={carMake} onChange={handleCarMake} placeholder="enter the make"/><br/>
   <input type="text" value={carModel} onChange={ handleCarModel} placeholder="enter the model"/><br/>
   <button onClick={handleAddItem}>ADD ITEM</button>

   </>
  );
}

export default Count;

import React , {useState} from 'react';
import './CSS/pro.css';

function ColourConverter(){
    const [color, setColor] = useState("#FFFFFF");
 function colorChanger(event){
setColor(event.target.value);
 };
 return(
    <div className="color-pickerr">
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
       <p>Selected color:{color}</p>
    </div>
    <lable>select a color</lable>
     <input type="color" onChange={colorChanger}/>
     
    </div>
 );
}
export default ColourConverter;
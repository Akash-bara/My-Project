import React,{useState,useEffect} from 'react';
import './CSS/pro3.css';
function Project3(){
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(    window.innerHeight
);
useEffect(()=>
{
     window.addEventListener("resize",handleResize);
     console.log("EVENT ADDED");
     return () => {
             window.removeEventListener("resize",handleResize);
                  console.log("EVENT REMOVE");


     }
       
},[width,height]);
    function handleResize(){
setWidth(window.innerWidth);
setHeight( window.innerHeight);
    }
    return(
        <>
        <h1>Project</h1>
        <p>Width Count:{width}px</p>
        <p>Height Count:{height}px</p>
        </>
    );
}
export default Project3;
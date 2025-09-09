import React,{useState,useEffect} from 'react';
import './CSS/pro2.css';
function Time(){
    const [time,setTime]=useState(new Date());
    useEffect (
        () => {
            const IntervalId=setInterval(() => {
                setTime(new Date());
            })
            return () => {
                clearInterval(IntervalId);
            }
        },[]
    );
    
    
    function formatTime()
    {
       let hours = time.getHours();
       const minutes = time.getMinutes();
       const seconds = time.getSeconds();
       const pmam= hours >= 12 ? 'pm':'am';
       hours=hours%12||12;
       return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${pmam}`
    }
    function padZero(num){
        return num < 10 ? `0${num}` : num;

    }


        return(
    <div className="clock_container">
        <div className="clock">
            <snap>{formatTime()}</snap>
        </div>
     </div>);
}
export default Time;

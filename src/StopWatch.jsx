import React, { useState, useEffect, useRef } from 'react';
import './CSS/pro4.css';

function StopWatch() {
    const [runTime, setRunTime] = useState(false);
    const [change, setChange] = useState(0);
    const intervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if (runTime) {
            StartTimeRef.current = Date.now() - change;
            intervalIdRef.current = setInterval(() => {
                setChange(Date.now() - StartTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [runTime]);

    function formatTime() {
        let hours = Math.floor(change / (1000 * 60 * 60));
        let minutes = Math.floor((change / (1000 * 60)) % 60);
        let seconds = Math.floor((change / 1000) % 60);
        let milliseconds = Math.floor((change % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    function start() {
        setRunTime(true);
    }

    function stop() {
        setRunTime(false);
    }

    function reset() {
        setChange(0);
        setRunTime(false);
    }

    return (
        <div className="stop_watch">
            <div className="display">{formatTime()}</div>
            <div className="button_controlers">
                <button className="start_time" onClick={start}>Start</button>
                <button onClick={stop} className="stop_time">Stop</button>
                <button onClick={reset} className="reset_time">Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;

import React, { useState, useEffect } from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && elapsedTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, elapsedTime]);
    
    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = Math.floor(time / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        return `${getMinutes} : ${getSeconds}`;
    }
    const startStopHandler = () => {
        setIsRunning(prevRunning => !prevRunning);
    }
    const resetHandler = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="time-display">Time: {formatTime(elapsedTime)}</div>
            <div className="buttons">
                <button onClick={startStopHandler}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={resetHandler} disabled={elapsedTime === 0 && !isRunning}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;
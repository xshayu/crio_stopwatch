import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    const startStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (timeInSeconds: number): string => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <div>Time</div>
            <div>{formatTime(time)}</div>
            <div>
                <button onClick={startStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
import { useEffect, useState } from "react";
import { INTERVAL_INCREMENT, INTERVAL_SPEED_IN_MS, MAX_VALUE, MIN_VALUE } from "../constants";

const ProgressBar = () => {
    const [bar, setBar] = useState(MIN_VALUE);

    useEffect(() => {
        const interval = setInterval(() => {
            setBar((prevBarValue) => {
                if (prevBarValue >= 100) {
                    clearInterval(interval);
                }
                return Math.min(prevBarValue + INTERVAL_INCREMENT, MAX_VALUE);
            })
        }, INTERVAL_SPEED_IN_MS);

        return () => {
            clearInterval(interval);
        }
    }, []);


    return (
        <div className="container">
            <div className="progress" style={{ transform: `translateX(${bar - 100}%)` }}></div>
        </div>
    )
}

export default ProgressBar;
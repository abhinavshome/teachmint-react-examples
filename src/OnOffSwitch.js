import { useState } from "react";
import "./OnOffSwitch.css";

const OnOffSwitch = () => {
    const [switchStatus, setSwitchStatus] = useState(false);
    return (
        <div>
            <button onClick={() => setSwitchStatus(true)}>ON</button>
            <button onClick={() => setSwitchStatus(false)}>OFF</button>
            <span className={switchStatus ? 'on' : 'off'}></span>
        </div>
    );
};

export default OnOffSwitch;
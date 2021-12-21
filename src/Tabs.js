import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(1);
    return (
        <div>
            {currentTab}
            <div className="tabs">
                <span 
                    onClick={() => setCurrentTab(1)} 
                    className={currentTab === 1 ? 'tab active' : 'tab'}
                >
                    Tab1
                </span>
                <span 
                    onClick={() => setCurrentTab(2)} 
                    className={currentTab === 2 ? 'tab active' : 'tab'}
                >
                    Tab2
                </span>
                <span 
                    onClick={() => setCurrentTab(3)} 
                    className={currentTab === 3 ? 'tab active' : 'tab'}
                >
                    Tab3
                </span>
            </div>
            <div>
                <div style={currentTab !== 1 ? {display: 'none'} : {}}>Tab1 contents</div>
                {currentTab ===2 && <div>Tab2 contents</div>}
                <div className={currentTab !== 3 ? 'hidden' : ''}>Tab3 contents</div>
            </div>
            
        </div>
    );
};

export default Tabs;
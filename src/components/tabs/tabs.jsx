import { useState } from "react"
import "./tabs.css"

function Tabs({tabs, onTabChange}) {

    const [activeTab, setActiveTab] = useState(0);

    function handleClick(index) {
        setActiveTab(index);
        if(onTabChange){
            onTabChange(index);
        }
    }
    return(
    <div className="tab-container">
        <div className="tab-header">
            {tabs.map((tab, index) =>(
                <button
                key={tab.label}
                className={
                    activeTab === index ? "tab-button active" : "tab-button"
                }
                onClick={() => handleClick(index)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
        <div className="tabs-content">
            {tabs[activeTab]?.content}
        </div>
    </div>
)

}


export default Tabs

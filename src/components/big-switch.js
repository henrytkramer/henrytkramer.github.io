import React from "react"
import * as bsStyles from "./bigswitch.module.sass"

const BigSwitch = ({options, activeIndex, setActiveIndex}) => (
    <div className={bsStyles.container}>
        {options.map( (option, index) => (
            <div 
                onClick={() => setActiveIndex(index)} 
                className={`${bsStyles.option} ${index==activeIndex ? bsStyles.active : ''}`}
            >
                {option}
            </div>
        ))}
    </div>
);

export default BigSwitch
import React from "react"
import * as paragraphStyles from "./paragraph.module.sass"

const Paragraph = ({children, ...rest}) => {
    if (children.length) return (
        <>
            {children.map( (child, index) => (
                <p data-sal="slide-up" className={`${paragraphStyles.paragraph} ${index % 2 == 0  ? paragraphStyles.leftCol : paragraphStyles.rightCol}`}>
                    {child}
                </p>
            ))}
        </>
    );
    
    return (
        <p data-sal="slide-up" className={paragraphStyles.paragraph}>
            {children}
        </p>
    );
}

export default Paragraph
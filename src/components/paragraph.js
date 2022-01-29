import React from "react"
import * as paragraphStyles from "./paragraph.module.sass"

const Paragraph = ({children, ...rest}) => (
    <>
        {children.map( (child, index) => (
            <p className={`${paragraphStyles.paragraph} ${index % 2 == 0  ? paragraphStyles.leftCol : paragraphStyles.rightCol}`}>
                {child}
            </p>
        )
        )}
    </>
)

export default Paragraph
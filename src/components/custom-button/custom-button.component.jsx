import React from 'react'

import "./custom-button.styles.scss";


const CutomButton = ({children, ...otherProps}) =>(

    <button className = 'custom-button' {...otherProps}>
        {children}
    </button>
)

export default CutomButton;
import React from 'react';
import './logo.scss';

const logo = (props) => {
    const {imagepath} = props
    return(
        <div className="logo">
            <img src={imagepath} alt="logo" />
        </div>
    )
}

export default logo;
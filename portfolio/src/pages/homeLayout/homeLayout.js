import React from "react";
import './homeLayout.scss';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';

const homeLayout = (props) => {
    return(
        <div>
            <Header />
            <Banner />
        </div>
    )
}

export default homeLayout;
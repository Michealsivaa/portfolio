import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import hamburger from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import './menu.scss';
import { useNavigate } from 'react-router-dom';


const App = (props) => {
    const [menuClicked, setMenuClicked] = useState(false);
    const handleSubmit = () => {
        setMenuClicked(!menuClicked);
    }

    const navigate = useNavigate();

    const handleMenu = () => {
       navigate('/about');
    }

    return(
        <div className="menu-section">
            <Grid container>
                <Grid item className="inner-menu">
                    <div onClick={handleMenu} className='menu-list'>About</div>
                    <div className="menu-list">Contact</div>
                    <img onClick={handleSubmit} src={hamburger} alt="menu" />
                    {menuClicked ? 
                    <div className="information-menu animate__animated animate__fadeInLeftBig">
                        <img onClick={handleSubmit} src={closeIcon} alt="menu" />
                        <div className="inner-menu">
                            <div className="menu-item">About</div>
                            <div className="menu-item">Career</div>
                            <div className="menu-item">Blog</div>
                            <div className="menu-item">Contact</div>
                        </div>
                    </div> : "" }
                </Grid>
            </Grid>
        </div>
    )
}

export default App;

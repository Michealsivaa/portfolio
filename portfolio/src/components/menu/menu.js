import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from '../logo/logo';
import hamburger from '../../assets/menu.svg';
import './menu.scss';

const menu = (props) => {
    return(
        <div className="menu-section">
            <Grid container>
                <Grid item className="inner-menu">
                    <div className='menu-list'>About</div>
                    <div className="menu-list">Contact</div>
                    <Logo className="hamburger-icon" imagepath = {hamburger}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default menu;

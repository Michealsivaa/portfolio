import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import apple from '../../assets/apple.svg';
import './header.scss';

const header = (props) => {
    return(
        <div className="header">
            <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="logo-section">
                        <Logo imagepath = {apple}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={'menu-section'}>
                        <Menu />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default header;
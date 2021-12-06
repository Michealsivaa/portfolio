import { Container, Grid } from "@material-ui/core";
import React from "react";
import './banner.scss';
import 'animate.css';

const banner = (props) => {
    return(
        <div className="banner">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="banner-section">
                            <h1 className="banner-name">I AM SIVAKUMAR FROM TAMILNADU</h1>
                            <h1 className="banner-content">Senior Software Developer III</h1>
                            <h1 className="banner-content">Senior UI Designer in <span>Digital Market</span></h1>
                            <p className="banner-button">Speak with me</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="banner-image-pattern"></div>
        </div>
    )
}

export default banner;
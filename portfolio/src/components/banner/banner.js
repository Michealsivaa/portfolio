import { Container, Grid } from "@material-ui/core";
import React from "react";
import './banner.scss';

const banner = (props) => {
    return(
        <div className="banner">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="banner-section">
                            <h3 className="banner-name">I am Sivakumar</h3>
                            <h1 className="banner-content">Senior Software Developer III / UI Designer</h1>
                            <p className="banner-button"><button>EXPLORE ME</button></p>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default banner;
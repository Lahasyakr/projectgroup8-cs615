import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import trialsketch1 from '../../images/storyboard/trialsketch1.png';
import trialsketch2 from '../../images/storyboard/trialsketch2.png';

function TrialSketches() {

    return (
        <>
            <Grid
                container
                direction={'column'}
                justifyContent="center"
                alignItems="center"
                width={"100%"}
            >

                <img src={trialsketch1} alt="Trial Sketch" height={"100%"} width={"70%"}/>
                <img src={trialsketch2} alt="Trial Sketch" height={"100%"} width={"70%"}/>
                
            </Grid>
        </>
    )
}

export default TrialSketches;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import Slide1 from '../../images/storyboard/Prateeksha/Slide1.PNG';
import Slide2 from '../../images/storyboard/Prateeksha/Slide2.PNG';
import Slide3 from '../../images/storyboard/Prateeksha/Slide3.PNG';
import Slide4 from '../../images/storyboard/Prateeksha/Slide4.PNG';
import Slide5 from '../../images/storyboard/Prateeksha/Slide5.PNG';
import Slide6 from '../../images/storyboard/Prateeksha/Slide6.PNG';
import Slide7 from '../../images/storyboard/Prateeksha/Slide7.PNG';
import Slide8 from '../../images/storyboard/Prateeksha/Slide8.PNG';
import Slide9 from '../../images/storyboard/Prateeksha/Slide9.PNG';
import design1 from '../../images/storyboard/Lahasya/design1.png';
import design2 from '../../images/storyboard/Lahasya/design2.png';
import design3 from '../../images/storyboard/Lahasya/design3.png';
import design4 from '../../images/storyboard/Lahasya/design4.png';
import yesh1 from '../../images/storyboard/Yeshaswini/UID-Sketches-1.png';
import yesh2 from '../../images/storyboard/Yeshaswini/UID-Sketches-2.png';
import yesh3 from '../../images/storyboard/Yeshaswini/UID-Sketches-3.png';
import yesh4 from '../../images/storyboard/Yeshaswini/UID-Sketches-4.png';
import yesh5 from '../../images/storyboard/Yeshaswini/UID-Sketches-5.png';

function Storyboard() {

    return (
        <>
            <Grid
                container
                direction={'column'}
                justifyContent="center"
                alignItems="center"
            >

                <Typography> Storyboards by Prateeksaha</Typography>
                <br></br>
                <img src={Slide1} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide2} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide3} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide4} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide5} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide6} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide7} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide8} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={Slide9} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>

                <Typography> Storyboards by Yeshaswini</Typography>
                <br></br>
                <img src={yesh1} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={yesh2} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={yesh3} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={yesh4} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={yesh5} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>

                <Typography> Storyboards by Lahasya</Typography>
                <br></br>
                <img src={design1} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={design2} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={design3} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>
                <img src={design4} alt='story board' height={"100%"} width={"70%"}/>
                <br></br>

        
            </Grid>
            <br></br>

        </>
    )
}

export default Storyboard;
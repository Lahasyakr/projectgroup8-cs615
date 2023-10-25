import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import page1 from '../../images/Prototypes/InitialPrototype/Task1/Task1-Page1.JPG';
import page2 from '../../images/Prototypes/InitialPrototype/Task1/Task1-Page2.JPG';
import page3 from '../../images/Prototypes/InitialPrototype/Task1/Task1-Page3.JPG';
import page4 from '../../images/Prototypes/InitialPrototype/Task1/Task1-Page4.JPG';
import page5 from '../../images/Prototypes/InitialPrototype/Task1/Task1-Page5.JPG';

import Fpage1 from '../../images/Prototypes/FinalPrototype/Task1/page1-task1.JPG';
import Fpage2 from '../../images/Prototypes/FinalPrototype/Task1/page2-task1.JPG';
import Fpage3 from '../../images/Prototypes/FinalPrototype/Task1/page3-task1.JPG';
import Fpage4 from '../../images/Prototypes/FinalPrototype/Task1/page4-task1.JPG';

import PrototypeCarousel from './PrototypeCarousel';
import { Typography } from '@mui/material';
const task1_data_Initial = [
    {
        img: page1,
        alt: 'page1'
    },
    {
        img: page2,
        alt: 'page2'
    },
    {
        img: page3,
        alt: 'page3'
    },
    {
        img: page4,
        alt: 'page4'
    },
    {
        img: page5,
        alt: 'page5'
    }
]


const task1_data_Final = [
    {
        img: Fpage1,
        alt: 'page1'
    },
    {
        img: Fpage2,
        alt: 'page2'
    },
    {
        img: Fpage3,
        alt: 'page3'
    },
    {
        img: Fpage4,
        alt: 'page4'
    },

]


function Task1() {
    return (
        <>
            <Box sx={{ width: '98%' }}>
                <Typography variant="body1" color="textPrimary" align="left" className='taskDesc'>Task 1: Create an account and log in.</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Initial Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task1_data_Initial} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Final Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task1_data_Final} />
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h6" color="textPrimary" align="left" className='taskDesc'><u><b>Observation:</b></u>  </Typography>
                <Typography variant='body1' color="textPrimary" align="left" className='taskDesc'>
                    The pop-up asking, "Do you want to login?" After a successful account creation is redundant and could simply direct the user
                    to the login page with an account creation successful message.
                </Typography>
            </Box>
        </>
    )
}

export default Task1;
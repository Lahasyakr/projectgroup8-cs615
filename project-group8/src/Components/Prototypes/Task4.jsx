import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import page1 from '../../images/Prototypes/InitialPrototype/Task4/Task4-Page1.JPG';
import page2 from '../../images/Prototypes/InitialPrototype/Task4/Task4-Page2.JPG';
import page3 from '../../images/Prototypes/InitialPrototype/Task4/Task4-Page3.JPG';

import Fpage1 from '../../images/Prototypes/FinalPrototype/Task4/page1-task4.JPG';
import Fpage2 from '../../images/Prototypes/FinalPrototype/Task4/page2-task4.JPG';
import Fpage3 from '../../images/Prototypes/FinalPrototype/Task4/page3-task4.JPG';

import PrototypeCarousel from './PrototypeCarousel';
import { Typography } from '@mui/material';
const task4_data_Initial = [
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
]


const task4_data_Final = [
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

]


function Task4() {
    return (
        <>
            <Box sx={{ width: '98%' }}>
                <Typography variant="body1" color="textPrimary" align="left" className='taskDesc'>Task 4: Write a review for the game 'CATAN'. </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Initial Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task4_data_Initial} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Final Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task4_data_Final} />
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h6" color="textPrimary" align="left" className='taskDesc'><u><b>Observation:</b></u>  </Typography>
                <Typography variant='body1' color="textPrimary" align="left" className='taskDesc'>
                    Users have provided feedback indicating that the "Add a Review" link should be modified into a clickable button rather than just a plain link.
                    They also mentioned that in the prototypes, it was not clear that this element should be clicked. Therefore, the recommendation is to change
                    it into a button for improved clarity and user interaction.
                </Typography>
            </Box>
        </>
    )
}

export default Task4;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import page1 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page1.JPG';
import page2 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page2.JPG';
import page3 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page3.JPG';
import page4 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page4.JPG';
import page5 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page5.JPG';
import page6 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page6.JPG';
import page7 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page7.JPG';
import page8 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page8.JPG';
import page9 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page9.JPG';
import page10 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page10.JPG';
import page11 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page11.JPG';
import page12 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page12.JPG';
import page13 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page13.JPG';
import page14 from '../../images/Prototypes/InitialPrototype/Task2/Task2-Page14.JPG';

import Fpage1 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page1.JPG';
import Fpage2 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page2.JPG';
import Fpage3 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page3.JPG';
import Fpage4 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page4.JPG';
import Fpage5 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page5.JPG';
import Fpage6 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page6.JPG';
import Fpage7 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page7.JPG';
import Fpage8 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page8.JPG';
import Fpage9 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page9.JPG';
import Fpage10 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page10.JPG';
import Fpage11 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page11.JPG';
import Fpage12 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page12.JPG';
import Fpage13 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page13.JPG';
import Fpage14 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page14.JPG';
import Fpage15 from '../../images/Prototypes/FinalPrototype/Task2/Task2-Page15.JPG';

import PrototypeCarousel from './PrototypeCarousel';
import { Typography } from '@mui/material';
const task2_data_Initial = [
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
    },
    {
        img: page6,
        alt: 'page6'
    },
    {
        img: page7,
        alt: 'page7'
    },
    {
        img: page8,
        alt: 'page8'
    },
    {
        img: page9,
        alt: 'page9'
    },
    {
        img: page10,
        alt: 'page10'
    },
    {
        img: page11,
        alt: 'page11'
    },
    {
        img: page12,
        alt: 'page12'
    },
    {
        img: page13,
        alt: 'page13'
    },
    {
        img: page14,
        alt: 'page14'
    },
]


const task2_data_Final = [
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
    {
        img: Fpage5,
        alt: 'page5'
    },
    {
        img: Fpage6,
        alt: 'page6'
    },
    {
        img: Fpage7,
        alt: 'page7'
    },
    {
        img: Fpage8,
        alt: 'page8'
    },
    {
        img: Fpage9,
        alt: 'page9'
    },
    {
        img: Fpage10,
        alt: 'page10'
    },
    {
        img: Fpage11,
        alt: 'page11'
    },
    {
        img: Fpage12,
        alt: 'page12'
    },
    {
        img: Fpage13,
        alt: 'page13'
    },
    {
        img: Fpage14,
        alt: 'page14'
    },
    {
        img: Fpage15,
        alt: 'page15'
    }

]


function Task2() {
    return (
        <>
            <Box sx={{ width: '98%' }}>
                <Typography variant="body1" color="textPrimary" align="left" className='taskDesc'>Task 2: Search for a board game 'CATAN - Ocean Experience' and rent it.
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Initial Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task2_data_Initial} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Final Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task2_data_Final} />
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h6" color="textPrimary" align="left" className='taskDesc'><u><b>Observation:</b></u>  </Typography>
                <Typography variant='body1' color="textPrimary" align="left" className='taskDesc'>
                    Add an additional cart icon in the navbar to give the user an option to navigate directly to the cart while exploring new games.

                    Providing users with a summary of the total amount and the games added to their cart on each page of the payment process during
                    checkout can offer valuable reassurance that their selections are accurate and align with their rental preferences.


                </Typography>
            </Box>
        </>
    )
}

export default Task2;
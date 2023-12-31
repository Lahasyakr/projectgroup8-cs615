import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import page1 from '../../images/Prototypes/InitialPrototype/Task3/Task3-Page1.JPG';
import page2 from '../../images/Prototypes/InitialPrototype/Task3/Task3-Page2.JPG';
import page3 from '../../images/Prototypes/InitialPrototype/Task3/Task3-Page3.JPG';


import Fpage1 from '../../images/Prototypes/FinalPrototype/Task3/page1-task3.JPG';
import Fpage2 from '../../images/Prototypes/FinalPrototype/Task3/page2-task3.JPG';
import Fpage3 from '../../images/Prototypes/FinalPrototype/Task3/page3-task3.JPG';

import PrototypeCarousel from './PrototypeCarousel';
import { Typography } from '@mui/material';
const task3_data_Initial = [
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


const task3_data_Final = [
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


function Task3() {
    return (
        <>
            <Box sx={{ width: '98%' }}>
                <Typography variant="body1" color="textPrimary" align="left" className='taskDesc'>Task 3: Update the order number 123 as returned. </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Initial Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task3_data_Initial} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="textPrimary" align="center" className='headingClass'>Final Prototype</Typography>
                        <div className='imageCarousel'>
                            <PrototypeCarousel data={task3_data_Final} />
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h6" color="textPrimary" align="left" className='taskDesc'><u><b>Observation:</b></u>  </Typography>
                <Typography variant='body1' color="textPrimary" align="left" className='taskDesc'>
                    Users have expressed confusion regarding the labels of the 'Manage Inventory' and 'Orders' buttons. As a result,
                    a suggestion has been made to enhance the intuitiveness of these button names.
                </Typography>
            </Box>
        </>
    )
}

export default Task3;
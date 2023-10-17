import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import design1 from '../../images/storyboard/design1.png';
import design2 from '../../images/storyboard/design2.png';
import ImageCarouselStoryBoardPrateeksha from './ImageCarouselStoryBoardPrateeksha';

function Storyboard() {

    return (
        <>
            <Grid
                container
                direction={'column'}
                justifyContent="center"
                alignItems="center"
            >
                <img src={design1} alt="story board" height={"100%"} width={"70%"} />
                <img src={design2} alt="story board" height={"100%"} width={"70%"} />

            </Grid>

            <grid
                container
                direction={'column'}
                justifyContent="center"
                alignItems="center">

                    <div className='storyBoardCarousel'>
                        <ImageCarouselStoryBoardPrateeksha />
                    </div>

            </grid>
        </>
    )
}

export default Storyboard;
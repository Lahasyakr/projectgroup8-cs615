import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import '../../CSS/Analysis.css';
import DownloadIcon from '@mui/icons-material/Download';
import { orange } from '@mui/material/colors';
import ERDia from '../../images/ER-dia.png';
import ImageCarousel from './ImageCarousel';
import TaskAnalysis from './TaskAnalysis';
import InterviewSynopsis from './InterviewSynopsis';

function Analysis() {

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Typography variant="h4" gutterBottom className='heading'>User/Task/Domain Analysis </Typography>
                <a href="documents/CS615-Project_Step-2 _Group8.pdf" target="_blank" download className='downloadlink'>
                    <Button variant='contained' size="small" className='downloadButton' endIcon={<DownloadIcon sx={{ color: orange[500] }} />}>
                        Download
                    </Button>
                </a>


            </Grid>

            <Grid p={7}>
                <div className='mainAnalysis'>
                    <Typography variant="h6" color="textPrimary" align="left"><u><b>User Analysis:</b></u>  </Typography>
                    <div className='interviewReport'>
                        <InterviewSynopsis />
                    </div>
                    <Typography variant='body2' color="textPrimary" align="left">
                        Personas for the potential users:
                    </Typography>
                    

                    <div className='personaCarousel'>
                        <ImageCarousel />
                    </div>
                </div>
                

                <div className='mainAnalysis'>
                    <TaskAnalysis />
                </div>

                <div className='mainAnalysis'>
                    <Typography variant="h6" color="textPrimary" align="left"> <b><u>Domain Analysis:</u></b></Typography>
                    <Typography variant='body2' color="textPrimary" align="left">Here is the Entity Relationship diagram. </Typography>
                    <Typography variant="body2" color="textPrimary" align="left">
                        <img src={ERDia} alt="ER Diagram" height={600} width={800} />
                    </Typography>
                </div>
            </Grid>
        </>
    )
}

export default Analysis;
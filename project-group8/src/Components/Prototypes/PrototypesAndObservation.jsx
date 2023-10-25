import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import '../../CSS/prototypes.css';
import { Button, Grid, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Task1 from './Task1';
import Task2 from './Task2';
import '../../CSS/storyboard.css';
import Task3 from './Task3';
import Task4 from './Task4';

function PrototypesAndObservation() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: orange,
        },
    });

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className='prototype'
            >
                <ThemeProvider theme={theme}>
                    <Typography variant="h4" gutterBottom className='heading' align='center'>Prototypes & Observations - </Typography>
                    <a href="documents/CS615_Project_Step_3 _Group8.pdf" target="_blank" download className='downloadlink'>
                        <Button variant='contained' size="small" className='downloadButton' endIcon={<DownloadIcon sx={{ color: orange[500] }} />}>
                            Download
                        </Button>
                    </a>
                    <Grid container>
                        <Typography variant="h6" color="textPrimary" align="left"><b>Briefing</b></Typography>
                        <Typography variant='body1' color="textPrimary" align="left">The "Board for Bored" application is a web
                            plaƞorm that serves as a board game rental
                            service managed by Bellatrix, a board game
                            store owner. Users can create profiles,
                            browse through the available board games,
                            use filters and sorting options for their
                            searches, select the board games they
                            want to rent, and make payments on the
                            website. The physical aspect of picking up
                            and returning the rented board games is
                            done at Bellatrix's store, but the
                            administrative processes for tracking these
                            transactions occur on the website. Overall,
                            the "Board for Bored" application provides
                            a convenient way for users to rent board
                            games and for Bellatrix to manage her
                            board game store's inventory and customer
                            transactions efficiently.</Typography>
                        <Box sx={{ width: '100%', marginTop: '1%' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="inherit"
                                indicatorColor="primary"
                                centered>
                                <Tab value={1} label="Task 1" className='tabs' style={{ marginLeft: '1%' }} />
                                <Tab value={2} label="Task 2" className='tabs' style={{ marginLeft: '2%' }} />
                                <Tab value={3} label="Task 3" className='tabs' style={{ marginLeft: '2%' }} />
                                <Tab value={4} label="Task 4" className='tabs' style={{ marginLeft: '2%' }} />
                            </Tabs>
                        </Box>
                        <div className='tabContenet'>
                            {value === 1 ? <Task1 /> :
                                value === 2 ? <Task2 /> :
                                    value === 3 ? <Task3 /> :
                                        <Task4 />}
                        </div>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </>
    );
}
export default PrototypesAndObservation;
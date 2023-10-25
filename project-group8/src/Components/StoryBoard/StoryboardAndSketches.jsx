import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import '../../CSS/storyboard.css';
import Storyboard from './Storyboard';

import FinalSketches from './FinalSketches';
import { Button, Grid, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function StoryboardAndSketches() {
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
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className='storyboards_sketches'
        >
            <ThemeProvider theme={theme}>
                <Typography variant="h4" gutterBottom className='heading' align='center'>Storyboards & Sketches - </Typography>
                <a href="documents/CS615_Project_Step_3 _Group8.pdf" target="_blank" download className='downloadlink'>
                    <Button variant='contained' size="small" className='downloadButton' endIcon={<DownloadIcon sx={{ color: orange[500] }} />}>
                        Download
                    </Button>
                </a>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        centered>
                        <Tab value={1} label="Storyboards" className='tabs' />
                        <Tab value={2} label="Final Sketches" className='tabs' />
                    </Tabs>
                </Box>
                <div className='tabContenet'>
                    {value === 1 ? <Storyboard /> : <FinalSketches />}
                </div>
            </ThemeProvider>
        </Grid>
    );
}
export default StoryboardAndSketches;
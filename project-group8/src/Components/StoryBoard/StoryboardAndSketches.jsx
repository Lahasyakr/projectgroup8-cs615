import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import '../../CSS/storyboard.css'
import { Grid } from '@mui/material';
import Storyboard from './Storyboard';

import FinalSketches from './FinalSketches';

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
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    centered>
                    <Tab value={1} label="Storyboards" className='tabs'/>
                    <Tab value={2} label="Final Sketches" className='tabs' />
                </Tabs>
            </Box>
            <div className='tabContenet'>
                {value === 1 ? <Storyboard /> : <FinalSketches />}
            </div>
        </ThemeProvider>
    );
}
export default StoryboardAndSketches;
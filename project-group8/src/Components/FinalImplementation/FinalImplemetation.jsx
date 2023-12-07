import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import '../../CSS/Analysis.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import projectdemovideo from './projectdemovideo.mp4'


export default function FinalImplementation() {

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Typography variant="h4" gutterBottom className='heading'>Final Implementation </Typography>


            </Grid>

            <Grid style={{ padding: "2rem 10rem 2rem 10rem" }}>
                <div className='mainAnalysis'>
                    <ol >
                        <li><a target='_blank' style={{ color: "black" }} href='https://lahasyakr.github.io/BoardForBored/'>
                            Link to our Application :
                            <a target='_blank' style={{ color: "blue", fontWeight: "500" }}
                                href='https://lahasyakr.github.io/BoardForBored/'> Click me
                                <FaExternalLinkAlt style={{ marginLeft: "10px" }} /></a></a>
                        </li>
                        <li style={{ paddingTop: "2rem" }}><a target='_blank' style={{ color: "black" }} href='https://github.com/Lahasyakr/BoardForBored'>
                            Github Link for Our project implementation  :
                            <a target='_blank' style={{ color: "blue", fontWeight: "500" }}
                                href='https://github.com/Lahasyakr/BoardForBored'> Board For Bored
                                <FaExternalLinkAlt style={{ marginLeft: "10px" }} /></a></a></li>
                        <li style={{ paddingTop: "2rem" }}><a target='_blank' style={{ color: "black" }} href='https://github.com/Lahasyakr/BoardForBored/blob/main/README.md'>
                            To run the project on your local machine, follow these instructions :
                            <a target='_blank' style={{ color: "blue", fontWeight: "500" }}
                                href='https://github.com/Lahasyakr/BoardForBored/blob/main/README.md'> Read me
                                <FaExternalLinkAlt style={{ marginLeft: "10px" }} /></a></a></li>


                        <li style={{ paddingTop: "2rem" }}>
                            Here is our project demo video :
                        </li>

                    </ol>
                    <video style={{ padding: "2rem", width: "100%" }} controls autostart autoPlay src={projectdemovideo} type="video/mp4" />
                </div>


            </Grid >
        </>
    )
}


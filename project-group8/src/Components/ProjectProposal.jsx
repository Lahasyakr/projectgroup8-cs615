import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import '../CSS/projectproposal.css';
import DownloadIcon from '@mui/icons-material/Download';
import { orange } from '@mui/material/colors';

function ProjectProposal() {


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Typography variant="h4" gutterBottom className='heading'>Project Proposal - </Typography>
                <a href="documents/CS615-Project_Proposal_Group8.pdf" target="_blank" download className='downloadlink'>
                    <Button variant='contained' size="small" className='downloadButton' endIcon={<DownloadIcon sx={{ color: orange[500] }} />}>
                        Download
                    </Button>
                </a>


            </Grid>

            <Grid p={7}>
                <Typography variant="body1" color="textPrimary" align="left"><u><b>Problem statement:</b></u>  </Typography>
                <Typography variant='body2' color="textPrimary" align="left">
                    <p>
                        To build a rental management system for board games.
                        <br></br>
                        <br></br>

                        The site shall display:
                        <ul>
                            <li>Instructions on renting the board game.</li>
                            <li>Information about the game.</li>
                            <li>The reviews posted by users.</li>
                            <li>Available dates for the game.</li>
                        </ul>

                        <br></br>
                        Filters for searching the game:
                        <ul>
                            <li>Game category (strategy, fun, card games)</li>
                            <li>No. of players</li>
                            <li>Period of availability or availability status</li>
                            <li>Reviews (popular, not so popular)</li>
                            <li>Most rented games</li>
                        </ul>
                    </p>
                </Typography>

                <Typography variant="body1" color="textPrimary" align="left"> <b><u>Users</u></b>:
                    <span className='smalltext'>Customers - Individuals or groups seeking entertainment through board games. As users of the platform.</span></Typography>
                <Typography variant="body2" color="textPrimary" align="left">
                    <p>
                        <b>Goals:</b> To rent the desired board game and provide feedback/reviews.
                        <br></br>
                        <br></br>
                        <b>Actions: </b>
                        <ul>
                            <li>Signup/Login: The user signs up/logs into the site, which creates a profile of their own that shall consist of the users’ details and the orders they’ve previously made, their Wishlist etc.</li>
                            <li>Product searches: The customer shall use the interface to search for the required board game by name or simply use the interface for suggestions based on probably the categories of the board games. These categories may be based on the number of players, the brand name, the type of game (strategy, card games, dice games etc.). The user may use the reviews section to see which games are popular by the reviews given.</li>
                            <li>Checkouts: The user may decide upon one or more games and add it to
                                <ul>
                                    <li>Their Wishlist or cart.</li>
                                    <li>Selecting the period to which the user shall rent the game for.</li>
                                    <li>Reviews: The user may post reviews of their experiences, on the games that they’ve rented/played under a particular games’ page.</li>
                                </ul>
                            </li>
                            <li>Reviews: The user may post reviews of their experiences, on the games that they’ve rented/played under a particular games’ page.</li>

                        </ul>
                        <b>Potential obstacles:</b>
                        <ul>
                            <li>Creating a scalable design such that any new components can be easily added.</li>
                            <li>Appealing design interface for the target users</li>
                            <li>Achieving maximum user goals while upholding the design principles.</li>
                        </ul>
                    </p>
                </Typography>

            </Grid>
        </>
    )
}

export default ProjectProposal;
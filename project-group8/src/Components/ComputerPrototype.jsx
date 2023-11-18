import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import '../CSS/csproto.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ComputerPrototype = () => {
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
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Typography variant="h4" gutterBottom className='heading'>Computer Prototype - </Typography>
                    <a href="documents/CS615-Project_Step-5 _Group8.pdf" target="_blank" download className='downloadlink'>
                        <Button variant='contained' size="small" className='downloadButton' endIcon={<DownloadIcon sx={{ color: orange[500] }} />}>
                            Download
                        </Button>
                    </a>


                </Grid>
                <Box sx={{ width: '100%', marginTop: '1%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        centered>
                        <Tab value={1} label="Customer" className='tabs' style={{ marginLeft: '1%' }} />
                        <Tab value={2} label="Admin" className='tabs' style={{ marginLeft: '2%' }} />
                    </Tabs>
                </Box>
                <div className='tabContenet'>
                    <Grid p={7}>
                        {value === 1 ?
                            <>
                                <Typography variant="body1" color="textPrimary" align="left"><u><b>Customer point of vew</b></u>  </Typography>
                                <Typography variant='body2' color="textPrimary" align="left">
                                    <p>Link to Prototype: <a style={{ color: "blue", textDecoration: "underline" }} href='https://www.figma.com/proto/DT9jt8KHy5z9sS0dHrOzsA/UID---Group-8---Prototype?type=design&node-id=1-8&t=gPO3DlwDdkzMYaRK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A8&mode=design'>
                                        Customer POV Prototype</a></p>
                                    <p>
                                        Some heads-up:
                                        <br />

                                        <ul>
                                            <li>Only the "Jaipur" game from the list of games on the home page is clickable.
                                                The rest of the games are not responsive to clicks.
                                            </li>
                                            <li>The "My Orders" page for the user consistently directs to the same frame,
                                                resulting in the display of the "Jaipur" game even before it is rented out.</li>
                                            <li>On the home page, a scrollable list of games is accompanied by two small
                                                squares mapping the scrolling content. However, these mapping squares are
                                                only displayed and do not function as intended.</li>
                                            <li>Adding a review for a game does not result in the addition of a new review to
                                                the list. The buttons direct to the respective pages, showcasing the User
                                                Interface design without affecting the review list.</li>
                                            <li>After adding an item to the cart, the cart symbol correctly shows the number
                                                '1,' signifying the number of items in the cart. However, clicking on the home
                                                icon at this point does not reflect any items in the cart, showing it as empty.
                                            </li>
                                            <li>The filter and sort options, accessible by clicking the search button from the
                                                home page, display a dropdown of contents. However, clicking on any of these
                                                options does not execute the functionalities as expected.</li>
                                        </ul>

                                        <br></br>
                                        Buttons Active from All Pages:
                                        <ul>
                                            <li>Home button</li>
                                            <li> About button</li>
                                            <li>Profile button</li>
                                            <li>Cart button</li>
                                        </ul>

                                        <br /><br />
                                        Step-by-Step Guide to Explore Features:
                                        <ol type="a">
                                            <li>Landing Page:
                                                <ol type="i">
                                                    <li>Click on the 'About' button, redirecting you to the 'About' page for
                                                        website information.</li>
                                                    <li>  Use the back button to return to the landing page.</li>
                                                    <li>Choose either the 'Login' or 'Signup' buttons. We recommend clicking on
                                                        the signup page.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Signup Page:
                                                <ol type="i">
                                                    <li>Click on 'Login,' redirecting to the login page.</li>
                                                    <li>On the login page, click on 'Signup' to navigate back to the signup page,
                                                        allowing toggling between login and signup.</li>
                                                    <li> Clicking on signup from the signup page directs to the login page.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Login Page:
                                                <ol type="i">
                                                    <li>
                                                        Click on 'Login,' navigating to the home page.
                                                    </li>
                                                </ol>
                                            </li>

                                            <li>
                                                Home Page:
                                                <ol type="i">
                                                    <li>
                                                        Click on the cart icon, redirecting you to your cart.</li>
                                                    <li>In the cart (initially empty), click on the 'Return to Shop' button to go
                                                        back to the home page.
                                                    </li>
                                                </ol>
                                            </li>

                                            <li>
                                                Home Page:
                                                <ol type="i">
                                                    <li>
                                                        Click on the 'Jaipur' game, redirecting you to the game details display of
                                                        the board game 'Jaipur.'</li>
                                                    <li> Click on the back button to return to the home page.</li>
                                                    <li> Click on the search button (assuming 'Jaipur' as the key), displaying the
                                                        Jaipur board game in the search results.</li>
                                                    <li> The filter and sort options can be used.</li>
                                                    <li> Click on the 'Jaipur' game option.</li>

                                                </ol>
                                            </li>

                                            <li>
                                                Jaipur Game Details Page:
                                                <ol type="i">
                                                    <li> Select the quantity from the dropdown.</li>
                                                    <li> Choose dates from the calendar.</li>
                                                    <li> Click 'Add to Cart.'</li>
                                                    <li>Cart symbol updates to show one item added.</li>
                                                    <li>Options to proceed: click on the cart icon, then 'Proceed to Checkout,' or
                                                        click 'Proceed to Checkout,' or click 'Rent Now.' We suggest clicking on
                                                        the cart icon to explore all functionalities and frames.</li>

                                                </ol>
                                            </li>

                                            <li>
                                                Cart:
                                                <ol type="i">
                                                    <li> Click on 'Proceed to Checkout,' redirecting to the order details page.</li>
                                                    <li> Select the payment method and click 'Proceed.'</li>
                                                    <li> This redirects to the payment page.</li>
                                                    <li> Click on 'Pay,' triggering a popup confirming the payment.</li>
                                                    <li> Click 'OK.'</li>
                                                    <li> Now you land on the home page again.</li>
                                                </ol>
                                            </li>
                                            <li>Home Page:
                                                <ol type="i">
                                                    <li> Click on the user icon on the top right, redirecting to the user profile
                                                        page.</li>
                                                    <li> Click on the 'Manage Profile' button, directing you to the manage profile
                                                        page for editing/updating user details.</li>
                                                    <ol type="1"><li>Click on 'Update'.</li></ol>
                                                    <li> Click on the 'My Orders' button to view current orders.</li>
                                                    <ol type="1"><li>Click the back button to redirect to the user profile page.</li>
                                                        <li> Click on the back or home button to return to the home page.</li>
                                                    </ol>
                                                </ol>
                                            </li>
                                            <li> Review page:
                                                <ol type="i">
                                                    <li> Click on the Jaipur game.  </li>
                                                    <li> Scroll down to the review section and click on add a review button.  </li>
                                                    <li> A pop up to add review details pops up.  </li>
                                                    <li> Click on Submit.  </li>
                                                    <li> A message pops up.  </li>
                                                    <li> Click on OK.  </li>
                                                </ol>
                                            </li>

                                        </ol>
                                    </p>
                                </Typography >
                            </>
                            :
                            <>
                                <Typography variant="body1" color="textPrimary" align="left"> <b><u>Admin point of view</u></b>:</Typography>
                                <Typography variant='body2' color="textPrimary" align="left">
                                    <p>Link to Prototype: <a style={{ color: "blue", textDecoration: "underline" }} href='https://www.figma.com/proto/DT9jt8KHy5z9sS0dHrOzsA/UID---Group-8---Prototype?type=design&node-id=247-1556&t=CA0tlFHMQTufsBhu-1&scaling=scale-down&page-id=29%3A4&starting-point-node-id=247%3A1584&mode=design'>
                                        Admin POV Prototype</a></p>
                                    <p>

                                        Some heads-up:
                                        <br />
                                        <ul>
                                            <li>The edit or delete button on every page directs to the respective pages, but the
                                                data in the table does not get deleted/edited accordingly. The delete function only
                                                works when following specific steps mentioned.</li>
                                            <li> The "Add New Game" button does not add new games every time. It functions
                                                correctly only on the first attempt, and subsequent attempts do not result in any
                                                changes to the list of games. However, the button appropriately directs to the
                                                respective pages.</li>
                                            <li>The "Manage Orders" table has the "Delivered" and "Returned" buttons working
                                                only for the first order (ABC). For other orders, these buttons do not function as
                                                expected.</li>
                                            <li> The "Home" button always directs to the same frame. For example, if you click on
                                                "Manage Orders," then on "Delivered" and "Returned," the first order is deleted
                                                from the list. However, clicking on the "Home" button and checking the "Manage
                                                Orders" table will display the ABC order again in the list</li>
                                        </ul>

                                        <br /><br />
                                        Step-by-Step Guide to Explore Features:
                                        <ol type="1">
                                            <li>Login Page:
                                                <ol type="a">
                                                    <li> Click on the 'Login' button.</li>
                                                    <li> This directs to the home page.</li>
                                                </ol>
                                            </li>
                                            <li> Home Page:
                                                <ol type="a">
                                                    <li> two tables are found for managing orders and my games.</li>
                                                    <li> Click on the respective buttons to toggle between the two tables.</li>
                                                </ol>
                                            </li>
                                            <li> My Games:
                                                <ol type="a">
                                                    <li> Add New Game: Click on 'Add New Game,' triggering a popup to add a new
                                                        game to the inventory</li>
                                                    <ul>
                                                        <li> Select categories and quantity.</li>
                                                        <li>  Click the 'Add' button.</li>
                                                        <li>  Scroll on the home page to see the new game added to the list.</li>
                                                    </ul>
                                                    <li> Delete a Game:</li>
                                                    <ul>
                                                        <li>  Click on the delete button next to the 'Catan' game.</li>
                                                        <li>  A popup asks for confirmation; click on 'Confirm’.</li>
                                                        <li>  The table updates, showing that the 'Catan' game is deleted.</li>
                                                    </ul>
                                                </ol>
                                            </li>
                                            <li>Edit Game Details:
                                                <ul>
                                                    <li>  Click on the edit button next to 'Phase 10.'</li>
                                                    <li>  A popup for editing details appears.</li>
                                                    <li>  Click on 'Update.'</li>
                                                </ul>
                                            </li>
                                            <li>Manage Orders:
                                                <ul>
                                                    <li>  Click on 'Delivered' next to the 'ABC' order.</li>
                                                    <li>  The 'Returned' button is now enabled for that order.</li>
                                                    <li>  Click on the 'Returned' button to remove the order from the list.</li>
                                                </ul>
                                            </li>

                                        </ol>
                                    </p>
                                </Typography>
                            </>
                        }

                    </Grid >

                </div >
            </ThemeProvider>
        </>
    )
}

export default ComputerPrototype;
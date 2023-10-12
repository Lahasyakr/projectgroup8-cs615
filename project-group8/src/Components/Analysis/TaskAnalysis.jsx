import * as React from 'react';
import { Typography } from '@mui/material';
import '../../CSS/Analysis.css';

function TaskAnalysis() {
    return (
        <>
            <Typography variant="h6" color="textPrimary" align="left"><u><b>Task Analysis</b></u>  </Typography>
            <Typography id="orderedlists" variant='body2' color="textPrimary" align="left">
                <p>
                    Tasks for Board Game Rental Management:
                    <ul>
                        <li>Login/logout that includes the necessary validation. </li>
                        <li>Feedback and reviews system. </li>
                        <li>Create an admin page to manage inventory.</li>
                        <li>Search and browse the board games. </li>
                        <li>Booking and reservation system. </li>
                        <li>Manage user accounts and profiles.</li>
                    </ul>

                    <br></br>
                    High level tasks:

                    <ol>
                        <div className='goalMargin'> <p><b>Goal (Admin user):</b> <ul>
                            <li>Manage the inventory by adding new board games, updating the necessary information about the existing board games, and discarding the outdated or surplus board games from the inventory.  </li>
                            <li>Once the customer returns the game, update the order as ‘returned’. </li>
                        </ul></p></div>
                        <li>Inventory management.
                            <ol>
                                <li>Add new board games.
                                    <ol>
                                        <li>Add game details.
                                            <ol>
                                                <li>Enter the title</li>
                                                <li>Enter the description. </li>
                                                <li>Enter the game rules. </li>
                                            </ol>

                                        </li>
                                        <li>Enter the game categories. </li>
                                        <li>Add images of the game. </li>
                                        <li>Enter the rental price for the game. </li>
                                        <li>Enter the quantity of the game. </li>
                                        <li>Click on the save button. </li>
                                    </ol>
                                </li>
                                <li>Update Game details.
                                    <ol>
                                        <li>Edit game images and upload new images. </li>
                                        <li>Enter the new game price. </li>
                                        <li>Update availability status. </li>
                                        <li>Click on the save button. </li>
                                    </ol>
                                </li>
                                <li>Remove the board game.
                                    <ol>
                                        <li>Click on the delete button next to the game. </li>
                                        <li>Confirm the deletion. </li>
                                    </ol>
                                </li>
                                <li>Manage order.
                                    <ol>
                                        <li>Click on the ‘manage orders’ button. </li>
                                        <li>Review the order details. </li>
                                        <li>Click on ‘returned’ button. </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <div className='planMargin'>
                            <p><b>Plan 1: </b> Do 1.1, when there is a need to add a new game. Do 1.2, when existing game details need to be updated. <br />
                                <ul style={{ marginLeft: "1%" }}><li> Do 1.3 when a game is outdated or is not necessary. Do 1.4 when a game has been returned to the inventory. </li></ul></p>
                            <p><b>Plan 1.1:</b> Do 1.1.1, … ,1.1.5 in any order. Do 1.1.6 after completing 1.1.1 to 1.1.5. </p>
                            <p><b>Plan 1.1.1:</b> Do 1.1.1.1, 1.1.1.2, 1.1.1.3 in any order. </p>
                            <p> <b>Plan 1.2:</b> Do 1.2.1 when images need an update.
                                <ul style={{ marginLeft: "1.8%" }}>
                                    <li>Do 1.2.2 when the game price needs to be updated.</li>
                                    <li>Do 1.2.3 when the availability status of the game needs to be updated. </li>
                                    <li>Do 1.2.4 after performing any of 1.2.1 to 1.2.3.</li>
                                </ul> </p>
                            <p><b>Plan 1.3:</b> Do 1.3.1, 1.3.2 in the same order.  </p>
                            <p><b>Plan 1.4:</b> Do 1.4.1 through 1.4.3 in the same order.  </p>
                        </div>
                        <div className='goalMargin'><b>Goal (Customer):</b>Explore and discover board games. Utilize filtering and sorting options to find the perfect game based on preferences. </div>

                        <li value={2}>Search and browse the board games.
                            <ol>
                                <li>Search the board games. .
                                    <ol>
                                        <li>Enter the keyword in the search bar.</li>
                                        <li>Click on the search button. </li>
                                    </ol>
                                </li>
                                <li>Select the filters.
                                    <ol>
                                        <li>Click on the filter icon. </li>
                                        <li>Choose the filter options. </li>
                                        <li>Click on “apply filters” button. </li>
                                    </ol>
                                </li>
                                <li>Select the sorting option.
                                    <ol>
                                        <li>Click on the ‘sort’ icon. </li>
                                        <li>Choose the ‘sort’ optiong. </li>
                                    </ol>
                                </li>
                                <li>View required game details.
                                    <ol>
                                        <li>Scroll through the list of games. </li>
                                        <li>Click on the game required.  </li>
                                    </ol>

                                </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 2:</b> Do 2.1 first. Do 2.2 when preferences are to be applied.
                                <ul style={{ marginLeft: "1%" }}><li>Do 2.3 when sorting based on priorities is required.</li>
                                    <li> Do 2.4 at the end. </li></ul></p>

                            <p><b>Plan 2.1:</b>Do 2.1.1 - 2.1.2, in that order </p>

                            <p><b>Plan 2.2:</b> Do 2.2.1 - 2.2.2 – 2.2.3, in that order.</p>

                            <p><b>Plan 2.3:</b> Do 2.3.1 – 2.3.2 in that order. </p>

                            <p><b>Plan 2.4:</b> Do 2.4.1 – 2.4.2 in that order. </p>
                        </div>
                        <div className='goalMargin'><b>Goal (Customer):</b> Book and reserve board games of choice selecting the date range, quantity, and completing the secure checkout process with the preferred payment method.</div>
                        <ol>
                            <li>Booking and reservation of board game.
                                <ol>
                                    <li>Choose from the availability calendar.
                                        <ol>
                                            <li>Click on the calendar icon. </li>
                                            <li>Choose the date range. </li>
                                            <li>Click on the save button.</li>
                                        </ol>
                                    </li>
                                    <li>Choose the quantity required.
                                        <ol>
                                            <li>Click on the quantity dropdown. </li>
                                            <li>Select the required number for quantity. </li>
                                        </ol>
                                    </li>
                                    <li>Click on add to the cart button. </li>
                                    <li>Click on Go to cart button. </li>
                                    <li>Checkout.
                                        <ol>
                                            <li>Click on the Buy Now button. </li>
                                            <li>Select the payment method (Credit/Debit). </li>
                                            <li>Enter Card Details. </li>
                                            <li> Enter the Card Number. </li>
                                            <li> Enter the name on the card. </li>
                                            <li> Enter the expiry date on the card. </li>
                                            <li> Enter the CVV. </li>
                                            <li> Enter zip code. </li>
                                            <li> Click on ‘Make payment’ button. </li>
                                        </ol>
                                    </li>
                                </ol>

                            </li>
                        </ol>

                        <div className='planMargin'>
                            <p><b>Plan 3:</b> Do 3.1, 3.2 in the same order.
                                <ul style={{ marginLeft: "1%" }}><li>Do 3.3 and 3.4 in that order when adding to cart is required. </li></ul> </p>
                            <p><b>Plan 3.1:</b> Do 3.1.1 through 3.1.3, in that order.  </p>
                            <p><b>Plan 3.2:</b> Do 3.2.1, 3.2.2, in that order.  </p>
                            <p><b>Plan 3.5:</b>Do 3.5.1 through 3.5.3 in that order.  </p>
                            <p><b>Plan 3.5.3:</b> Do 3.5.3.1 through 3.5.3.6 in that order.  </p>
                        </div>
                        <div className='goalMargin'><b>Goal(Customer): </b>Share valuable feedback and reviews for the games. Rate the game, write thoughts briefly, and include supporting images.</div>
                        <li>Give feedback/reviews.
                            <ol>
                                <li>Select ‘add review’ button on the game details page.  </li>
                                <li>Select the rating (1-5) from the options.  </li>
                                <li>Enter description for the review.  </li>
                                <li>Add images supporting the review.  </li>
                                <li>Click on ‘submit review’ button. </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 4:</b>  Do 4.1 – 4.5, in that order </p>
                        </div>

                        <div className='goalMargin'><b>Goal:</b>Create a user profile page where individuals can store their personal information and easily track both their past rental history and current active rentals.  </div>
                        <li>Manage user profile.
                            <ol>
                                <li>Update personal details.
                                    <ol>
                                        <li>Click on the ‘edit profile’ button. </li>
                                        <li>Add username. </li>
                                        <li>Add email address.</li>
                                        <li>Add profile picture.</li>
                                    </ol>
                                </li>
                                <li>Check Orders
                                    <ol>
                                        <li>Check the active rental sections.
                                            <ol>
                                                <li>Click on the active rentals button. </li>
                                                <li>Scroll through the active rentals.  </li>
                                            </ol>
                                        </li>
                                        <li>Check the rental history section.
                                            <ol>
                                                <li>Click on the rental history button. </li>
                                                <li>Scroll through the rental history.  </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 5:</b> Do 5.1, when personal details need to be updated.
                                <ul style={{ marginLeft: "1%" }}><li>Do 5.2, when order details are to be viewed.</li></ul>  </p>

                            <p><b>Plan 5.1:</b>  Do 5.1.1 - 5.1.4 in that order.   </p>
                            <p><b>Plan 5.2:</b> Do 5.2.1 when active rentals are to be viewed.
                                <ul style={{ marginLeft: "1.8%" }}><li> Do 5.2.2, when rental history is to be viewed. </li></ul>   </p>
                            <p><b>Plan 5.2.1:</b>  Do 5.2.1.1 – 5.2.1.2 in that order.  </p>
                            <p><b>Plan 5.2.2:</b> Do 5.2.2.1 – 5.2.2.2 in that order. </p>
                        </div>
                    </ol>
                </p>
            </Typography >
        </>
    )
}

export default TaskAnalysis;
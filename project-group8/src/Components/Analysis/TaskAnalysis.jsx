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
                        <li>TCreate an admin page to manage inventory.</li>
                        <li>ASearch and browse the board games. </li>
                        <li>Booking and reservation system. </li>
                        <li>Manage user accounts and profiles.</li>
                    </ul>

                    <br></br>
                    High level tasks:

                    <ol>
                        <div className='goalMargin'> <p><b>Goal:</b> Create a user–friendly admin page to efficiently manage website inventory.</p></div>
                        <li>Create an admin page to manage inventory.
                            <ol>
                                <li>Create a feature to add new board games.
                                    <ol>
                                        <li>Create input to add game details.
                                            <ol>
                                                <li>Create game title input field</li>
                                                <li>Create game description input field. </li>
                                                <li>Create game rules input section. </li>
                                            </ol>

                                        </li>
                                        <li>Create categories input section. </li>
                                        <li>Create an option to add images. </li>
                                        <li>Create input for price. </li>
                                        <li>Create availability selection.</li>
                                    </ol>
                                </li>
                                <li>Create Update feature.
                                    <ol>
                                        <li>Create an option to edit game images.</li>
                                        <li>Create an option to update the game price.</li>
                                        <li> Create an option to update availability status.</li>
                                    </ol>
                                </li>
                                <li>Create a feature to remove the board game.</li>
                            </ol>
                        </li>

                        <div className='planMargin'>
                            <p><b>Plan 1:</b> Do 1.1, 1.2, 1.3 in any order.</p>
                            <p><b>Plan 1.1:</b> Do 1.1.1, … ,1.1.5 in any order.</p>
                            <p><b>Plan 1.1.1:</b> Do 1.1.1.1, 1.1.1.2, 1.1.1.3 in any order.</p>
                            <p> <b>Plan 1.2:</b> Do 1.2.1, 1.2.2, 1.2.3 in any order.</p>
                        </div>
                        <div className='goalMargin'><b>Goal:</b>Develop an intuitive search and browsing feature that allows users to effortlessly explore and find board games, along with filtering and sorting options. </div>

                        <li value={2}>Search and browse the board games.
                            <ol>
                                <li>Implement the search feature.
                                    <ol>
                                        <li>Write a search algorithm. </li>
                                        <li>Design the search bar. </li>
                                        <li>mplement button to trigger search.  </li>
                                        <li>Link the search button to the search algorithm. </li>
                                    </ol>
                                </li>
                                <li>Implement the filters.
                                    <ol>
                                        <li>Define filter categories. </li>
                                        <li>Write an algorithm for filtering. </li>
                                        <li>Design filter menu.</li>
                                    </ol>
                                </li>
                                <li>Implement sorting features.
                                    <ol>
                                        <li> List sorting options. </li>
                                        <li>Update search results based on sorting. </li>
                                    </ol>
                                </li>
                                <li>Display the results in grid view.
                                    <ol>
                                        <li>Fetch image and game title. </li>
                                        <li>Display information on a card. </li>
                                        <li>Link card with game details page. </li>
                                    </ol>

                                </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 2:</b> Do 2.1 – 2.2 - 2.3 – 2.4, in that order. </p>

                            <p><b>Plan 2.1:</b> Do 2.1.1 through 2.1.4, in that order. </p>

                            <p><b>Plan 2.2:</b> Do 2.2.1 - 2.2.2 – 2.2.3, in that order. </p>

                            <p><b>Plan 2.3:</b> Do 2.3.1 – 2.3.2 in that order. </p>

                            <p><b>Plan 2.4:</b> Do 2.4.1 – 2.4.2 – 2.4.3, in that order. </p>
                        </div>
                        <div className='goalMargin'><b>Goal:</b>Design a booking and reservation system, ensuring efficient management of game availability, rentals, and reservations. </div>
                        <li>Booking and reservation system.
                            <ol>
                                <li>Implement the availability feature.
                                    <ol>
                                        <li>Create a calendar view to show the availability. </li>
                                        <li>Write algorithm to show the availability. </li>
                                        <li>Color code the available and unavailable dates. </li>
                                        <li>Create a select dates feature.
                                            <ol>
                                                <li>Create start date input field. </li>
                                                <li>Create end date input field. </li>
                                                <li>Add functionality to block the unavailable dates. </li>
                                            </ol>
                                        </li>
                                    </ol>

                                </li>
                                <li>Implement the cart feature.
                                    <ol>
                                        <li>Create a button “add to cart.” </li>
                                        <li>Write algorithm to add the item to the cart. </li>
                                        <li>Create a button “remove” to remove from cart. </li>
                                        <li>Write an algorithm to remove the appropriate item from cart. </li>
                                    </ol>
                                </li>
                                <li>Create payment gateway.
                                    <ol>
                                        <li>Create a form.
                                            <ol>
                                                <li>Create ‘name on card’ input field. </li>
                                                <li>Create ‘card number’ input field. </li>
                                                <li>Create ‘expiry date’ input field. </li>
                                                <li>Create ‘cvv’ input field. </li>
                                                <li>Create ‘pin code’ input field. </li>
                                            </ol>
                                        </li>
                                        <li>Create a button to submit. </li>
                                        <li>Create a display for payment status. </li>
                                    </ol>
                                </li>
                                <li>Create a function that adds the reservation to active rentals. </li>
                            </ol>

                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 3:</b> Do 3.1, 3.2, 3.3, 3.4, in any order. </p>
                            <p><b>Plan 3.1:</b> Do 3.1.1 through 3.1.4, in that order. </p>
                            <p><b>Plan 3.1.4:</b> Do 3.1.4.1 through 3.1.4.3, in that order. </p>
                            <p><b>Plan 3.2:</b> Do 3.2.1 through 3.2.4, in that order. </p>
                            <p><b>Plan 3.3:</b> Do 3.3.1 through 3.3.3, in that order. </p>
                            <p><b>Plan 3.3.1:</b> Do 3.3.1.1 through 3.3.1.5, in that order.  </p>
                        </div>
                        <div className='goalMargin'><b>Goal:</b>Design an effective review system to encourage user engagement to gather valuable insights, enhancing the customer experience and building trust among our users. </div>
                        <li>Feedback and reviews system.
                            <ol>
                                <li>Create a review form.
                                    <ol>
                                        <li>Create a rating feature.</li>
                                        <li>Create ‘description section’ input field. </li>
                                        <li>Provide option to add images. </li>
                                        <li>Create the submit button. </li>
                                    </ol>
                                </li>
                                <li>Create a display for reviews.
                                    <ol>
                                        <li>Calculate and display average rating. </li>
                                        <li>Create a display for individual reviews. </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 4:</b> Do 4.1 – 4.2, in that order. </p>
                            <p><b>Plan 4.1:</b> Do 4.1.1, 4.1.2, 4.1.3 in any order. Then do 4.1.4 </p>
                            <p><b>Plan 4.2:</b> Do 4.2.1, 4.2.2 in any order. </p>
                        </div>

                        <div className='goalMargin'><b>Goal:</b>Create a user profile page where individuals can store their personal information and easily track both their past rental history and current active rentals. </div>
                        <li>Manage user accounts and profiles.
                            <ol>
                                <li>Create a personal details section.
                                    <ol>
                                        <li>Create ‘add username’ input field. </li>
                                        <li>Create ‘add user email address’ field. </li>
                                        <li>Create ‘add the user picture’ input field.</li>
                                    </ol>
                                </li>
                                <li>Orders
                                    <ol>
                                        <li>Create active rental sections.
                                            <ol>
                                                <li>List the current rental item. </li>
                                                <li>List the due dates. </li>
                                            </ol>
                                        </li>
                                        <li>Create a history section.
                                            <ol>
                                                <li>Add the list of past purchases. </li>
                                                <li>Create a function that includes the rental duration. </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <div className='planMargin'>
                            <p><b>Plan 5:</b> Do 5.1, 5.2 in any order.  </p>
                            <p><b>Plan 5.1:</b> Do 5.1.1, 5.1.2, 5.1.3 in any order.  </p>
                            <p><b>Plan 5.2:</b> Do 5.2.1, 5.2.2 in any order.  </p>
                            <p><b>Plan 5.2.1:</b> Do 5.2.1.1 – 5.2.1.2 in that order.  </p>
                            <p><b>Plan 5.2.2:</b> Do 5.2.2.1 – 5.2.2.2 in that order. </p>
                        </div>
                    </ol>
                </p>
            </Typography>
        </>
    )
}

export default TaskAnalysis;
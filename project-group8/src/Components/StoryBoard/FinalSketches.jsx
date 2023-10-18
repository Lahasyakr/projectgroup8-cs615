import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image1 from "../../images/finalsketches/StoryBoard1.png";
import Image2 from "../../images/finalsketches/StoryBoard2.png";
import Image3 from "../../images/finalsketches/StoryBoard3.png";
import Image4 from "../../images/finalsketches/StoryBoard4.png";
import Image5 from "../../images/finalsketches/StoryBoard5.png";
import Image6 from "../../images/finalsketches/StoryBoard6.png";
import Image7 from "../../images/finalsketches/StoryBoard7.png";

function FinalSketches() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1" color="textPrimary" align="left">
          <p>
            <b>1. ‘Log in’ and ‘Add new game’ feature: </b>
            <br />
            All 3 members have created storyboards for this feature almost the
            same way. Admin logs in with her credentials. Uses the ‘Add new
            game’ button, enters details and posts the game on the site.
          </p>
        </Typography>
        <br></br>
        <img src={Image1} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body9" color="textPrimary" align="left">
          <p>
            <b>2. Updating game details: </b>
            <br />
            We chose this design as 2 of our teammates suggested pop ups for
            displaying success prompts. This idea over a single line display(in
            the 3rd team members’ storyboard, suggests displaying the success
            message in a thin line over the table) seems like a better option
            because the single line message way of displaying makes it difficult
            for admin to understand that the task was completed, with ample
            information on the page already existing.
          </p>
        </Typography>

        <br></br>
        <img src={Image2} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body3" color="textPrimary" align="left">
          <p>
            <b>3. Manage orders (Admin’s POV) : </b>
            <br />
            This storyboard has a very nice idea of keeping an option to simply
            update the order status in the ‘Manage orders’ page itself. It aids
            the admin to make lesser clicks to achieve the task. The rest of the
            designs navigated the user to multiple inner pages.
          </p>
        </Typography>

        <br></br>
        <img src={Image3} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body4" color="textPrimary" align="left">
          <p>
            <b>4. Filter/Sort feature to refine search: </b>
            <br />
            This storyboard gives the idea of having a drop down for filter
            while another suggests keeping the filters in a side menu on the
            left. We chose this over the other as we concluded that keeping a
            drop down will avoid having clutter on the screen. If the filter in
            a side menu is always constant on the screen, it will make it
            overwhelming for the user and drives less focus on the product. The
            ‘sort’ feature on all our storyboards used a drop
          </p>
        </Typography>

        <br></br>
        <img src={Image4} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body5" color="textPrimary" align="left">
          <p>
            <b>5. Add to cart: </b>
            <br />
            All 3 of us have implemented more or less the same way for this
            feature. Although, we chose this sketch for ‘Add to cart’ feature as
            2 our members had implemented the ‘remove from cart’ feature in
            addition to the common aspects and felt it is right to have it on
            our site as well to help the customers easily optimize their cart
            the way they want.
          </p>
        </Typography>

        <br></br>
        <img src={Image5} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body6" color="textPrimary" align="left">
          <p>
            <b>6. Add review: </b>
            <br />
            We chose this design over the others since there was one additional
            feature of uploading images supporting the customers’ review. The
            idea of rating with stars makes it easy for the user to categorize
            their experience. Supporting description and images shall enhance
            their review
          </p>
        </Typography>

        <br></br>
        <img src={Image6} alt="story board" height={"100%"} width={"70%"} />
        <br></br>

        <Typography variant="body7" color="textPrimary" align="left">
          <p>
            <b>7. Manage User(Customer) Profile: </b>
            <br />
            This design suggests interactive card display and takes navigation
            to respective pages to update users’ profile details, access their
            past and current order details in a simplified fashion. The other
            designs had an integrated view with pop ups that could turn out to
            be potentially inconvenient for the customer to view it on temporary
            pop ups.{" "}
          </p>
        </Typography>
        <br></br>
        <img src={Image7} alt="story board" height={"100%"} width={"70%"} />
        <br></br>
      </Grid>
    </>
  );
}

export default FinalSketches;

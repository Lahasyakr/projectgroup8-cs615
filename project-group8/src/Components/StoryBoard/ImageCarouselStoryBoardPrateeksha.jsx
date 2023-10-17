import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import P_trial_1 from "../../images/Storyboard trial - Prateeksha/P_trial_1.JPG";
import P_trial_2 from "../../images/Storyboard trial - Prateeksha/P_trial_2.JPG";
import P_trial_3 from "../../images/Storyboard trial - Prateeksha/P_trial_3.JPG";
import P_trial_4 from "../../images/Storyboard trial - Prateeksha/P_trial_4.JPG";
import P_trial_5 from "../../images/Storyboard trial - Prateeksha/P_trial_5.JPG";
import P_trial_5a from "../../images/Storyboard trial - Prateeksha/P_trial_5a.JPG";
import P_trial_6 from "../../images/Storyboard trial - Prateeksha/P_trial_6.JPG";
import P_trial_6a from "../../images/Storyboard trial - Prateeksha/P_trial_6a.JPG";
import P_trial_7 from "../../images/Storyboard trial - Prateeksha/P_trial_7.JPG";
import P_trial_8 from "../../images/Storyboard trial - Prateeksha/P_trial_8.JPG";
import P_trial_9 from "../../images/Storyboard trial - Prateeksha/P_trial_9.JPG";
import P_trial_10 from "../../images/Storyboard trial - Prateeksha/P_trial_10.JPG";
import P_trial_10a from "../../images/Storyboard trial - Prateeksha/P_trial_10a.JPG";
import P_trial_11 from "../../images/Storyboard trial - Prateeksha/P_trial_11.JPG";
import P_trial_12 from "../../images/Storyboard trial - Prateeksha/P_trial_12.JPG";
import P_trial_13 from "../../images/Storyboard trial - Prateeksha/P_trial_13.JPG";

function ImageCarouselStoryBoardPrateeksha() {
  
  return (
    <Carousel infiniteLoop={true} showArrows={true} useKeyboardArrows={true}>
      <div>
        <img src={P_trial_1} alt='StoryBoard1'/>
      </div>
      <div>
        <img src={P_trial_2} alt='StoryBoard2'/>
      </div>
      <div>
        <img src={P_trial_3} alt='StoryBoard3'/>
      </div>
      <div>
        <img src={P_trial_4} alt='StoryBoard4'/>
      </div>
      <div>
        <img src={P_trial_5} alt='StoryBoard5'/>
      </div>
      <div>
        <img src={P_trial_5a} alt='StoryBoard5a'/>
      </div>
      <div>
        <img src={P_trial_6} alt='StoryBoard6'/>
      </div>
      <div>
        <img src={P_trial_6a} alt='StoryBoard6a'/>
      </div><div>
        <img src={P_trial_7} alt='StoryBoard7'/>
      </div>
      <div>
        <img src={P_trial_8} alt='StoryBoard8'/>
      </div>
      <div>
        <img src={P_trial_9} alt='StoryBoard9'/>
      </div>
      <div>
        <img src={P_trial_10} alt='StoryBoard10'/>
      </div>
      <div>
        <img src={P_trial_10a} alt='StoryBoard10a'/>
      </div><div>
        <img src={P_trial_11} alt='StoryBoard11'/>
      </div><div>
        <img src={P_trial_12} alt='StoryBoard12'/>
      </div><div>
        <img src={P_trial_13} alt='StoryBoard13'/>
      </div>
    </Carousel>
  );
}

export default ImageCarouselStoryBoardPrateeksha;

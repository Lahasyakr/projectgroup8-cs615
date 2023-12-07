import * as  React from 'react';
import Grid from '@mui/material/Grid';
import CardComponent from './CardComponent';
import '../CSS/options.css';
import projectpropsal from "../images/projectproposal.png"
import team from "../images/team.png";
import UTDAnalysis from "../images/UTDAnalysis.png";
import storyboardicon from '../images/storyboardicon.png'
import PrototypeIcon from '../images/PrototypeIcon.png'
import computerProto from '../images/computerProto.png'
import finalImp from '../images/final_implementation.jpg'
import '../CSS/slidingcard.css';
import { useNavigate } from 'react-router';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Options() {
    const navigate = useNavigate();
    const CardNew = (props) => (
        <div className="card" sx={{ maxWidth: "12rem", height: "18rem" }} onClick={() => { navigate(props.redirect) }}>
            <Card sx={{ maxWidth: "12rem", height: "18rem" }} className='carcomponent'>
                <Link to={props.redirect}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={props.img}
                            alt="loading soon"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.idea}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
    return (
       
            <div className='container'>
                <div className="cards-container">
                    <CardNew img={team} title={"Team Members"} idea={"Meet our team"} redirect="/ourteam" />
                    <CardNew img={projectpropsal} title={"Project Proposal"} idea={"High-Level Project Overview"} redirect="/project_proposal" />

                    <CardNew img={UTDAnalysis} title={"Analysis"} idea={"Analyse the project components"} redirect="/analysis" />
                    <CardNew img={storyboardicon} title={"Storyboards"} idea={"Storyboards and Sketches"} redirect="/storyboardAndSketches" />
                    <CardNew img={PrototypeIcon} title={"Prototypes"} idea={"Prototypes & Observations"} redirect="/prototypes" />
                    <CardNew img={computerProto} title={"Computer Prototype"} idea={"Computer Prototype"} redirect="/computerPrototype" />
                    <CardNew img={finalImp} title={"Final Implementation"} idea={"Implememntation of Prototype"} redirect="/finalImplementation" />
                </div>
            </div>

    );
}

export default Options;

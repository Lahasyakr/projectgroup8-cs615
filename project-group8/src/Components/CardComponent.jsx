import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardComponent(props) {


  return (
    <Card sx={{ maxWidth: "12rem", height:"18rem" }} className='carcomponent'>
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

  );
}


export default CardComponent;
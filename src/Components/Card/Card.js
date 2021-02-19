import React from "react";
import Container from "../../StyledComponents/Container";
import Text from "../../StyledComponents/Text";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../../App.css"
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import Rating from "@material-ui/lab/Rating";
import { red } from '@material-ui/core/colors';



// <img style={{width:"250px"}} src= { `https://image.tmdb.org/t/p/w185${props.img}`}></img>

const useStyles = makeStyles({
  Card: {
    maxWidth: 275,
    backgroundColor: "rgba(32, 31, 36, 0.27);",
    margin: "20px 10px 10px 10px",
  },
});

const Home = (props) => {
  const classes = useStyles();
  
  let string = props.desc;
  if (string.length > 150) {
    string = string.substring(0, 149) + "...";
  }

  return (
      <Container className="Card">
  <Card onClick={()=>props.modal(props.id, props.desc, props.name, props.raiting, props.genres)} className={classes.Card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="390"
          image={`https://image.tmdb.org/t/p/w185${props.img}`}
        />
        <CardContent>
          <Container
            height="60px"
            justifyContent="flex-start"
            alignItems="center"
          >
            <h2 style={{ color: "white", fontSize: "20px" }}>{props.name}</h2>
          </Container>
          <Rating name="read-only" value={props.raiting} readOnly />
          <Container height="70px">
            <Text type="p" margin="16px 0 0 0" color="gray" size="medium">
              {string}
            </Text>
          </Container>
        </CardContent>
        <Container position="absolute" top="30%" left="40%" display="flex" justifyContent="center" padding="0 0 16px 16px" margin="0 0 0 0">
          <PlayArrowRoundedIcon  style={{ color: red[500] }}/>
             
        </Container>
      </CardActionArea>
    </Card>
      </Container>
     
   
   
  );
};

export default Home;

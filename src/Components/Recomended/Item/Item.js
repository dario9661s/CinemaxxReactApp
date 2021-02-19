import React from "react";
import classes from "./Item.module.css";
import Container from "../../../StyledComponents/Container";
import Text from "../../../StyledComponents/Text";
import Rating from "@material-ui/lab/Rating";

const Recomended = (props) => {
 
    let string = props.desc;
  if (string.length > 220) {
    string = string.substring(0, 219) + "...";
  }

  return (
    <Container onClick={()=>props.modal(props.id, props.desc, props.title, props.raiting, props.genres, props.url)} className={classes.Container}>
      <img src={props.img} alt="img" />
      <Container>
        <Text type="h1" size="big">
          {props.title}
        </Text>
        <Rating name="read-only" value={props.raiting} readOnly />
        <Text color="gray" type="p" size="big">
          {string}
        </Text>
      </Container>
    </Container>
  );
};

export default Recomended;

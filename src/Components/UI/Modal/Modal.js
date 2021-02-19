import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import Container from "../../../StyledComponents/Container";
import axios from "axios";
import ReactPlayer from "react-player";
import Backdrop from "../Backdrop/Backdrop";
import Text from "../../../StyledComponents/Text";
import Rating from "@material-ui/lab/Rating";

const Modal = (props) => {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.num}/videos?api_key=2a66c85c6e4580a0b7adfeb4fabaae5a&language=en-US`
      )
      .then((res) => {
        if (res.data.results[0]) {
          setSearch(res.data.results[0].key);
        }
      });
  }, []);

  let aray = [];
  if (props.genreIds) {
    for (let a = 0; a < props.genreIds.length; a++) {
      aray.push(props.list.find((e) => e.id === props.genreIds[a]));
    }
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal}>
        <Container
          className={classes.Container}
          display="flex"
          justifyContent="space-between"
          flexWrap="noWrap"
          
        >
          <Container
          className={classes.Info}
            display="flex"
            flexDirection="column"
            width="50%"
            padding="0 2% 0 0"
          >
            <Text type="h1" size="big">
              {props.name}
            </Text>
            <Container display="flex" flexDirection="row">
              {aray.map((e, i) => {
                return (
                  <Text key = {i} type="h3" size="big" margin="0 5px 0 0">
                    {e.name}
                  </Text>
                );
              })}
            </Container>
            <Rating name="read-only" value={props.raiting} readOnly />
            <Text type="p" size="big" color="white">
              {props.desc}
            </Text>
            <Container  className={classes.Button}>
             
              <Text
                size="big"
                color="red"
                type="p"
                onClick={() => props.watch(props.name)}
              >
                Watch Movie
              </Text>
            </Container>
          </Container>
          <Container className={classes.Player}>
          { props.recomended ? <ReactPlayer url={`//www.youtube.com/watch?v=${props.url}`} /> : <ReactPlayer url={`//www.youtube.com/watch?v=${search}`} />}
          </Container>
         
        </Container>
      </div>
    </React.Fragment>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);

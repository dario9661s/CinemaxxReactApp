import React from "react";
import "../App.css";
import Container from "../StyledComponents/Container";

import Top from "../Components/Top/Top";
import Recomended from "../Components/Recomended/Recomended";

const Home = (props) => {
  let prop = "top_rated";
  let head = "TOP RATED MOVIES";

  

  if (props.location.pathname === "/popular") {
    prop = "popular";
    head = "POPULAR MOVIES";
  } else if (props.location.pathname === "/upcoming") {
    prop = "upcoming";
    head = "UPCOMING MOVIES";
  } else if (props.location.pathname === "/latest") {
    prop = "latest";
  }

  return (
    <Container display="flex" flexDirection="column">
      <Recomended />
      <Top movies={prop} heading={head} />
    </Container>
  );
};

export default Home;

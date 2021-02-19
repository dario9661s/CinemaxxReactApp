import React, { useEffect, useState } from "react";
import "../../App.css";
import Container from "../../StyledComponents/Container";
import axios from "axios";
import Card from "../Card/Card";
import Modal from "../UI/Modal/Modal";
import Text from "../../StyledComponents/Text"

const Top = (props) => {
  const [top, setTop] = useState(null);
  const [purchasing, setPurchasing] = useState(false);
  const [genreList, setGenreList] = useState(null);

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const goToWebsite = (e) => {
    const string = e.replace(" ", "+");
    window.location = `https://www.google.com/search?q=watch${string}&oq=watch`;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movies}?api_key=2a66c85c6e4580a0b7adfeb4fabaae5a&language=en-US&page=1`
      )
      .then((res) => {
        setTop(res.data.results);
      });
  }, [props.movies]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2a66c85c6e4580a0b7adfeb4fabaae5a&language=en-US"
      )
      .then((res) => {
        setGenreList(res.data.genres);
      });
  }, []);

  if (top) {
    return (
      <Container>
        <Container
          display="flex"
          justifyContent="center"
          margin="40px 0 20px 0"
        >
          <Text
            
            type="h1"
            size="big"
          >
            {props.heading}
          </Text>
        </Container>
        <Container
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          width="100%"
        >
          {top.map((e, i) => {
            return (
              <Container key={i}>
                <Card
                  modal={(id, descr, name, rate, genre) =>
                    setPurchasing({
                      ...purchasing,
                      num: id,
                      desc: descr,
                      name: name,
                      raiting: rate,
                      genres: genre,
                    })
                  }
                  img={e.poster_path}
                  name={e.original_title}
                  desc={e.overview}
                  raiting={e.vote_average}
                  id={e.id}
                  genres={e.genre_ids}
                />
              </Container>
            );
          })}
        </Container>
        {purchasing ? (
          <Modal
            watch={(e) => goToWebsite(e)}
            list={genreList}
            num={purchasing.num}
            desc={purchasing.desc}
            name={purchasing.name}
            show={purchasing}
            raiting={purchasing.raiting}
            genreIds={purchasing.genres}
            modalClosed={purchaseCancelHandler}
          />
        ) : null}
      </Container>
    );
  } else {
    return <p>loading</p>;
  }
};
export default Top;

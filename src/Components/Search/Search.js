import React, { useState, useEffect } from "react";
import Container from "../../StyledComponents/Container";
import Text from "../../StyledComponents/Text";
import "../../App.css";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [searchRes, setSearchRes] = useState([]);
  const [show, setShow] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [genreList, setGenreList] = useState(null);
  const search = (event) => {
    setShow(true);
    if (event.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${event}&api_key=2a66c85c6e4580a0b7adfeb4fabaae5a&language=en-US&page=1&include_adult=false`
        )
        .then((res) => {
          setSearchRes(res.data.results);
        });
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2a66c85c6e4580a0b7adfeb4fabaae5a&language=en-US"
      )
      .then((res) => {
        setGenreList(res.data.genres);
      });
  }, []);
  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  const goToWebsite = (e) => {
    const string = e.replace(" ", "+");
    window.location = `https://www.google.com/search?q=watch${string}&oq=watch`;
  };
  console.log(searchRes);

  return (
    <Container
      className="SearchContainer"
      display="flex"
      flexDirection="column"
    >
      <Container className="Search">
        {/* <input type="search" onChange={(event) => search(event.target.value)}  /> */}
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
             onChange={(event) => search(event.target.value)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
      </Container>
      <Container
        height="400px"
 
        display="flex"
        justifyContent="center"
        flexDirection="column"
        className="SearchRes"
        margin="3px 0 0 0"
      >
        {show
          ? searchRes.map((e, i) => {
              return (
                <Container
                  key={i}
                  onClick={() =>
                    setPurchasing({
                      ...purchasing,
                      num: e.id,
                      desc: e.overview,
                      name: e.title,
                      raiting: e.vote_average,
                      genres: e.genre_ids,
                      // url:url
                    })
                  }
                  height="50px"
                  cursor="pointer"
                  opacity="0.8"
                  margin="1px 0 1px 0"
                  backgroundColor="gray"
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  padding="0 0 0 5px"
                >
                  <Text type="p" size="big" color="white">
                    {e.original_title}
                  </Text>
                </Container>
              );
            })
          : null}
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
};

export default Search;

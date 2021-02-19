import React, { useState } from "react";
import classes from "./Recomended.module.css";
import Item from "./Item/Item";
import Modal from "../UI/Modal/Modal";
import Text from "../../StyledComponents/Text";
import Container from "../../StyledComponents/Container";

const Recomended = (props) => {
  const [recomended, setRecomended] = useState([
    {
      img:
        "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Endgame-IMAX.jpg",
      desc:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      raiting: 8.3,
      title: "Avengers End Game",
      url: "TcMBFSGVi1c",
    },
    {
      img:
        "https://cms.qz.com/wp-content/uploads/2018/02/black-panther-e1513870292357.jpg?quality=75&strip=all&w=1600&h=902",
      desc:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      raiting: 7.3,
      title: "Black Panther",
      url: "xjDjIWPwcPU",
    },
    {
      img:
        "https://specials-images.forbesimg.com/imageserve/5dd7430b2c886a0007ecbfe0/960x0.jpg?cropX1=0&cropX2=677&cropY1=0&cropY2=381",
      desc:
        "When renowned crime novelist Harlan Thrombey (Christopher Plummer) is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc (Daniel Craig) is mysteriously enlisted to investigate. From Harlan's disfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death. Written by Lionsgate",
      raiting: 7.3,
      title: "Knives Out",
      url: "xi-1NchUqMA",
    },
    {
      img:
        "https://images.squarespace-cdn.com/content/587e54ab3e00becc5a895fbf/1534252795286-AEEBQTOO745O1ABF58X6/Mission+Impossible+2.jpg?content-type=image%2Fjpeg",
      desc:
        "Two years after Ethan Hunt had successfully captured Solomon Lane, the remnants of the Syndicate have reformed into another organization called the Apostles. Under the leadership of a mysterious fundamentalist known only as John Lark, the organization is planning on acquiring three plutonium cores. Ethan and his team are sent to Berlin to intercept them, but the mission fails when Ethan saves Luther and the Apostles escape with the plutonium. With CIA agent August Walker joining the team, Ethan and his allies must now find the plutonium cores before it's too late.",
      raiting: 7.3,
      title: "Fallout Mission Imposible",
      url: "wb49-oV0F78",
    },
    {
      img:
        "https://deadline.com/wp-content/uploads/2020/11/One-Night-in-Miami.jpg?w=681&h=383&crop=1",
      desc:
        "On one incredible night in 1964, four icons of sports, music, and activism gathered to celebrate one of the biggest upsets in boxing history. When underdog Cassius Clay, soon to be called Muhammad Ali, (Eli Goree), defeats heavy weight champion Sonny Liston at the Miami Convention Hall, Clay memorialized the event with three of his friends: Malcolm X (Kingsley Ben-Adir), Sam Cooke (Leslie Odom Jr.) and Jim Brown (Aldis Hodge).",
      raiting: 7.3,
      title: "One Night In Miami",
      url: "ZprXMxKg--w",
    },
  ]);
  const [purchasing, setPurchasing] = useState(false);
  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  const goToWebsite = (e) => {
    const string = e.replace(" ", "+");
    window.location = `https://www.google.com/search?q=watch${string}&oq=watch`;
  };
  return (
    <div>
      <Container display = 'flex' justifyContent="center" alignItems="ceneter" margin="60px 0 0 0">

        <Text
          
          type="h1"
          size="big"
        >
          RECOMENDED MOVIES
        </Text>
      </Container>

      <div className={classes.container}>
        {recomended.map((e, i) => {
          return (
            <div key={i} className={classes.item}>
              <Item
                modal={(id, descr, name, rate, genre, url) =>
                  setPurchasing({
                    ...purchasing,
                    num: id,
                    desc: descr,
                    name: name,
                    raiting: rate,
                    genres: genre,
                    url: url,
                  })
                }
                desc={e.desc}
                raiting={e.raiting}
                title={e.title}
                img={e.img}
                url={e.url}
              />
            </div>
          );
        })}
        {purchasing ? (
          <Modal
            recomended
            // watch={(e) => goToWebsite(e)}
            // list={genreList}
            desc={purchasing.desc}
            name={purchasing.name}
            show={purchasing}
            raiting={purchasing.raiting}
            // genreIds={purchasing.genres}
            modalClosed={purchaseCancelHandler}
            url={purchasing.url}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Recomended;

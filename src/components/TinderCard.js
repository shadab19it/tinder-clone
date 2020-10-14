import React, { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.scss";
import axios from "../axios";

const TinderCards = () => {
  const [people, setPeople] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/tinder/cards");
      setPeople(res.data);
    };
    fetchData();
  }, []);

  const swiped = (dir, nameToDelete) => {
    console.log("You swiped: " + nameToDelete);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className='tinderCard__wrapper'>
      <div className='tinderCard__Container'>
        {people.map((p, i) => (
          <TinderCard
            key={p.name}
            onSwipe={(dir) => swiped(dir, p.name)}
            className='swipe'
            onCardLeftScreen={() => onCardLeftScreen(p.name)}
            preventSwipe={["up", "down"]}>
            <div className='card' style={{ backgroundImage: `url(${p.imgUrl})` }}>
              <h3 className='person__name'>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

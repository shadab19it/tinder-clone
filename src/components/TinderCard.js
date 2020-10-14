import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.scss";

const TinderCards = () => {
  const [people, setPeople] = React.useState([
    {
      name: "Elon Musk",
      url:
        "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "Mark Zukerburg",
      url: "https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
    },
    {
      name: "Bill Gates",
      url: "https://yt3.ggpht.com/a/AATXAJzMvsKB7s_HIEoAvhxTnv5uwK5eyl74eXVTDTib=s900-c-k-c0xffffffff-no-rj-mo",
    },
  ]);

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
            <div className='card' style={{ backgroundImage: `url(${p.url})` }}>
              <h3 className='person__name'>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

import React from "react";
import "./App.scss";
import Header from "./components/Header";
import TinderCard from "./components/TinderCard";
import SwipeButton from "./components/SwipeButton";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <TinderCard />
      <SwipeButton />
    </div>
  );
};

export default App;

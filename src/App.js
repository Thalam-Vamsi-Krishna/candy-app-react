import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCandy from "./components/Candies/AddCandy";
import CandyList from "./components/Candies/CandyList";
import Header from "./components/Layout/Header";
import CartProvider from "./components/Store/CartProvider";

const App = () => {
  const [candies, setCandies] = useState([]);
  const addCandyHandler = (candy) => {
    setCandies((prevCandies) => [...prevCandies, candy]);
  };
  return (
    <CartProvider>
      <Header />
      <AddCandy onAddCandy={addCandyHandler} />
      <CandyList candies={candies} />
    </CartProvider>
  );
};

export default App;

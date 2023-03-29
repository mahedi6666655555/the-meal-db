import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import ".//Valena.css";

const Shope = (props) => {
  let [sard, setCard] = useState([]);

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCard(data.meals));
  }, []);

  // console.log(props.get1);
  //   console.log(sard);
  return (
    <div className="continer">
      <div className=" grid grid-cols-3 gap-5">
        {sard.map((res) => (
          <Card key={res.idMeal} product={res}></Card>
        ))}
      </div>
      {/* this card is for rght side */}
      <div className=" shope-right  ">
        <h1 className="text-center  pt-4 text-2xl font-bold">Your cart</h1>
      </div>
    </div>
  );
};

export default Shope;

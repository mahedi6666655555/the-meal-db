import React, { useEffect, useState } from "react";
import Card from "../card/Card";

import ".//Valena.css";
const Shope = () => {
  let [sard, setCard] = useState([]);

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCard(data.meals));
  }, []);

  //   console.log(sard);
  return (
    <div className="continer">
      <div className="bg-red-400 h-20">
        {sard.map((res) => (
          <Card product={res}></Card>
        ))}
      </div>
      {/* this card is for rght side */}
      <div className=" h-20 bg-green-400"></div>
    </div>
  );
};

export default Shope;

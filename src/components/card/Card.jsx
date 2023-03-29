import React from "react";
import './card.css'
const Card = (props) => {
  let { strMealThumb,strTags, strArea, strCategory } = props.product;
  console.log(strCategory);
  return (
    <div className="w-96 mt-5 m-2 h-[500px] container2">
      <div>
        <img className="rounded-lg h-72 w-full  " src={strMealThumb} alt="" />
      </div>
      <div className="pl-5 pt-5">
        <h1 className="text-2xl font-bold pb-2" >{strArea}</h1>
        <h1 className="text-2xl font-bold pb-2" >{strCategory}</h1>
        <h1 className="text-2xl font-bold pb-2" >{strTags}</h1>
        <div>
            <button className="py-3 px-7 bg-gray-600  rounded-lg mt-2 text-white">add to cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default Card;

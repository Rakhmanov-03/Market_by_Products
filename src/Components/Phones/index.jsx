import React, { useState } from "react";
import Card from "../Card";
import "./index.css";

function Phones(props) {
  const { phones } = props;
  const [sortedPhones, setSortedPhones] = useState([...phones.products]);
  const [sortOrder, setSortOrder] = useState(""); // Possible values: "", "ratingDown", "ratingUp", "priceDown", "priceUp"

  const sortPhones = (order) => {
    let sortedResult = [...phones.products];

    if (order === "ratingDown") {
      sortedResult.sort((a, b) => b.rating - a.rating);
    } else if (order === "ratingUp") {
      sortedResult.sort((a, b) => a.rating - b.rating);
    } else if (order === "priceDown") {
      sortedResult.sort((a, b) => b.price - a.price);
    } else if (order === "priceUp") {
      sortedResult.sort((a, b) => a.price - b.price);
    }

    setSortedPhones(sortedResult);
    setSortOrder(order);
  };

  const resetSorting = () => {
    setSortedPhones([...phones.products]);
    setSortOrder("");
  };

  return (
    <div>
      <div className="header">
        <h1>Market by / Products</h1>
        <div className="buttons">
          <button onClick={() => sortPhones("ratingDown")}>Rating down</button>
          <button onClick={() => sortPhones("ratingUp")}>
            Rating to the top
          </button>
          <button onClick={() => sortPhones("priceDown")}>Price down</button>
          <button onClick={() => sortPhones("priceUp")}>
            Price to the top
          </button>
          <button onClick={resetSorting}>Default</button>
        </div>
      </div>

      {/* Render sorted phones */}
      <div className="phones-wrapper">
        {sortedPhones.map((phone, index) => (
          <Card key={index} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default Phones;

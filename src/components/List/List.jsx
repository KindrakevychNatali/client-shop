import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = ({ products, loading, error }) => {
  return (
    <div className="list">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        products?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;

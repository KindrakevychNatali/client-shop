import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: subCategoriesData, loading: subCategoriesLoading, error: subCategoriesError } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const { data: productsData, loading: productsLoading, error: productsError } = useFetch(
    `/products?populate=*`
  );

  useEffect(() => {
    if (productsData) {
      filterProducts();
    }
  }, [selectedSubCats, maxPrice, sort, productsData]);

  const filterProducts = () => {
    if (productsData) {
      let filtered = productsData;

      if (selectedSubCats.length > 0) {
        filtered = filtered.filter(product =>
          selectedSubCats.includes(product.attributes.sub_category.data.id.toString())
        );
      }

      filtered = filtered.filter(product => product.attributes.price <= maxPrice);

      if (sort) {
        filtered.sort((a, b) => sort === "asc" ? a.attributes.price - b.attributes.price : b.attributes.price - a.attributes.price);
      }

      setFilteredProducts(filtered);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {subCategoriesLoading ? (
            <p>Loading...</p>
          ) : subCategoriesError ? (
            <p>Error: {subCategoriesError.message}</p>
          ) : (
            subCategoriesData?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          )}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List products={filteredProducts} loading={productsLoading} error={productsError} />
      </div>
    </div>
  );
};

export default Products;

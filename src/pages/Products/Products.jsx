import React from 'react';
import "./Products.scss";
import List from "../../components/List/List";

export default function Products() {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2 className="">Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Accessories</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='4' value={4} />
            <label htmlFor="4">Jumpers & Cardigans</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='5' value={5} />
            <label htmlFor="5">Shirts & Blouses</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='6' value={6} />
            <label htmlFor="6">Coats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='7' value={7} />
            <label htmlFor="7">Dresses</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='8' value={8} />
            <label htmlFor="8">Trousers</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='9' value={9} />
            <label htmlFor="9">Nightwear</label>
          </div>
        </div>
        <div className="filterItem">
            <h2 className="">Filter by price</h2>
            <div className="inputItem">
               <span>0</span>
                <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
               <span>{maxPrice}</span>
            </div>
        </div>
        <div className="filterItem">
          <h2 className="">Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name="price" className="" onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name="price" className="" onChange={(e) => setSort("desc")}/>
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
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

import { useState, useEffect } from "react";
import { getCategories } from "../apis/categoryApi";
import card_1 from "../images/icon-1.png";
import card_2 from "../images/icon-2.png";
import card_3 from "../images/icon-3.png";
import card_4 from "../images/icon-4.png";
import card_5 from "../images/icon-5.png";
import card_6 from "../images/icon-6.png";

import { Link } from "react-router-dom";

const Cards = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = async () => {
    const res = await getCategories();
    // console.log(res);
    setCategories(res.data.category);
  };

  const imageUrls = [
    card_1,
    card_2,
    card_3,
    card_4,
    card_5,
    card_6,
    // Add more image URLs as needed
  ];

  return (
    <div>
      <div className="card-container">
        <h1 className="heading">letMe Categories</h1>

        <div className="card-box-container">
          {categories.map((item, index) => (
            <div className="box" key={item._id}>
              <Link to="">
                {" "}
                <img src={imageUrls[index]} alt="Cards" />
              </Link>
              <h3>
                <Link to="">{item.categoryName}</Link>
              </h3>
              <p>{item.categoryDesc.substring(0, 100)}</p>
              <Link to={`/threadlist/${item._id}`} className="btn">
                read more
              </Link>
            </div>
          ))}
        </div>

        <div className="card-box-container"></div>
        <div className="card-box-container"></div>
      </div>
    </div>
  );
};

export default Cards;

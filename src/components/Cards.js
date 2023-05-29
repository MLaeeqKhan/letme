import card1 from "../images/icon-1.png";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = [
    {
      category: "react",
      id: 1,
    },
    {
      category: "python",
      id: 2,
    },
    {
      category: "python",
      id: 2,
    },
  ];
  return (
    <div>
      <div className="card-container">
        <h1 className="heading">letMe Categories</h1>

        <div className="card-box-container">
          {data.map((item) => (
            <div className="box">
              <Link to="">
                {" "}
                <img src={card1} alt="Cards" />{" "}
              </Link>
              <h3>
                <Link to="">{item.category}</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
                Eveniet praesentium assumenda sint, blanditiis nisi non.
                Minus!...
              </p>
              <Link to={`/threadlist/${item.id}`} className="btn">
                read more
              </Link>
            </div>
          ))}

          <div className="box">
            <Link to="">
              {" "}
              <img src={card1} alt="" />{" "}
            </Link>
            <h3>
              <Link to="">React</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
              Eveniet praesentium assumenda sint, blanditiis nisi non. Minus!...
            </p>
            <Link to="" className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Link to="">
              {" "}
              <img src={card1} alt="" />{" "}
            </Link>
            <h3>
              <Link to="">React</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
              Eveniet praesentium assumenda sint, blanditiis nisi non. Minus!...
            </p>
            <Link to="" className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Link to="">
              {" "}
              <img src={card1} alt="" />{" "}
            </Link>
            <h3>
              <Link to="">React</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
              Eveniet praesentium assumenda sint, blanditiis nisi non. Minus!...
            </p>
            <Link to="" className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Link to="">
              {" "}
              <img src={card1} alt="" />{" "}
            </Link>
            <h3>
              <Link to="">React</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
              Eveniet praesentium assumenda sint, blanditiis nisi non. Minus!...
            </p>
            <Link to="" className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Link to="">
              {" "}
              <img src={card1} alt="" />{" "}
            </Link>
            <h3>
              <Link to="">React</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum itaque incidunt quas soluta dolore voluptates culpa.
              Eveniet praesentium assumenda sint, blanditiis nisi non. Minus!...
            </p>
            <Link to="" className="btn">
              read more
            </Link>
          </div>
        </div>

        <div className="card-box-container"></div>
        <div className="card-box-container"></div>
      </div>
    </div>
  );
};

export default Cards;

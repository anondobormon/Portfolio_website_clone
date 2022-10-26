import { data } from "../../utils/DemoData";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="title">Work Portfolio</div>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
          tenetur.
        </p>
        <div className="space50"></div>

        <div className="container">
          <div className="grid">
            {data.portfolio.map((item, index) => (
              <div key={index} className="card">
                <div className="img_wrapper">
                  <img src={item.img} alt="" />
                </div>
                <div className="sub_title">{item.title}</div>
                <p>{item.category}</p>
              </div>
            ))}
          </div>

          <div className="visit_work">
            <button className="button">
              Visit all Work{" "}
              <span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

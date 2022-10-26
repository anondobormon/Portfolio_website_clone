import { data } from "../../utils/DemoData";
import "./Service.scss";

export default function Service() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="title">My Service</div>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            tenetur.
          </p>
          <div className="space50"></div>
          <div className="grid">
            {data.services.map((item, index) => (
              <div className={`card ${item.class}`}>
                <div className="sub_title">
                  {item.title}{" "}
                  <span>
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>{" "}
                </div>
                <p>{item.description}</p>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

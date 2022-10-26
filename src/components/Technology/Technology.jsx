import { data } from "../../utils/DemoData";
import "./Technology.scss";
export default function Technology() {
  return (
    <>
      <div className="technology">
        <div className="container">
          <div className="title">Technologies we work with!</div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="space50"></div>
          <div className="flex">
            {data.technology.map((item, index) => (
              <div key={index} className="item">
                <img src={item.img} alt="" />

                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

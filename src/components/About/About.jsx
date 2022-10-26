import { data } from "../../utils/DemoData";
import "./About.scss";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="flex">
          <div className="left">
            <img src={data.images.avatar2} alt="" />
          </div>
          <div className="right">
            <h4>ABOUT ME IN DETAILS</h4>
            <div className="title">Let me know here,</div>
            <div className="space25"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eum
              impedit consequuntur obcaecati voluptates! Blanditiis deleniti
              provident quos nisi iste ab id rem nostrum laudantium laborum quod
              similique reprehenderit quidem deserunt voluptates molestiae
              dolores dolorum, ullam molestias! Sunt error sapiente maiores quae
              eos quis nostrum minima sint ea, voluptatibus culpa.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae eligendi a fugit necessitatibus saepe, voluptatibus
              tenetur cum vitae, unde perspiciatis delectus quaerat aut odit
              eveniet nobis ipsam, ipsa dicta numquam.
            </p>

            <div className="space25"></div>

            <div className="sub_title">Follow me on social network</div>
            <ul>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
            </ul>
            <div className="space25"></div>
            <button className="button">
              DOWNLOAD CV{" "}
              <span>
                <i class="fa-solid fa-download"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

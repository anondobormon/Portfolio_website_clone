import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <h1>LOGO HERE</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas
            doloribus itaque odio explicabo sequi architecto blanditiis quia
            temporibus similique.
          </p>

          <div className="subscribe">
            <input
              type="email"
              name=""
              id=""
              placeholder="Subscribe to Radd__"
            />

            <button className="button">
              SUBSCRIBE{" "}
              <span>
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
              </span>{" "}
            </button>
          </div>
          <div className="space25"></div>
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
        </div>

        <div className="space50"></div>

        <div className="copy_write">
          Copywrite@2021 Radd. All rights are reserved!
        </div>
      </div>
    </>
  );
}

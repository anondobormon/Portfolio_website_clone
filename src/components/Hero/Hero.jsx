import { data } from "../../utils/DemoData";
import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div id="home" className="hero">
        <div className="blob">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
          >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="112"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="194"
                ry="150"
                cx="399.1571274761375"
                cy="421.95707108884676"
                fill="hsl(316, 73%, 52%)"
              ></ellipse>
            </g>
          </svg>
        </div>
        <div className="container">
          <div className="grid">
            {/* Left side content */}
            <div className="left">
              <h4>Hello, I'm</h4>
              <h1>Emma Watson</h1>
              <div className="sub_title">Web Developer abd UI/UX Designer</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                vero nostrum neque odit, tenetur dolore tempora minima similique
                aut voluptate.
              </p>

              <button className="button">
                Hire Me{" "}
                <span>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </span>{" "}
              </button>
            </div>
            {/* Left side content */}

            {/* Middle image */}
            <div className="middle">
              <img src={data.images.avatar} alt="" />
            </div>
            {/* Middle image */}

            {/* Right side content */}
            <div className="right">
              <div className="flex">
                <div className="icon_wrapper">
                  <img src={data.images.briefcase} alt="" />
                </div>
                <div className="content">
                  <div className="title">06+</div>
                  <p>
                    Years Industry Experience in Web Development and Graphic
                    design.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="icon_wrapper">
                  <img src={data.images.websites} alt="" />
                </div>
                <div className="content">
                  <div className="title">250+</div>
                  <p>
                    Years Industry Experience in Web Development and Graphic
                    design.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="icon_wrapper">
                  <img src={data.images.happyclients} alt="" />
                </div>
                <div className="content">
                  <div className="title">125+</div>
                  <p>
                    Years Industry Experience in Web Development and Graphic
                    design.
                  </p>
                </div>
              </div>
            </div>
            {/* Right side content */}
          </div>
        </div>
      </div>
    </>
  );
}

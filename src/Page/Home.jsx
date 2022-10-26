import { useState } from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Portfolio,
  Service,
  Technology,
  Testimonial,
} from "../components";
import "./Home.scss";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar darkMode={[dark, setDark]} />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Technology />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

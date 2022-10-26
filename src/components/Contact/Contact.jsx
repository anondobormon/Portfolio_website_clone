import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="flex">
            <div className="left">
              <h4>CONTACT</h4>
              <div className="title">Get in Touch</div>
              <div className="space25"></div>
              <form action="">
                <div className="flex">
                  <div className="input_grp">
                    <label htmlFor="">Mobile Number*</label>
                    <div className="input">
                      <span>
                        <i class="fa-solid fa-phone"></i>
                      </span>
                      <input
                        value="+123 (456)___ __"
                        type="text"
                        placeholder="+123 (456)___ __"
                      />
                    </div>
                  </div>
                  <div className="input_grp">
                    <label htmlFor="">What's App Number*</label>
                    <div className="input">
                      <span>
                        <i class="fa-brands fa-whatsapp"></i>
                      </span>
                      <input
                        value="+123 (456)___ __"
                        type="text"
                        placeholder="+123 (456)___ __"
                      />
                    </div>
                  </div>
                </div>
                <div className="space25"></div>
                <div className="flex">
                  <div className="input_grp">
                    <label htmlFor="">Support Email*</label>
                    <div className="input">
                      <span>
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        value="support123456@raddmail.com"
                        type="email"
                        placeholder="support123456@raddmail.com"
                      />
                    </div>
                  </div>
                  <div className="input_grp">
                    <label htmlFor="">Skype username:*</label>
                    <div className="input">
                      <span>
                        <i class="fa-brands fa-skype"></i>
                      </span>
                      <input
                        value="@username"
                        type="text"
                        placeholder="@username"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="right">
              <div className="title">
                Share your <br /> Idea or Requirement's.
              </div>
              <div className="space25"></div>
              <form action="">
                <div className="flex">
                  <div className="input_grp">
                    <label htmlFor="">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name here__"
                    />
                  </div>
                  <div className="input_grp">
                    <label htmlFor="">Email address*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email here__"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="input_grp">
                    <label htmlFor="">Mobile number*</label>
                    <input
                      type="number"
                      name="number"
                      placeholder="Mobile Number here__"
                    />
                  </div>
                  <div className="input_grp">
                    <label htmlFor="">Subject*</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter the subject__"
                    />
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  className="textarea"
                  placeholder="Share with us What's your mind!"
                ></textarea>

                <div className="check">
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">
                    I agree to Terms and Conditions of Radd
                  </label>
                </div>

                <div className="space50"></div>

                <button className="button">
                  Send you message{" "}
                  <span>
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

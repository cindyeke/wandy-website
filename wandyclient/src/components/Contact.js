import React, { useEffect, useState } from "react";
import "../scss/Style.scss";

function Contact() {
  const socialLinks = JSON.parse(localStorage.getItem("socialLinks"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [message, setMessage] = useState();
  const [hasError, setHasError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo(0, 0);
    };

    goToTop();
  }, [isEnd]);

  const handleForm = () => {
    if (name === "") {
      setHasError(true);
      setMessage("Name field cannot be empty");
    } else if (email === "") {
      setHasError(true);
      setMessage("Email field cannot be empty");
    } else if (emailMessage === "") {
      setHasError(true);
      setMessage("Message field cannot be empty");
    } else {
      // do form functionality here

      setName("");
      setEmail("");
      setPhoneNum("");
      setEmailMessage("");
      setHasError(false);
      setMessage("SUCCESS");
      setIsEnd(true);
    }
  };

  return (
    <section className="contact-container">
      <article className="contact-sect">
        <h2>Advertise with Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          tempore veritatis natus autem, eos quisquam? Please email{" "}
          {socialLinks[1].description}
        </p>
      </article>

      <article className="contact-sect contact-form">
        <h2>Say Hello</h2>
        <div className="form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="off"
          />
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            autoComplete="off"
          />
          <br />

          <input
            type="tel"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            placeholder="Your phone number (optional)"
            autoComplete="off"
          />
          <br />

          <textarea
            value={emailMessage}
            onChange={(e) => setEmailMessage(e.target.value)}
            placeholder="Your message"
            autoComplete="off"
          ></textarea>

          <input type="submit" value="SEND MESSAGE" onClick={handleForm} />
        </div>

        <span
          className="message"
          style={hasError ? { color: "red" } : { color: "green" }}
        >
          {message}
        </span>
      </article>
    </section>
  );
}

export default Contact;

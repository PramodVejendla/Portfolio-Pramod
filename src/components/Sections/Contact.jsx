import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Please contact me directly at &nbsp;
        <span>vejendlapramod@gmail.com</span> or through this form
      </p>
      <input className="email" type="email" placeholder="Your email" />
      <input className="message" type="text" placeholder="Your message" />
    </div>
  );
}

export default Contact;

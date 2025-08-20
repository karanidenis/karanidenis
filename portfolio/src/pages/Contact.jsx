import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="contact" className="section min-h-screen flex flex-col items-center justify-center">
      <h2>Contact Me</h2>
      <form className="flex flex-col gap-2">
        <input type="email" placeholder="Your email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2" />
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </Element>
  );
}

export default Contact;

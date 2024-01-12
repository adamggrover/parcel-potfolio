// src/components/Contact.js

import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  
    return (
      <section id="contact" className="relative">
        <div className="container px-6 py-10 max-w-5xl font-body mx-auto flex sm:flex-nowrap flex-wrap">
        

          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="w-full flex flex-col mx-auto md:py-8 mt-8 md:mt-0">

              
            <hr></hr>
            
            <h1 className="text-sm  font-medium mb-10 mt-2 text-primary">
              CONTACT
            </h1>
            <p className=" leading-relaxed text-sm mb-10 text-gray-400">
            Whether it's about collaborating on a project, or you just want to say hi, get in touch!
          </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full  border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white font-medium text-sm bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-amber-400 tracking-wide">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    );
  }
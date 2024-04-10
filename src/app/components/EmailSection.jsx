"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <div>
      <div className="h-screen">
        <h1 className="text-white flex items-center justify-center mt-20 mb-20 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
          Let's Connect
        </h1>

        <section className="grid md:grid-cols-2 my-12 md:my-12 gap-4 items-center justify-center">
          <div>
            <div className="bg-[radial-gradient(ellipse_at_center, _var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-8 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <h5 className="text-xl font-bold text-white my-2">
              Let's Connect{" "}
            </h5>

            <p className="text=[#ADB7BE] mb-4 max-w-md">
              {" "}
              I'm currently looking for Internships, my Inbox is always open.
              Whether you have a question or just want to say hi, I'll try my
              best to get to you!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/atifShaiKh0">
                <Image src={GithubIcon} />
              </Link>
              <Link href="https://www.linkedin.com/in/ariz-khan-33636224b/">
                <Image src={LinkedinIcon} />
              </Link>
            </div>
          </div>

          <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  typeof="email"
                  className="text-white block mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="atifShaikh@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="subject"
                  id="text"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just Saying Hi!!"
                />
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mt-5 mb-2 font-medium
              "
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] p-2"
                  placeholder="Let's talk about ...."
                />
                <div>
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-800 text-white rounded-lg font-medium w-full"
                  >
                    Send Message
                  </button>
                  <button>
                    {emailSubmitted && (
                      <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                      </p>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmailSection;

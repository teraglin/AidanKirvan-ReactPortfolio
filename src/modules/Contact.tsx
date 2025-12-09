"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ContactLink from "@/components/ContactLink";
import { Icon } from "@iconify/react";
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/devicon/linkedin';
import emailFastOutline from '@iconify-icons/mdi/email-fast-outline';
import tick from '@iconify-icons/mdi/tick';
import cross2 from '@iconify-icons/radix-icons/cross-2';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState("false");
  const [submissionError, setSubmissionError] = useState("false");
  const contactList = [
    {
      title: "teraglin",
      icon: githubIcon,
      link: "https://github.com/teraglin"
    },
    {
      title: "Aidan Kirvan",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/aidan-kirvan/"
    }
  ];

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => {
        setSubmitted("true");
        console.log("Form successfully submitted");
      })
      .catch((error) => {
        setSubmissionError("true");
        console.error("Form submission error:", error);
      });
  };

  const isSubmitted = submitted === "true";
  const hasError = submissionError === "true";
  const isDisabled = isSubmitted || hasError;

  return (
    <div id="contact" className="w-full flex flex-col pb-16 gap-4 scroll-mt-16">
      <h2 className="inline-block border-b-2 border-white p-2 uppercase">
        Contact Me
      </h2>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        className="w-full bg-black border-2 border-white p-4 flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* Hidden honeypot - catches bots */}
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label className="w-full flex flex-col gap-4 text-lg leading-6">
            Your Name:{" "}
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              className="w-full text-lg leading-6 p-2 bg-white text-black"
            />
          </label>
        </p>
        <p>
          <label className="w-full flex flex-col gap-4 text-lg leading-6">
            Your Email:{" "}
            <input
              type="email"
              required
              name="email"
              autoComplete="email"
              onChange={handleChange}
              className="w-full text-lg leading-6 p-2 bg-white text-black"
            />
          </label>
        </p>
        <p>
          <label className="w-full flex flex-col gap-4 text-lg leading-6">
            Message:{" "}
            <textarea
              name="message"
              required
              rows={4}
              autoComplete="off"
              onChange={handleChange}
              className="w-full text-lg leading-6 p-2 bg-white text-black"
            ></textarea>
          </label>
        </p>
        <p className="w-full flex flex-row justify-center">
          <button
            type="submit"
            disabled={isDisabled}
            className={`border-none cursor-pointer mx-auto h-[50px] p-0 bg-gradient-to-r from-green to-purple group ${
              isSubmitted
                ? "w-[50px] bg-green rounded-full transition-all duration-100"
                : "w-[100px]"
            }`}
          >
            <span
              className={`font-bold p-2 text-purple m-0.5 text-center h-[calc(100%-4px)] flex items-center justify-center gap-2 text-lg leading-6 flex-row transition-colors duration-100 group-hover:text-white group-hover:bg-transparent ${
                isSubmitted ? "bg-transparent p-0 text-white" : "bg-black"
              }`}
            >
              {!isSubmitted && !hasError ? (
                <>
                  SEND
                  <Icon
                    icon={emailFastOutline}
                    style={{ height: 24, width: 24 }}
                  />
                </>
              ) : (
                <Icon
                  icon={isSubmitted ? tick : cross2}
                  style={{ height: 24, width: 24 }}
                />
              )}
            </span>
          </button>
        </p>
      </form>
      <div className="w-full flex flex-col items-center gap-4">
        {contactList.map((contact, index) => (
          <ContactLink
            key={index}
            title={contact.title}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;

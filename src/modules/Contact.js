import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { ContactLink } from "../components/ContactLink";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  gap: 16px;
  scroll-margin-top: 64px;
`;
const Heading = styled.h2`
  display: inline-block;
  border-bottom: 2px solid ${color.white};
  padding: 8px;
  text-transform: uppercase;
`;
const Form = styled.form`
  width: 100%;
  background: ${color.black};
  border: 2px solid ${color.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  line-height: 24px;
`;
const Input = styled.input`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  padding: 8px;
`;
const Message = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  padding: 8px;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  /* width: 100%; */
  margin: 0 auto;
  height: 50px;
  width: 100px;
  padding: 0;
  background-image: linear-gradient(to right, ${color.green}, ${color.purple});
  &[is-submitted="true"] {
    width: 50px;
    background: ${color.green};
    border-radius: 100%;
    transition: width 0.1s linear, border-radius 0.1s linear;
  }
`;
const ButtonText = styled.span`
  font-weight: bold;
  padding: 8px;
  color: ${color.purple};
  margin: 2px;
  background: ${color.black};
  text-align: center;
  height: calc(100% - 4px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
  line-height: 24px;
  padding: 8px;
  flex-direction: row;
  button:hover & {
    color: ${color.white};
    background: none;
    transition: background 0.1s linear;
  }
  button[is-submitted="true"] & {
    background: none;
    padding: 0;
    color: ${color.white};
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState("false");
  const [submissionError, setSubmissionError] = useState("false");
  const contactList = [
    {
      title: "teraglin",
      icon: "mdi:github",
      link: "https://github.com/teraglin",
    },
    {
      title: "Aidan Kirvan",
      icon: "devicon:linkedin",
      link: "https://www.linkedin.com/in/aidan-kirvan/",
    },
  ];

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setSubmitted("true");
        console.log("Form successfully submitted");
      })
      .catch((error) => {
        setSubmissionError("true");
        alert(error);
      });
  };

  return (
    <Container id="contact">
      <Heading>Contact Me</Heading>
      <Form name="contact" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <Label>
            Your Name:{" "}
            <Input required type="text" name="name" onChange={handleChange} />
          </Label>
        </p>
        <p>
          <Label>
            Your Email:{" "}
            <Input type="email" required name="email" onChange={handleChange} />
          </Label>
        </p>
        <p>
          <Label>
            Message:{" "}
            <Message
              name="message"
              required
              rows="4"
              onChange={handleChange}
            ></Message>
          </Label>
        </p>
        <p
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            is-submitted={submitted}
            disabled={
              submitted === "true" || submissionError === "true" ? true : false
            }
          >
            <ButtonText>
              {submitted === "false" && submissionError === "false" ? (
                <>
                  SEND
                  <Icon
                    icon="mdi:email-fast-outline"
                    style={{ height: 24, width: 24 }}
                  />
                </>
              ) : (
                <Icon
                  icon={
                    submitted === "true" ? "mdi:tick" : "radix-icons:cross-2"
                  }
                  style={{ height: 24, width: 24 }}
                />
              )}
            </ButtonText>
          </Button>
        </p>
      </Form>
      <LinksContainer>
        {contactList.map((contact, index) => (
          <ContactLink
            key={index}
            title={contact.title}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Contact;

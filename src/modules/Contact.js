import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { ContactLink } from "../components/ContactLink";
import { Icon } from "@iconify/react";

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin-bottom: 128px;
  gap: 16px;
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
  height: 100;
  padding: 0;
  background-image: linear-gradient(to right, ${color.green}, ${color.purple});
`;
const ButtonText = styled.span`
  font-weight: bold;
  padding: 8px;
  color: ${color.purple};
  margin: 2px;
  background: ${color.black};
  text-align: center;
  /* width: calc(100%); */
  height: calc(100%);
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
`;

const Contact = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <ContactContainer>
      <Heading>Contact Me</Heading>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <Label>
          Your Name: <Input type="text" name="name" />
        </Label>
        <Label>
          Your Email: <Input type="email" name="email" />
        </Label>
        <Label>
          Message: <Message name="message" rows="4"></Message>
        </Label>
        <Button type="submit">
          <ButtonText>
            Send
            <Icon
              icon="mdi:email-fast-outline"
              style={{ height: 24, width: 24 }}
            />
          </ButtonText>
        </Button>
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
    </ContactContainer>
  );
};

export default Contact;

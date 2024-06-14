import React from "react";
import styled from "styled-components";
import contact from "assets/images/contact.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: #f2f6f4;
  padding: 155px 0px 50px 50px;
`;

const СontactImg = styled.img`
  width: 650px;
  height: 450px;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

const ContactTitle = styled.h1`
  color: #000000;
  font-weight: 400;
  font-size: 60px;
  font-family: Lexend;
  letter-spacing: 0px;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  font-family: Lexend;
  letter-spacing: 0px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #000000;
  background: none;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 5px 0;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #000000;
  background: none;
  resize: none;
`;
const Button = styled.button`
  padding: 0px, 24px, 0px, 24px;
  background-color: #17af26;
  border: none;
  cursor: pointer;
  width: 128px;
  height: 40px;
  border-radius: 100px;
  color: #ffffff;
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  align-self: center;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  justify-content: flex-start;
`;
const MailTitle = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
  margin-top: 20px;
`;
const MailText = styled.p`
  color: #000000;
  font-weight: 300;
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
  margin-bottom: 30px;
`;
const AdressTitle = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;

const AdressText = styled.p`
  color: #000000;
  font-weight: 300;
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;

function Contact() {
  return (
    <Wrapper>
      <СontactImg src={contact} alt="leaf" />
      <ContactWrapper>
        <ContactTitle> Contact US </ContactTitle>
        <FormWrapper>
          <ContactForm>
            <FormGroup>
              <Label>Full Name</Label>
              <Input type="text" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea rows="2" placeholder="Enter your message"></TextArea>
            </FormGroup>
            <Button>Send</Button>
          </ContactForm>
          <ContactInfo>
            <MailTitle>Contact</MailTitle>
            <MailText>hi@green.com</MailText>
            <AdressTitle>Based in</AdressTitle>
            <AdressText>Los Angeles,California</AdressText>
          </ContactInfo>
        </FormWrapper>
      </ContactWrapper>
    </Wrapper>
  );
}

export { Contact };

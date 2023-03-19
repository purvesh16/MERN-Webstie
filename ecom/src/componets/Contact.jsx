import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <h2 className="title">Contact Us</h2>
      <form className="wrapper">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="common-input-style"
        />
        <label for="fname">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="common-input-style"
        />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          className="common-input-style textarea"
        ></textarea>
      </form>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;

  .title {
    font-size: 2rem;
    color: white;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .wrapper {
    width: 40rem;
    height: 40rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    background: #191a19;
    border-radius: 2rem;
  }
  label {
    color: grey;
    margin-bottom: 0.5rem;
  }

  .common-input-style {
    width: 100%;
    height: 3rem;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: 0.5rem;
    background: black;
    border: none;
    outline: none;
    margin-bottom: 2rem;
    color: white;
  }
  .textarea {
    height: 20rem;
  }
`;
export default Contact;

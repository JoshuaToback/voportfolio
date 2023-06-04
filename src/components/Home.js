import React from "react";

import Nav from "../Navbar.js";
import { Container } from "react-bootstrap";

import Clients from "./Clients.js";
import About from "./About.js";
import Demos from "./Demos.js"
import Hero from "./Hero.js";
import Contact from "./Contact.js";

import Footer from "./Footer.js"

function Home() {
  return (
    <>
      <Nav />
      <Container fluid>

        <section id="home">
          <Hero />
        </section>
        <section id="demos">
          <Demos />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="clients">
          <Clients />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </Container>
    </>
  );
}

export default Home;

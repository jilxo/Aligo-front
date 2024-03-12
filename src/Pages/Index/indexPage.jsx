import React, { Children, useState } from "react";
import Container from "../../components/Grid/containers";
import Navbar from "../../components/Nav/Navbar";
import { Introduction, AboutUs, Certs, Ciber360, Colab, Contact1, Contact2, Counter, Footer, Pilars, Services, Statistics, Teams, Testimonials } from "./Exports";

export function IndexPage() {

  return (
    <Container>
      <Navbar />
      <Introduction />
      <AboutUs id="about" />
      <Pilars />
      <Statistics />
      <Ciber360 />
      <Testimonials />
      <Services />
      <Colab />
      <Counter />
      <Contact1 />
      <Teams />
      <Certs />
      <Contact2 id="contact" />
      <Footer />
    </Container>

  );
}
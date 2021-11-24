import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import NavbarMenu from "./NavBarMenu";

function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>My NextJs App</title>
      </Head>

      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  );
}

export default Layout;

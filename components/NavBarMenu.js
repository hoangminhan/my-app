import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link href="/">
        <Navbar.Brand style={{ cursor: "pointer" }}>My Nextjs App</Navbar.Brand>
      </Link>
      <Link href="/posts" passHref>
        <Nav.Link>Post</Nav.Link>
      </Link>
      <Link href="/books" passHref>
        <Nav.Link>Book</Nav.Link>
      </Link>
      <Link href="/jokes/random" passHref>
        <Nav.Link>Jokes</Nav.Link>
      </Link>
      <Link href="/about" passHref>
        <Nav.Link>About</Nav.Link>
      </Link>
    </Navbar>
  );
};
export default NavbarMenu;

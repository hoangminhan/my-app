import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h1>My Nextjs App</h1>
      <Link href="/posts">
        <Button variant="primary">Post</Button>
      </Link>
    </Layout>
  );
}

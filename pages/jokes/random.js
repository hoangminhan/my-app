import React from "react";
import { Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/jokes";
import Link from "next/link";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Title of joke</Card.Title>
          <Card.Text>{joke.value}</Card.Text>

          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// dữ liệu trả về phụ thuộc vào mỗi request, nhưng vẫn tạo ra html tĩnh cho front-end nên vẫn tốt cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  if (!joke) {
    return {
      notFound: true,
    };
    //   return {
    //       redirect : {
    //           destination :"./posts",
    //           permanent:false
    //       }
    //   }
  }
  return {
    props: {
      joke,
    },
  };
};

export default Random;

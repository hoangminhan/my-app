import React from "react";
import { Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/book";
import Link from "next/link";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((item, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{item.bookName}</Card.Title>
              <Card.Text>{item.bookContent}</Card.Text>

              <Link href="/">
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
};

// dữ liệu trả về phụ thuộc vào mỗi request, nhưng vẫn tạo ra html tĩnh cho front-end nên vẫn tốt cho SEO
export const getStaticProps = async () => {
  const books = await getBooks();
  console.log(books);
  return {
    props: {
      books,
    },
  };
};

export default Books;

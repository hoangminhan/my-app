import React from "react";
import { Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostId } from "../../lib/post";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Spinner aimation="border" role="status" variant="dark">
        <span className="sr-only">LOADING...</span>
      </Spinner>
    );
  }
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// khi muốn lấy dữ liệu tĩnh, nhưng tỉnh hay ảo thì còn phụ thuộc vào path params
export const getStaticPaths = async () => {
  const paths = await getPostId(5);
  console.log(paths);
  return {
    paths,
    // fallback: false, // Bất kỳ path nào k thấy => 404
    fallback: true, //path naof khoong return  immediately => show spiner => wait getStaticProps run xong => return hoan chinh
  };
};
export const getStaticProps = async ({ params }) => {
  console.log("params", params);
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Post;

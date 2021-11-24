import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getListPost } from "../../lib/post";
import Link from "next/link";

const Posts = ({ listPost }) => {
  return (
    <Layout>
      {listPost.map((post, index) => {
        return (
          <Card key={index} className="my-3 shadow">
            <Card.Body>
              <Card.Title>
                {" "}
                {post.id} -- {post.title}
              </Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link href={`/posts/${post.id}`} passHref>
                <Card.Link style={{ textDecoration: "none" }}>
                  See More
                </Card.Link>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
};
// sử dụng khi lấy static data (được lấy trước khi request gửi đi) (data trả về similar với mỗi lần request                                                    +)
// Nếu người dùng khác nhau trả về dữ liệu khác nhau thi không sử dụng getStaticProps
export const getStaticProps = async () => {
  const listPost = await getListPost(10);
  return {
    props: {
      listPost,
    },
  };
};
export default Posts;

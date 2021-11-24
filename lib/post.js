import axios from "axios";
export const getListPost = async (limit) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPostId = async (limit) => {
  const posts = await getListPost(limit);
  return posts.map((item, index) => ({
    params: {
      id: `${item.id}`,
    },
  }));

  //   return posts.map((item, index) => `/posts/${item.id}`);
};
export const getPostById = async (id) => {
  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

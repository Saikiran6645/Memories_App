// import axios from "axios";
// const url = "http://localhost:5000/posts";
export const getposts = async () => {
  // const response = await axios.get(url);
  // return response.data
  const data = [
    {
      title: "post1",
      description: "post1 description",
    },
    {
      title: "post2",
      description: "post2 description",
    },
  ];
  return data;
};

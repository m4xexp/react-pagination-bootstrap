import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from './components/Pagination'
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPosts(res.data.slice(0,300));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfTheLastPost = currentPage * postsPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfTheFirstPost, indexOfTheLastPost);

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3 text-center">My blog</h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;

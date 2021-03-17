import React from "react";

function posts({ posts, loading }) {
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }
  return (
    // <ul className="list-group mb-4">
    //   {posts.map((post) => (
    //     <li key={post.id} className="list-group-item">
    //       {post.title}
    //     </li>
    //   ))}
    // </ul>

    <div className="container">
      <div class="row">
        {posts.map((post) => (
          <div class="col-md-3">  
            <div key={post.id} className="card mb-4 ">
              <img className="card-img-top" src={post.thumbnailUrl} alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title text-truncate">{post.title}</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
            </div>   
          </div>
            ))}
        </div>
          </div>

  );
}

export default posts;

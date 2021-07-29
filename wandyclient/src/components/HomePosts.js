import React from "react";
import "../scss/Home.scss";
import { Link } from "react-router-dom";

function HomePosts({ posts, postsCount, handleLoadMore }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="article">
            <Link
              to={{
                pathname: `/post/${post.id}`,
                postProps: {
                  name: `${post.title}`,
                  postcontent: `${post.description}`,
                  lastUpdate: `${post.updatedAt}`,
                  postImg: `${post.image}`,
                },
              }}
            >
              <div className="article-img">
                <img
                  src={`http://localhost:5000/${post.image}`}
                  alt={post.image}
                />
              </div>
            </Link>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                postProps: {
                  name: `${post.title}`,
                  postcontent: `${post.description}`,
                  lastUpdate: `${post.updatedAt}`,
                  postImg: `${post.image}`,
                },
              }}
            >
              <h2>{post.title}</h2>
            </Link>
            <p className="article-category">{post.tag}</p>
            <p className="article-preview">{post.description}</p>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                postProps: {
                  name: `${post.title}`,
                  postcontent: `${post.description}`,
                  lastUpdate: `${post.updatedAt}`,
                  postImg: `${post.image}`,
                },
              }}
            >
              <p className="readmore">CONTINUE READING</p>
            </Link>
          </div>
        ))}
      </div>

      {postsCount > 6 ? (
        <div className="loadcontainer" onClick={handleLoadMore}>
          <div className="loadmore">LOAD MORE</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default HomePosts;

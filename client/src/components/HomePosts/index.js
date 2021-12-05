import React from "react";
// import "../scss/Home.scss";
import { Link } from "react-router-dom";
import { StyledHomePosts, HomePostImg, H2 } from "./StyledHomePosts";

function HomePosts({ posts, postsCount, handleLoadMore }) {
  return (
    <>
      {posts.map((post) => (
        <StyledHomePosts key={post.id} className="article">
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
            <div style={{ height: "350px", overflow: "hidden" }}>
              <HomePostImg
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
            <H2>{post.title}</H2>
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
        </StyledHomePosts>
      ))}

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

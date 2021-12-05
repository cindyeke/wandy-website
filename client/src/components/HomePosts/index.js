import React from "react";
// import "../scss/Home.scss";
import { Link } from "react-router-dom";
import {
  StyledHomePosts,
  ImgContainer,
  HomePostImg,
  H2,
  HomePostDetails,
  ArticleP,
  ArticlePreview,
} from "./StyledHomePosts";

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
            <ImgContainer>
              <HomePostImg
                src={`http://localhost:5000/${post.image}`}
                alt={post.image}
              />
            </ImgContainer>
          </Link>
          <HomePostDetails>
            <H2>
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
                {post.title}
              </Link>
            </H2>
            <ArticleP>
              <i className="fa fa-tag" style={{ marginRight: "0.5rem" }}></i>
              {post.tag}
            </ArticleP>
            <ArticlePreview className="article-preview">
              {post.description}
            </ArticlePreview>

            <ArticleP nomargin nobold>
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
                CONTINUE READING
              </Link>
            </ArticleP>
          </HomePostDetails>
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

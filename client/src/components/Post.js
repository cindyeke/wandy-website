import React from "react";
import moment from "moment";

function Post(props) {
  const postProps = props.location.postProps;

  const formatDate = (date) => {
    return moment(date).format("LLL");
  };

  return (
    <section className="category-container">
      <div className="post-container">
        <h2>{postProps.name}</h2>
        <div>
          <img
            src={`http://localhost:5000/${postProps.postImg}`}
            alt={postProps.postImg}
          />
        </div>
        <p>{postProps.postcontent}</p>
        <div className="datetime">{formatDate(postProps.lastUpdate)}</div>
      </div>
    </section>
  );
}

export default Post;

const sqlConnection = require("../db/db.connection");

class Post {
  constructor(title, description, tag, createdAt, updatedAt, image) {
    this.title = title;
    this.description = description;
    this.tag = tag;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.image = image;
  }

  // Create new post
  createNewPost(newPost, result) {
    const date = new Date(newPost.createdAt);

    const values = [
      newPost.title,
      newPost.description,
      newPost.tag,
      date,
      date,
      newPost.image,
    ];
    const sqlStatement =
      "INSERT INTO posts (title, description, tag, createdAt, updatedAt, image) VALUES(?)";

    sqlConnection.query(sqlStatement, [values], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);

        return;
      }

      result(null, "Success!");
    });
  }

  // Get all Posts with limits
  static getAllPostsWithLimits(result, start, end) {
    const sqlStatement = "SELECT * FROM posts ORDER BY updatedAt DESC LIMIT ?";
    const queryParams = [parseInt(start), parseInt(end)];

    sqlConnection.query(sqlStatement, [queryParams], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, res);
    });
  }

  // Get all Posts without limits
  static getAllPosts(result) {
    const sqlStatement = "SELECT * FROM posts ORDER BY updatedAt DESC";

    sqlConnection.query(sqlStatement, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, res);
    });
  }

  static getPostsCount(result) {
    const sqlStatement = "SELECT COUNT(*) AS postsCount FROM posts";

    sqlConnection.query(sqlStatement, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, res[0].postsCount);
    });
  }

  static getPostsByCategory(result, param) {
    const val = "%" + param + "%";
    const sqlStatement = `SELECT * FROM wandy.posts WHERE tag LIKE ? order by updatedAt DESC`;

    sqlConnection.query(sqlStatement, val, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, res);
    });
  }

  updatePost(newPost, id, result) {
    const crtDate = new Date(newPost.createdAt);
    const updDate = new Date(newPost.updatedAt);
    const values = [
      newPost.title,
      newPost.description,
      newPost.tag,
      crtDate,
      updDate,
      newPost.image,
      parseInt(id),
    ];
    const sqlStatement = `UPDATE posts SET title = ?, description = ?, tag = ?, createdAt = ?, updatedAt = ?, image = ? WHERE id = ?`;

    sqlConnection.query(sqlStatement, values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      result(null, "Success!");
    });
  }

  updatePostNoImg(newPost, id, result) {
    const crtDate = new Date(newPost.createdAt);
    const updDate = new Date(newPost.updatedAt);
    const values = [
      newPost.title,
      newPost.description,
      newPost.tag,
      crtDate,
      updDate,
      parseInt(id),
    ];
    const sqlStatement = `UPDATE posts SET title = ?, description = ?, tag = ?, createdAt = ?, updatedAt = ? WHERE id = ?`;

    sqlConnection.query(sqlStatement, values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      result(null, "Success!");
    });
  }

  // Delete Post
  static deletePostById(result, id) {
    const sqlStatement = "DELETE FROM posts WHERE id = ?";
    const intID = parseInt(id);

    sqlConnection.query(sqlStatement, intID, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, "Success!");
    });
  }

  static getSocials(result) {
    const sqlStatement = "SELECT * FROM social";

    sqlConnection.query(sqlStatement, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);

        return;
      }

      result(null, res);
    });
  }
}

module.exports = Post;

import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./index.module.scss";

const SinglePost = ({ postData }) => {
  const { title, body } = postData;
  const path = useLocation();

  return (
    <>
      <div className={styles.singlePost}>
        <Link
          to={`/posts/${postData.id}/comments`}
          title="Navigate to Comments Tab"
          className={styles.viewDetails}
          state={{ prev: path }}
        >
          <h2 className={styles.postTitle}> {title} </h2>
          <p className={styles.postBody}>{body}</p>
        </Link>
      </div>
    </>
  );
};

export default SinglePost;

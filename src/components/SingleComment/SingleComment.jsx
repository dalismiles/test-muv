import React from "react";
// import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const SingleComment = ({ commentData }) => {
  const { name, email, body } = commentData;

  return (
    <div className={styles.singleComment}>
      <h2 className={styles.name}> {name} </h2>
      <h4 className={styles.body}>{body} </h4>
      <h6 className={styles.email}>
        <span>author:</span> {email}
      </h6>
      <hr />
    </div>
  );
};

export default SingleComment;

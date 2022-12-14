import React from "react";

import CommentList from "../../components/CommentList";

import styles from "./index.module.scss";

export const CommentsPage = () => {
  return (
    <div className={styles.CommentsPage}>
      <CommentList />
    </div>
  );
};

export default CommentsPage;

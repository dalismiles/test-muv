import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GETCOMMENT } from "../../utils/api";
import SingleComment from "../SingleComment";

import styles from "./index.module.scss";

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    GETCOMMENT("posts", id, "comments").then((data) => setCommentList(data));
  }, [isRenderedList]);

  return (
    <div className={styles.CommentList}>
      {commentList.length ? (
        commentList.map((comment) => (
          <SingleComment
            setRenderedList={setRenderedList}
            commentData={comment}
            key={comment.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CommentList;

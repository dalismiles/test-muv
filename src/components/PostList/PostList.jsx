import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import SinglePost from "../SinglePost";

import styles from "./index.module.scss";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);

  useEffect(() => {
    GET("posts").then((data) => setPostList(data));
  }, [isRenderedList]);

  return (
    <div className={styles.PostList}>
      {postList.length ? (
        postList.map((post) => (
          <SinglePost
            setRenderedList={setRenderedList}
            postData={post}
            key={post.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostList;

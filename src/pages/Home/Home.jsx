import React from "react";
import PostList from "../../components/PostList";

import styles from "./index.module.scss";

export const Home = () => {
  return (
    <div className={styles.Home}>
      <PostList />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from '../src/section/Landing'
// import EmojiPicker from "../src/component/EmojiPicker";
// import MentionInput from "../src/component/MentionInput";
// import PostGallery from "../src/component/PostGallery";
// import CardList from "../src/section/blog-post/CardList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Landing></Landing>
      {/* <CardList /> */}
      {/* <EmojiPicker />
      <MentionInput />
      <PostGallery /> */}
    </div>
  );
};

export default Home;

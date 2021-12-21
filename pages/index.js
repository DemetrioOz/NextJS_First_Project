import styles from "../styles/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello World Next!</h1>
      </div>
    </>
  );
}

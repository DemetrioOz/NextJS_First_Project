import styles from "../styles/Home.module.css";

import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello World Next!</h1>
    </div>
  );
}

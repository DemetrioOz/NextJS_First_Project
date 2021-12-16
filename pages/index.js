import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/products" target="_blank">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/about" target="_blank">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello World Next!</h1>
    </div>
  );
}

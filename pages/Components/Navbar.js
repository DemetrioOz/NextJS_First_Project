import Link from "next/link";

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/" target="_blank">
          <a>Home</a>
        </Link>
      </li>
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
  );
}

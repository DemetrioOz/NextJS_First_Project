import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
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

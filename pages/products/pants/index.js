import Link from "next/link";

export default function Pants() {
  return (
    <>
      <h1>Calças</h1>
      <ul>
        <li>
          <Link href="/products/pants/redpant" target="_blank">
            <a>Calça Vermelha</a>
          </Link>
        </li>
        <li>
          <Link href="/products/pants/bluepant" target="_blank">
            <a>Calça Azul</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

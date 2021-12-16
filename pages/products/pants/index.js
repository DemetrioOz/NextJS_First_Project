import Link from "next/link";

import Navbar from "../../Components/Navbar";

export default function Pants() {
  return (
    <>
      <Navbar />
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

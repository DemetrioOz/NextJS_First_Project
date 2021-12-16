import Link from "next/link";

import Navbar from "../Components/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <h1>Pagina de Produtos</h1>
      <ul>
        <li>
          <Link href="/products/shirts" target="_blank">
            <a>Camisas</a>
          </Link>
        </li>
        <li>
          <Link href="/products/pants" target="_blank">
            <a>Calças</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

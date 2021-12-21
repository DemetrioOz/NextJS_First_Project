import Link from "next/link";

import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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

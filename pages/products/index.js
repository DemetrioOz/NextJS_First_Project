import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Pagina de Produtos</h1>
      <ul>
        <li>
          <Link href="/" target="_blank">
            <a>Voltar</a>
          </Link>
        </li>
        <li>
          <Link href="/products/shirts" target="_blank">
            <a>Camisas</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

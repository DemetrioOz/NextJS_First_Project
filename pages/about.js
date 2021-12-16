import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>Pagina de About</h1>
      <ul>
        <li>
          <Link href="/" target="_blank">
            <a>Voltar</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

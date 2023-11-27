import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logo} alt="Sujeito Programador Logo" />
        </Link>

        <nav>
          <Link href="/">
            <p className={pathname === "/" ? "active" : ""}>Home</p>
          </Link>

          <Link href="/posts">
            <p className={pathname === "/posts" ? "active" : ""}>Conteúdos</p>
          </Link>

          <Link href="/about">
            <p className={pathname === "/about" ? "active" : ""}>Quem somos?</p>
          </Link>
        </nav>

        <a
          className={styles.readyButton}
          type="button"
          href="https://sujeitoprogramador.com"
        >
          Começar
        </a>
      </div>
    </header>
  );
}

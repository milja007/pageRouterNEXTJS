import Link from "next/link";
import styles from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">OAK Academy</Link>
      </div>
      <nav>
        <ul>
          <li className={styles.logo}>
            <Link href="/tours">See All Our Travel Routes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

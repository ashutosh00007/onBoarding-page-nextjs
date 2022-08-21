import React from "react";
import Image from "next/image";
import styles from "../Onboarding.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Image
        alt="logo"
        src="/logo.png"
        height={32}
        width={32}
        className={styles.logo}
      />
      <h1>Eden</h1>
    </header>
  );
}

export default Header;

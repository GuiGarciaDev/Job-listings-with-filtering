import { useState } from "react"
import styles from "../styles/App.module.scss"
import mobileSvg from "../assets/bg-header-mobile.svg"
import desktopSvg from "../assets/bg-header-desktop.svg"

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <div className={styles.header}>
          <img
            className={styles.mobileImg}
            src={mobileSvg}
            alt="header background mobile"
          />
          <img
            className={styles.desktopImg}
            src={desktopSvg}
            alt="header background desktop"
          />
        </div>
      </div>
    </div>
  )
}

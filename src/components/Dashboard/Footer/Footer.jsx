import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`${styles.footer} d-flex justify-content-center align-items-center`}>
            <span>2026 Copyright © Bunyan</span>
        </footer>
    )
}

export default Footer
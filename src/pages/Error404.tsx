import styles from "./Error404.module.css";

function Error404() {
  return (
    <div className={styles.error404Page}>
      <h1>Error 404</h1>
      <div className={styles.pageContent}>
        <p>Page not found!</p>
        <p>—ฅ/ᐠ.̫ .ᐟ\ฅ—</p>
      </div>
    </div>
  );
}

export default Error404;

import styles from './Main.module.css';

function Main({ children }) {
  return <main id={styles.main}>{children}</main>;
}

export default Main;

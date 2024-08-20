import styles from './Container.module.css';

function Container({ children }) {
  return <div id={styles.container}>{children}</div>;
}

export default Container;

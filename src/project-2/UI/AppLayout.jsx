import styles from './AppLayout.module.css';

function AppLayout({ children }) {
  return <div id={styles.app}>{children}</div>;
}

export default AppLayout;

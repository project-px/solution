import styles from './ProfileSection.module.css';

function ProfileSection({ main, children }) {
  return <div className={`${styles.profile} ${main ? styles.main : ''}`}>{children}</div>;
}

export default ProfileSection;

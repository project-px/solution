import { useContext } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../assets/project-1/images/profile.jpg';
import Nav from '../../project-1/components/Nav';
import Category from '../../project-1/components/Category';

import { Project1StateContext } from '../../store/Project1StateContext';

import styles from './SidebarCategory.module.css';

function SidebarCategory() {
  const { sidebarActive, onSidebarToggle } = useContext(Project1StateContext);

  return (
    <aside id={styles.sidebar} className={`${sidebarActive ? styles.active : ''}`}>
      <div className={styles['sidebar-content']}>
        <Link to="">
          <img className={styles['sidebar-img']} src={profile} />
        </Link>
        <div className={styles['sidebar-info']}>
          <div className={styles['sidebar-title']}>Project 1</div>
          <div className={styles['sidebar-id']}>@theme_first</div>
        </div>
        <Nav />
        <Category />
      </div>
      <div className={styles['sidebar-bg']} onClick={onSidebarToggle}></div>
    </aside>
  );
}

export default SidebarCategory;

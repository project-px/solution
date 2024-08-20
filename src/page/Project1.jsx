import Header from '../project-1/components/Header';
import Container from '../project-1/UI/Container';
import Main from '../project-1/UI/Main';
import Sidebar from '../project-1/UI/Sidebar';
import SidebarCategory from '../project-1/UI/SidebarCategory';

import Project1StateProvider from '../store/Project1StateContext';

import { usePageTitle } from '../hooks/usePageTitle';

function Project1({ difficult }) {
  let pageTitle = 'Project 1';

  if (difficult) pageTitle += ' - Hard';
  usePageTitle(pageTitle);

  return (
    <Project1StateProvider>
      <Header difficult={difficult} />
      <Main>
        <Sidebar />
        <Container />
      </Main>
      <SidebarCategory />
    </Project1StateProvider>
  );
}

export default Project1;

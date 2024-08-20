import { usePageTitle } from '../hooks/usePageTitle';

import Header from '../project-2/components/Header';
import ProfileMain from '../project-2/components/ProfileMain';
import AppLayout from '../project-2/UI/AppLayout';
import Container from '../project-2/UI/Container';
import AccordionList from '../project-2/components/AccordionList';

function Project2({ difficult }) {
  let pageTitle = 'Project 2';

  if (difficult) pageTitle += ' - Hard';
  usePageTitle(pageTitle);

  return (
    <AppLayout>
      <Header difficult={difficult} />
      <Container>
        <ProfileMain />
        <AccordionList />
      </Container>
    </AppLayout>
  );
}

export default Project2;

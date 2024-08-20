import { Link } from 'react-router-dom';

import avatar from '../../assets/project-2/images/profile.jpg';

import ProfileSection from '../UI/ProfileSection';
import Avatar from './Avatar';
import Menu from './Menu';

function ProfileMain() {
  return (
    <section>
      <ProfileSection main>
        <Avatar img={avatar} />
        <h1>
          <Link to="">Neutral Theme</Link>
        </h1>
        <p>Quas quod explicabo officiis reprehenderit non</p>
      </ProfileSection>
      <Menu />
    </section>
  );
}

export default ProfileMain;

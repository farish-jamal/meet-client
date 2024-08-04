import RightHome from '../components/common/RightHome';
import LeftHome from '../components/common/LeftHome'
import { useEffect, useState } from 'react';
import ProfileGrid from '../components/common/ProfileGrid';
import MobileMenu from '../components/common/MobileMenu';

const Profile = () => {
  const [user, setUser] = useState({});
  const getUserInfo = () => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <LeftHome user={user} />
      <ProfileGrid />
      <RightHome user={user}/>
      <MobileMenu />
    </div>

  );
};

export default Profile;

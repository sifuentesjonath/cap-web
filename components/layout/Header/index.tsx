import { FC, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
// Service api
import { useQueryClient } from 'react-query';
import { getProfile, logoutUser } from '@/service/api';
import { AuthContext } from '@/contexts/AuthContextProvider';
// Components
import UserHeader from './UserHeader';
import PageHeader from './PageHeader';

export interface IHeaderProps {
  isApp?: boolean;
}
const Header: React.FC<IHeaderProps> = ({ isApp = false }) => {
  const { authUser, authProfile, setAuthProfile } = useContext(AuthContext);
  const router = useRouter();
  const { pathname } = router;
  const queryClient = useQueryClient();
  const [activePath, setActivePath] = useState('');

  const isLoggedUser = authUser;

  const getProfileData = async () => {
    queryClient.invalidateQueries('firebaseAuthToken');
    const result = await getProfile();
    // console.log(result)
    if (result) {
      setAuthProfile(result)
    }
  }

  useEffect(() => {
    if (authUser) {
      getProfileData();
    }
  }, [authUser])

  const handleActive = (e, id) => {
    e.preventDefault();
    setActivePath(pathname);
  }

  return (
    <>
      {
        isLoggedUser
          ? <UserHeader authProfile={authProfile} />
          : <PageHeader />
      }
    </>
  );
};

export default Header;

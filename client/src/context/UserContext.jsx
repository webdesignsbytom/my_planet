import React from 'react';
import { useEffect, useState } from 'react';
// Fetch
import client from '../api/client';
import LoggedInUser from '../utils/LoggedInUser';
import { useNavigate } from 'react-router-dom';
import { MAP_PAGE_URL } from '../utils/Constants';
// Context
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 4,
    hasSetUp: true,
  });

  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const decodedUserData = LoggedInUser();

    if (decodedUserData !== null) {
      const userId = decodedUserData.id;
      client
        .get(`/users/user/userId/${userId}`)
        .then((res) => {
          setUser(res.data.data.user);
        })
        .then(() => navigateToMapPage())

        .catch((err) => {
          console.error('Unable to retrieve user data', err);
        });
    }

    const cookie = localStorage.getItem('CookiePolicy');

    if (cookie) {
      setToggleCookiePolicy(true);
    }
  }, []);

  const navigateToMapPage = () => {
    navigate(MAP_PAGE_URL, { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        toggleCookiePolicy,
        setToggleCookiePolicy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

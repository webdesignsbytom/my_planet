import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Constants
import { HOME_PAGE_URL, MAP_PAGE_URL } from '../../utils/Constants';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(HOME_PAGE_URL)

    if (user) {
      navigateToMapPage()
    }
  }, [user])

  const navigateToMapPage = () => {
    navigate(MAP_PAGE_URL, { replace: true });
  };

  return (
    <div className='grid font-poppins shadow-[inset_-12px_-8px_40px_#46464690] h-screen max-h-screen overflow-hidden'>
      {/* Main */}
      <main className='relative grid h-full p-1 shadow-[inset_-12px_-8px_40px_#46464690] overflow-hidden animate-ocean-animation'>
        Welcome
      </main>
    </div>
  );
}

export default HomePage;

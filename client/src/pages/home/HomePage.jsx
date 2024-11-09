import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';

const HomePage = React.memo(() => {
  usePageTracking();

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Home'} desc={`Home page of ${CompanyName}.`} />

      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden font-poppins'>
        <div className='grid grid-rows-reg lg:grid-cols-reg lg:grid-rows-1 h-full w-full'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <HomePageMainContainer />
        </div>
      </div>
    </>
  );
});

export default HomePage;

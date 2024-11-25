import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';
// Data
import {
  homePageAdditionalMeta,
  homePageStructuredData,
} from '../../utils/data/MetaData';

const HomePage = React.memo(() => {
  usePageTracking();

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Home'
        desc={`${CompanyName} offers expert web and circuit design solutions in England. Discover our services and featured projects.`}
        keywords={`web design, circuit design, ${CompanyName}, England, UK, custom solutions`}
        additionalMeta={homePageAdditionalMeta}
        structuredData={homePageStructuredData}
      />

      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden font-poppins'>
        <div className='relative grid grid-rows-reg lg:grid-cols-reg lg:grid-rows-1 h-full w-full bg-red-500 p-2'>
          {/* Gold triangles */}
          <div className='triangle top-left z-50'></div>
          <div className='triangle top-right z-50'></div>
          <div className='triangle bottom-left z-50'></div>
          <div className='triangle bottom-right z-50'></div>
          
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

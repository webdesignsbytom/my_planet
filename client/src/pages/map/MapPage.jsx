import React, { useContext, useEffect, useState } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
// Components
import CountryObject from '../../components/countries/CountryObject';
import SettingsMainContainer from '../../components/settings/SettingsMainContainer';
import RightSideQatToolbar from '../../components/settings/RightSideQatToolbar';
import StatisticsContainer from '../../components/overlays/StatisticsContainer';
import UploadImagesContainer from '../../components/settings/UploadImagesContainer';
import WelcomeBackContainer from '../../components/overlays/WelcomeBackContainer';
import CountryInformationContainer from '../../components/overlays/CountryInformationContainer';
import CountriesListContainer from '../../components/overlays/CountriesListContainer';
import CountrySlideshowContainer from '../../components/overlays/CountrySlideshowContainer';
import AccountSetUpContainer from '../../components/settings/AccountSetUpContainer';
import OwnerDisplayContainer from '../../components/overlays/OwnerDisplayContainer';
import AnimatedCanvas from '../../components/overlays/AnimatedCanvas';

function MapPage() {
  const {
    mapPageSettings,
    toggleCountryInfoContainer,
    setMapPageContainerSettings,
    mapPageContainerSettings,
  } = useContext(MapContext);

  // Mouse position data
  const [activeCountryId, setActiveCountryId] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [sunPosition, setSunPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [moonPosition, setMoonPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const updateSunAndMoonPosition = () => {
      let time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let totalMinutes = hours * 60 + minutes;

      // Assuming the sun starts at the right (east) and ends at the left (west)
      let finish = window.innerWidth;

      // Calculate the sun's position - reverse the calculation to move from right to left
      let sunX = finish - (totalMinutes / 1440) * finish;

      // Calculate the moon's position - opposite to the sun
      let moonX = finish - sunX;

      // Set the sun's and moon's positions
      setSunPosition({ x: sunX, y: window.innerHeight / 2 });
      setMoonPosition({ x: moonX, y: window.innerHeight / 2 });
    };

    // Update the positions every minute
    const intervalId = setInterval(updateSunAndMoonPosition, 60000);

    // Initial update
    updateSunAndMoonPosition();

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Mouse position
  const handleMouseOver = (country) => {
    setHoveredCountry(country);
    setActiveCountryId(country.id);

    window.onmousemove = (e) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setActiveCountryId(null);

    window.onmousemove = null;
  };

  console.log('mapPageSettings', mapPageSettings);

  return (
    <div className='grid relative overflow-hidden h-full w-full'>
      {/* Rotate device notice */}
      <div className='landscape-warning text-center'>
        <span className='px-4'>
          Please rotate your device to landscape mode.
        </span>
      </div>

      {/* Canvas Background Animation */}
      <AnimatedCanvas animate={mapPageSettings.animatedSea} />

      {/* Map container */}
      <div
        className={`grid h-screen w-full overflow-hidden md:p-1 ${
          mapPageSettings.animatedSea && 'animate-ocean-animation'
        }`}
        style={{
          backgroundImage: `url(${mapPageSettings.selectedStyle.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='grid h-full w-full overflow-hidden'>
          {/* Map */}
          <svg
            id='allSvg'
            baseProfile='tiny'
            fill='transparent'
            stroke='red'
            strokeLinecap='round'
            strokeLinejoin='round'
            version='1.2'
            viewBox='0 0 2000 1000'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-full cursor-pointer no__highlights'
          >
            {/* Countries Array */}
            {mapPageSettings.mapType.mapData.map((country) =>
              country.countryBorderPaths.map((territory, index) => (
                <CountryObject
                  key={`${country.countryName}-${index}`}
                  country={country}
                  territory={territory}
                  hoveredCountry={hoveredCountry}
                  activeCountryId={activeCountryId}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                  visited={country.visited}
                  exploreCountry={toggleCountryInfoContainer}
                />
              ))
            )}
          </svg>
        </div>
      </div>

      {/* Settings container */}
      {mapPageContainerSettings.settingsMenuIsOpen && <SettingsMainContainer />}

      {/* Right hand settings and other menu */}
      {mapPageSettings.rightQatMenu && <RightSideQatToolbar />}

      {/* Stats container */}
      {mapPageSettings.statisticsContainer && <StatisticsContainer />}

      {/* Upload images container */}
      {mapPageContainerSettings.imagesContainer && <UploadImagesContainer />}

      {/* Welcome back message container */}
      {mapPageContainerSettings.welcomeContainer && <WelcomeBackContainer />}

      {/* Country list container */}
      {mapPageContainerSettings.countryListContainer && (
        <CountriesListContainer />
      )}

      {/* Country information container */}
      {mapPageContainerSettings.countryInfoDisplayIsOpen && (
        <CountryInformationContainer />
      )}

      {/* Account set up */}
      {mapPageContainerSettings.firstVisitToSite && <AccountSetUpContainer />}

      {/* User banner */}
      {mapPageContainerSettings.firstVisitToSite && <OwnerDisplayContainer />}

      {/* Display Box - images and songs */}
      {hoveredCountry && (
        <CountrySlideshowContainer
          tooltipPosition={tooltipPosition}
          hoveredCountry={hoveredCountry}
        />
      )}
      {mapPageSettings.sunAndMoon && (
        <div
          className='sun_ball'
          style={{
            position: 'absolute',
            top: `${sunPosition.y}px`, // Y position is typically top
            left: `${sunPosition.x}px`, // X position is typically left
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      )}
      {mapPageSettings.sunAndMoon && (
        <div
          className='moon_ball'
          style={{
            position: 'absolute',
            top: `${moonPosition.y}px`, // Y position is typically top
            left: `${moonPosition.x}px`, // X position is typically left
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className='moon'></div>
        </div>
      )}
    </div>
  );
}

export default MapPage;

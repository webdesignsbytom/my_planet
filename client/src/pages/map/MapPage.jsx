import React, { useContext, useState } from 'react';
// Data
import { CountriesDataArray } from '../../utils/data/CountriesData';
// Functions
import { createLongAndLatLines } from '../../utils/map/MapFunctions';
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

  // Mouse position
  const handleMouseOver = (country) => {
    console.log('MOUSE COUNTRTY', country);
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

  return (
    <div className='grid relative overflow-hidden h-full w-full'>
      {/* Rotate device notice */}
      <div className='landscape-warning text-center'>
        <span className='px-4'>
          Please rotate your device to landscape mode.
        </span>
      </div>

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
            {/* Long and lat lines */}
            {mapPageSettings.displayLongitudeAndLatitude &&
              createLongAndLatLines(
                mapPageSettings.includeLongitudeAndLatitudeText
              )}

            {/* Countries Array */}
            {CountriesDataArray.map((country) =>
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
    </div>
  );
}

export default MapPage;

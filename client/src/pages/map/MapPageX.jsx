import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import RightSideQatToolbar from '../../components/settings/RightSideQatToolbar';
import OwnerBanner from '../../components/overlays/OwnerBanner';
import PlaneAnimation from '../../components/animations/PlaneAnimation';
import MoonAnimation from '../../components/animations/MoonAnimation';
import SunAnimation from '../../components/animations/SunAnimation';
import CountrySlideshowContainer from '../../components/overlays/CountrySlideshowContainer';
import CountryObject from '../../components/countries/CountryObject';
import CountryInformationContainer from '../../components/overlays/CountryInformationContainer';
import SettingsMainContainer from '../../components/settings/SettingsMainContainer';
import AccountSetUpContainer from '../../components/settings/AccountSetUpContainer';
import UploadImagesContainer from '../../components/settings/UploadImagesContainer';
import StatisticsContainer from '../../components/overlays/StatisticsContainer';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { CountriesDataArray } from '../../utils/data/CountriesData';
// Images
import PinIcon from '../../assets/images/svg/pin.svg';
// Constants
import { LOGIN_PAGE_URL } from '../../utils/Constants';

function MapPageX() {
  const {
    settingsMenuIsOpen,
    statsDisplayIsOpen,
    accountSetupIsOpen,
    setAccountSetupIsOpen,
    setSettingsMenuIsOpen,
    setStatsDisplayIsOpen,
    RightSideQatToolbarIsVisible,
    setRightSideQatToolbarIsVisible,
    ownerBannerIsVisible,
    setOwnerBannerIsVisible,
    uploadImagesIsOpen,
    setUploadImagesIsOpen,
  } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  // Countries
  const [countriesArray, setCountriesArray] = useState(CountriesDataArray);
  const [activeCountry, setActiveCountry] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [countryInfoDisplayIsOpen, setCountryInfoDisplayIsOpen] =
    useState(false);

  // Set user and nav
  useEffect(() => {
    if (!user.id) {
      // Redirect to login if not logged in
      loginPage();
    }
    if (!user.hasSetUp) {
      // First time auto open account set up page
      runNewUserSetUp();
    }
  }, []);

  const runNewUserSetUp = () => {
    setAccountSetupIsOpen(true);
    setSettingsMenuIsOpen(false);
    setStatsDisplayIsOpen(false);
    setRightSideQatToolbarIsVisible(false);
    setOwnerBannerIsVisible(false);
  };

  // Update sun and moon positions
  useEffect(() => {
    const interval = setInterval(() => {
      setSunPosition(calculatePosition(true));
      setMoonPosition(calculatePosition(false));
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, []);

  // Calculate position
  const calculatePosition = (isSun) => {
    const hour = new Date().getHours();
    let position;
    if (isSun) {
      position = (hour * 24) / 100; // Sun's position calculation
    } else {
      position = (((hour + 12) % 24) / 24) * 100; // Moon's position calculation
    }
    return position;
  };

  // Sun and moon
  const [sunPosition, setSunPosition] = useState(calculatePosition(true));
  const [moonPosition, setMoonPosition] = useState(calculatePosition(false));

  // Mouse position data
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Mouse position
  const handleMouseOver = (countryId) => {
    setHoveredCountry(countryId);
    setActiveCountry(countryId);

    window.onmousemove = (e) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setActiveCountry(null);

    window.onmousemove = null;
  };

  // Navigate to login if no user found
  let navigate = useNavigate();

  const loginPage = () => {
    navigate(LOGIN_PAGE_URL, { replace: true });
  };

  const exploreCountry = (countryId) => {
    setCountryInfoDisplayIsOpen(true);
  };

  const closeCountryInfoContainer = () => {
    setCountryInfoDisplayIsOpen(false);
  };

  const closeStatsContainer = () => {
    setStatsDisplayIsOpen(false)
  }
  const closeUserInfoContainer = () => {
    setOwnerBannerIsVisible(false)
  }
  const closeSettingsContainer = () => {
    setRightSideQatToolbarIsVisible(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className='grid font-poppins shadow-[inset_-12px_-8px_40px_#46464690] h-screen max-h-screen overflow-hidden'>
      {/* Main */}
      <main className='relative grid h-full p-1 shadow-[inset_-12px_-8px_40px_#46464690] overflow-hidden animate-ocean-animation'>
        {/* First time account set up */}
        {accountSetupIsOpen && <AccountSetUpContainer />}
        {/* Settings container */}
        {settingsMenuIsOpen && <SettingsMainContainer />}
        {/* Stats container */}
        {statsDisplayIsOpen && <StatisticsContainer closeContainer={closeStatsContainer} />}
        {/* Upload images */}
        {uploadImagesIsOpen && <UploadImagesContainer />}
        {/* Country information */}
        {countryInfoDisplayIsOpen && (
          <CountryInformationContainer
            closeContainer={closeCountryInfoContainer}
          />
        )}

        {/* Owner banner */}
        {ownerBannerIsVisible && <OwnerBanner closeContainer={closeUserInfoContainer} />}
        {/* Right hand settings and other menu */}
        {RightSideQatToolbarIsVisible && <RightSideQatToolbar closeContainer={closeSettingsContainer} isMuted={isMuted} toggleMute={toggleMute} />}

        {/* Animations */}
        {/* Animated Plane */}
        <PlaneAnimation />
        {/* Sun animation */}
        <SunAnimation sunPosition={sunPosition} />
        {/* Moon animation */}
        <MoonAnimation moonPosition={moonPosition} />

        {/* Main Map */}
        <svg
          id='allSvg'
          baseProfile='tiny'
          fill='transparent'
          stroke='red'
          strokeLinecap='round'
          strokeLinejoin='round'
          version='1.2'
          viewBox='0 0 2000 857'
          xmlns='http://www.w3.org/2000/svg'
          className='h-full w-full cursor-pointer'
        >
          {/* Countries Array */}
          {countriesArray.map((country) =>
            country.countryBorderPaths.map((territory, territoryIndex) => (
              <CountryObject
                country={country}
                territoryIndex={territoryIndex}
                territory={territory}
                hoveredCountry={hoveredCountry}
                activeCountry={activeCountry}
                handleMouseOver={handleMouseOver}
                handleMouseLeave={handleMouseLeave}
                visited={country.visited}
                exploreCountry={exploreCountry}
              />
            ))
          )}
        </svg>

        {/* Display Box - images and songs */}
        {hoveredCountry && (
          <CountrySlideshowContainer
            tooltipPosition={tooltipPosition}
            hoveredCountry={hoveredCountry}
          />
        )}
      </main>
    </div>
  );
}

export default MapPageX;

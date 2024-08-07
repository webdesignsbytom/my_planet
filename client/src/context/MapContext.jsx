import React, { useEffect } from 'react';
import { useState } from 'react';
// Data
import { DisplaySettingsArray } from '../utils/map/MapData';
import { CountriesVistingDataArray } from '../utils/data/CountriesData';

// Context
export const MapContext = React.createContext();

const MapContextProvider = ({ children }) => {
  const [mapPageSettings, setMapPageSettings] = useState({
    displayLongitudeAndLatitude: false,
    includeLongitudeAndLatitudeText: false,
    selectedStyle: DisplaySettingsArray[0],
    rightQatMenu: true,
    statisticsContainer: true,
    animatedSea: true,
    antarcticaMode: false,
    mouseOverContainerActive: true,
    realTimeSettings: true,
    countriesVisited: CountriesVistingDataArray,
    sunAndMoon: true,
    displayCountryNames: true,
    isMuted: true,
    vistiedVisible: true,
    unvistedVisible: true,
  });

  const [mapPageContainerSettings, setMapPageContainerSettings] = useState({
    settingsMenuIsOpen: false,
    welcomeContainer: false,
    helpContainer: false,
    imagesContainer: false,
    countryInfoDisplayIsOpen: false,
    countryListContainer: false,
    countrySelected: null,
    firstVisitToSite: true,
    userBanner: true,
  });

  useEffect(() => {
    localStorage.setItem('mapSettings', JSON.stringify(mapPageSettings));
  }, []);

  const closeAllModals = () => {
    setMapPageSettings({
      ...mapPageSettings,
      statisticsContainer: false,
    });
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      settingsMenuIsOpen: false,
      welcomeContainer: false,
      helpContainer: false,
      imagesContainer: false,
      countryInfoDisplayIsOpen: false,
      countryListContainer: false,
    });
  };

  const toggleMapSettingsContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      settingsMenuIsOpen: !mapPageContainerSettings.settingsMenuIsOpen,
    });
  };

  const toggleUserBannerContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      userBanner: !mapPageContainerSettings.userBanner,
    });
  };

  const toggleQatToolbar = () => {
    setMapPageSettings({
      ...mapPageSettings,
      rightQatMenu: !mapPageSettings.rightQatMenu,
    });
  };

  const toggleStatsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      statisticsContainer: !mapPageSettings.statisticsContainer,
    });
  };

  const toggleUploadImagesContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      imagesContainer: !mapPageContainerSettings.imagesContainer,
    });
  };

  const toggleHelpSettingsContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      helpContainer: !mapPageContainerSettings.helpContainer,
    });
  };

  const toggleCountryInfoContainer = (territory) => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      countryInfoDisplayIsOpen:
        !mapPageContainerSettings.countryInfoDisplayIsOpen,
      countrySelected: territory,
    });
  };

  const toggleWelcomeMessageContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      welcomeContainer: !mapPageContainerSettings.welcomeContainer,
    });
  };
  const toggleCountryListContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      countryListContainer: !mapPageContainerSettings.countryListContainer,
    });
  };

  const toggleMusic = () => {
    setMapPageSettings({
      ...mapPageSettings,
      isMuted: !mapPageSettings.isMuted,
    });
  };

  const toggleNewUserContainer = () => {
    setMapPageContainerSettings({
      ...mapPageContainerSettings,
      firstVisitToSite: !mapPageContainerSettings.firstVisitToSite,
    });
  };

  return (
    <MapContext.Provider
      value={{
        mapPageSettings,
        setMapPageSettings,
        mapPageContainerSettings,
        setMapPageContainerSettings,
        toggleMusic,
        toggleQatToolbar,
        toggleStatsContainer,
        toggleUploadImagesContainer,
        toggleWelcomeMessageContainer,
        toggleMapSettingsContainer,
        toggleCountryInfoContainer,
        toggleCountryListContainer,
        toggleHelpSettingsContainer,
        closeAllModals,
        toggleNewUserContainer,
        toggleUserBannerContainer,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;

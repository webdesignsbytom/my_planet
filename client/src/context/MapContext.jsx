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
    settingsMenuIsOpen: false,
    statisticsContainer: true,
    welcomeContainer: false,
    helpContainer: false,
    imagesContainer: false,
    animatedSea: true,
    antarcticaMode: false,
    mouseOverContainerActive: true,
    realTimeSettings: true,
    countryInfoDisplayIsOpen: false,
    countryListContainer: false,
    countriesVisited: CountriesVistingDataArray,
    countrySelected: null,
    sunAndMoon: true,
    displayCountryNames: true,
    isMuted: true,
    vistiedVisible: true,
    unvistedVisible: true,
    firstVisitToSite: true,
  });

  useEffect(() => {
    localStorage.setItem('mapSettings', JSON.stringify(mapPageSettings));
  }, [mapPageSettings]);

  const closeAllModals = () => {
    setMapPageSettings({
      ...mapPageSettings,
      settingsMenuIsOpen: false,
      statisticsContainer: false,
      welcomeContainer: false,
      helpContainer: false,
      imagesContainer: false,
      countryInfoDisplayIsOpen: false,
      countryListContainer: false,
    });
  };

  const toggleMapSettingsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      settingsMenuIsOpen: !mapPageSettings.settingsMenuIsOpen,
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
    setMapPageSettings({
      ...mapPageSettings,
      imagesContainer: !mapPageSettings.imagesContainer,
    });
  };

  const toggleHelpSettingsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      helpContainer: !mapPageSettings.helpContainer,
    });
  };

  const toggleCountryInfoContainer = (territory) => {
    setMapPageSettings({
      ...mapPageSettings,
      countryInfoDisplayIsOpen: !mapPageSettings.countryInfoDisplayIsOpen,
      countrySelected: territory,
    });
  };

  const toggleWelcomeMessageContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      welcomeContainer: !mapPageSettings.welcomeContainer,
    });
  };
  const toggleCountryListContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      countryListContainer: !mapPageSettings.countryListContainer,
    });
  };

  const toggleMusic = () => {
    setMapPageSettings({
      ...mapPageSettings,
      isMuted: !mapPageSettings.isMuted,
    });
  };

  const toggleNewUserContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      firstVisitToSite: !mapPageSettings.firstVisitToSite,
    });
  };

  return (
    <MapContext.Provider
      value={{
        mapPageSettings,
        setMapPageSettings,
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
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;

import React, { useEffect } from 'react';
import { useState } from 'react';
// Data
import { DisplaySettingsArray } from '../utils/map/MapData';
import { CountriesVistingDataArray } from '../utils/data/CountriesData';

// Context
export const MapContext = React.createContext();

const MapContextProvider = ({ children }) => {
  const [mapPageSettings, setMapPageSettings] = useState({
    displayLongitudeAndLatitude: true,
    includeLongitudeAndLatitudeText: false,
    selectedStyle: DisplaySettingsArray[0],
    rightQatMenu: true,
    settingsMenuIsOpen: false,
    statisticsContainer: true,
    welcomeContainer: false,
    helpContainer: true,
    imagesContainer: false,
    animatedSea: false,
    antarcticaMode: false,
    mouseOverContainerActive: true,
    realTimeSettings: true,
    countryInfoDisplayIsOpen: false,
    countryListContainer: true,
    countriesVisited: CountriesVistingDataArray,
    countrySelected: null,
    sunAndMoon: true,
    displayCountryNames: true,
    isMuted: true,
  });

  useEffect(() => {
    localStorage.setItem('mapSettings', JSON.stringify(mapPageSettings))
  }, [mapPageSettings])

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
        toggleCountryListContainer,toggleHelpSettingsContainer
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;

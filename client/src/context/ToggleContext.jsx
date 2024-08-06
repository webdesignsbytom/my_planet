import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  // Account Setup
  const [userHasSetUpAccount, setUserHasSetUpAccount] = useState(false);
  const [accountSetupIsOpen, setAccountSetupIsOpen] = useState(false);
  const [uploadImagesIsOpen, setUploadImagesIsOpen] = useState(false);
  // Display booleans
  const [settingsMenuIsOpen, setSettingsMenuIsOpen] = useState(false);
  const [statsDisplayIsOpen, setStatsDisplayIsOpen] = useState(true);
  const [RightSideQatToolbarIsVisible, setRightSideQatToolbarIsVisible] =
    useState(true);
  const [ownerBannerIsVisible, setOwnerBannerIsVisible] = useState(true);
  const [musicIsMuted, setMusicIsMuted] = useState(false);

  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const muteUnmuteMusic = () => {
    setMusicIsMuted(!musicIsMuted);
  };

  const toggleSettingsContainer = () => {
    setSettingsMenuIsOpen(!settingsMenuIsOpen);
  };

  const toggleStatsDisplay = () => {
    setStatsDisplayIsOpen(!statsDisplayIsOpen);
  };

  const closeSetUpContainerAndStart = () => {
    setAccountSetupIsOpen(false);
    setStatsDisplayIsOpen(true);
    setRightSideQatToolbarIsVisible(true);
    setOwnerBannerIsVisible(true);
  };

  const toggleUploadImagesContainer = () => {
    setUploadImagesIsOpen(!uploadImagesIsOpen);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbarOpenClosed,
        activeNav,
        setActiveNav,
        settingsMenuIsOpen,
        setSettingsMenuIsOpen,
        toggleSettingsContainer,
        statsDisplayIsOpen,
        setStatsDisplayIsOpen,
        musicIsMuted,
        setMusicIsMuted,
        muteUnmuteMusic,
        toggleStatsDisplay,
        userHasSetUpAccount,
        setUserHasSetUpAccount,
        accountSetupIsOpen,
        setAccountSetupIsOpen,
        RightSideQatToolbarIsVisible,
        setRightSideQatToolbarIsVisible,
        ownerBannerIsVisible,
        setOwnerBannerIsVisible,
        closeSetUpContainerAndStart,
        uploadImagesIsOpen,
        setUploadImagesIsOpen,
        toggleUploadImagesContainer,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;

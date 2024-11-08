import React, { useContext, useState } from 'react';
// Components
import MapSettings from './MapSettings';
import UserSettings from './UserSettings';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IoArrowBackCircle } from 'react-icons/io5';
// Context
import { MapContext } from '../../context/MapContext';
import HelpSettingsContainer from './HelpSettingsContainer';
import ProfileSettings from './ProfileSettings';

const settingsOptions = [
  { key: 'user', label: 'User Settings', component: UserSettings },
  { key: 'profile', label: 'Profile Settings', component: ProfileSettings },
  { key: 'map', label: 'Map Settings', component: MapSettings },
  { key: 'help', label: 'Help Settings', component: HelpSettingsContainer }, // Assuming SettingsForm is the Help Settings component
];

function SettingsMainContainer() {
  const { mapPageSettings, toggleMapSettingsContainer } =
    useContext(MapContext);

  const [selectedSettingsOption, setSelectedSettingsOption] = useState(null);

  const goBack = () => {
    setSelectedSettingsOption(null);
  };

  const renderSelectedOption = () => {
    const selectedOption = settingsOptions.find(
      (option) => option.key === selectedSettingsOption
    );
    return selectedOption
      ? React.createElement(selectedOption.component)
      : null;
  };

  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 w-2/3 max-h-2/3 max-w-2/3 min-h-2/3 min-w-2/3 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} rounded-lg border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} shadow-xl overflow-hidden`}
    >
      <div className='grid grid-rows-reg relative h-full overflow-hidden'>
        {/* Back button */}
        {selectedSettingsOption && (
          <div className='absolute top-4 left-4'>
            <IoArrowBackCircle
              onClick={goBack}
              size={35}
              className={`hover:brightness-75 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
            />
          </div>
        )}

        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleMapSettingsContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className={`hover:brightness-75 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
          />
        </button>

        <article className='grid text-center'>
          <div className='py-4'>
            <h4
              className={`text-xl font-poppins font-medium ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
            >
              Settings
            </h4>
          </div>
        </article>

        {/* Buttons */}
        <div className='grid h-full w-full items-center justify-center overflow-y-auto'>
          {selectedSettingsOption ? (
            renderSelectedOption()
          ) : (
            <section className='grid grid-cols-3 gap-2'>
              {settingsOptions.map((option) => (
                <div
                  key={option.key}
                  className='grid justify-center items-center'
                >
                  <button
                    className={`border-2 border-solid border-black px-4 py-2 rounded-lg text-2xl shadow-xl active:scale-95 hover:brightness-90 ${mapPageSettings.selectedStyle.styleSettings.altBackgroundColour}`}
                    onClick={() => setSelectedSettingsOption(option.key)}
                  >
                    {option.label}
                  </button>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default SettingsMainContainer;

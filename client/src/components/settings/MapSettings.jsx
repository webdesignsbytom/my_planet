import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
import { DisplaySettingsArray, MapTypeSettingsArray } from '../../utils/map/MapData';

function MapSettings() {
  const {
    mapPageSettings,
    setMapPageSettings,
    mapPageContainerSettings,
    setMapPageContainerSettings,
  } = useContext(MapContext);

  const handleToggleChange = (setting) => {
    setMapPageSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleStyleChange = (style) => {
    setMapPageSettings((prevSettings) => ({
      ...prevSettings,
      selectedStyle: style,
      animatedSea: style.name === 'animated',
      sunAndMoon: style.name === 'animated',
    }));
  };

  const handleMapTypeChange = (map) => {
    console.log('map', map);
    setMapPageSettings((prevSettings) => ({
      ...prevSettings,
      mapType: MapTypeSettingsArray[map.id]
    }));
  };

  const handleContainerToggleChange = (setting) => {
    setMapPageContainerSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const mapContainerSettings = [
    {
      label: 'Display user banner',
      setting: 'userBanner',
    },
  ];

  const mapSettingslist = [
    {
      label: 'Display Longitude and Latitude',
      setting: 'displayLongitudeAndLatitude',
    },
    { label: 'Antarctica Mode', setting: 'antarcticaMode' },
    { label: 'Animated Sea', setting: 'animatedSea' },
    { label: 'Animated Sun and Moon', setting: 'sunAndMoon' },
    { label: 'Show visited only', setting: 'vistiedVisible' },
    { label: 'Show not visted only', setting: 'unvistedVisible' },
    { label: 'Mouse Over slideshow Container', setting: 'mouseOverContainer' },
    { label: 'Real Time Settings', setting: 'realTimeSettings' },
    { label: 'Display country names', setting: 'displayCountryNames' },
  ];

  return (
    <section
      className={`grid p-4 h-fit gap-2 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
    >
      {mapContainerSettings.map((item, index) => (
        <div key={index} className='flex items-center'>
          <span className='flex-1'>{item.label}</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={mapPageContainerSettings[item.setting]}
              onChange={() => handleContainerToggleChange(item.setting)}
            />
            <span className='slider'></span>
          </label>
        </div>
      ))}
      {mapSettingslist.map((item, index) => (
        <div key={index} className='flex items-center'>
          <span className='flex-1'>{item.label}</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={mapPageSettings[item.setting]}
              onChange={() => handleToggleChange(item.setting)}
            />
            <span className='slider'></span>
          </label>
        </div>
      ))}

      <div className='h-[1px] bg-gray-400 my-4'></div>

      <section className='grid'>
        <div className='grid pb-4'>Map Style</div>
        <div className='grid h-full overflow-y-auto'>
          <section className='grid grid-cols-3 gap-y-6 gap-x-4 h-fit'>
            {DisplaySettingsArray.map((display, index) => (
              <div key={index} className='grid'>
                <div className='grid justify-center'>
                  {display.backgroundImage ? (
                    <img
                      src={display.backgroundImage}
                      alt={display.title}
                      className='max-w-[200px] w-[200px] h-[120px]'
                    />
                  ) : (
                    <div
                      className={`max-w-[200px] w-[200px] h-[120px] ${display.styleSettings.altBackgroundColour}`}
                    ></div>
                  )}
                </div>
                <div className='flex justify-center items-center'>
                  <span className='mr-2'>{display.title}</span>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      checked={
                        mapPageSettings.mapType === display.name
                      }
                      onChange={() => handleStyleChange(display)}
                    />
                    <span className='slider'></span>
                  </label>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <div className='h-[1px] bg-gray-400 my-4'></div>

      <section className='grid'>
        <div className='grid pb-4'>Map Type</div>
        <div className='grid h-full'>
          <section className='grid grid-cols-3 gap-y-6 gap-x-4 h-fit'>
            {MapTypeSettingsArray.map((map, index) => (
              <div key={index} className='grid'>
                <div className='grid justify-center'>
                  {map.backgroundImage ? (
                    <img
                      src={map.backgroundImage}
                      alt={map.title}
                      className='max-w-[200px] w-[200px] h-[120px]'
                    />
                  ) : (
                    <div
                      className={`max-w-[200px] w-[200px] h-[120px] ${map.styleSettings.altBackgroundColour}`}
                    ></div>
                  )}
                </div>
                <div className='flex justify-center items-center'>
                  <span className='mr-2'>{map.title}</span>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      checked={
                        mapPageSettings.selectedStyle.name === map.name
                      }
                      onChange={() => handleMapTypeChange(map)}
                    />
                    <span className='slider'></span>
                  </label>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
}

export default MapSettings;

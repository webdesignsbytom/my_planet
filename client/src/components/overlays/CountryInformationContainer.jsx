import React, { useContext } from 'react';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
// Context
import { MapContext } from '../../context/MapContext';

function CountryInformationContainer() {
  const { mapPageSettings, toggleCountryInfoContainer, mapPageContainerSettings } = useContext(MapContext);

  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} ${mapPageSettings.selectedStyle.styleSettings.mainTextColour} border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} rounded-lg shadow-xl`}
    >
      <div className='grid grid-rows-reg relative'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleCountryInfoContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className={`hover:brightness-75 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}          />
        </button>

        <article className='grid text-center'>
          <div className='pt-4'>
            <h4 className='text-xl font-poppins font-medium'>Country info for {mapPageContainerSettings.countrySelected.id}</h4>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CountryInformationContainer;

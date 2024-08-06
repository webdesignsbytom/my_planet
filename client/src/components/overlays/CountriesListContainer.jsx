import React, { useContext, useState, useEffect } from 'react';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
// Context
import { MapContext } from '../../context/MapContext';

function CountriesListContainer() {
  const { mapPageSettings, setMapPageSettings, toggleCountryListContainer } = useContext(MapContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (mapPageSettings && mapPageSettings.countriesVisited) {
      setCountries(mapPageSettings.countriesVisited);
    }
  }, [mapPageSettings]);

  const handleCheckboxChange = (index) => {
    const updatedCountries = countries.map((country, idx) =>
      idx === index ? { ...country, hasVisited: !country.hasVisited } : country
    );
    setCountries(updatedCountries);
    setMapPageSettings(prevSettings => ({
      ...prevSettings,
      countriesVisited: updatedCountries
    }));
  };

  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} rounded-lg shadow-xl`}
    >
      <div className='grid grid-rows-reg relative overflow-hidden'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleCountryListContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className='hover:brightness-125 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95'
          />
        </button>

        <article className='grid text-center grid-rows-reg overflow-hidden'>
          <div className='pt-4'>
            <h4 className='text-xl font-poppins font-medium'>Country List</h4>
            <h5 className='text-xl font-poppins font-medium'>
              And Nation States and Such
            </h5>
          </div>

          <section className='grid h-full overflow-hidden py-2'>
            <div className='grid h-full overflow-y-auto'>
              {countries.map((country, index) => (
                <div key={index} className='flex items-center justify-between px-4 py-2'>
                  <span>{country.countryName}</span>
                  <input
                    type='checkbox'
                    checked={country.hasVisited}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

export default CountriesListContainer;

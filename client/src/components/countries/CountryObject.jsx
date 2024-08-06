import React from 'react';

function CountryObject({
  country,
  territoryIndex,
  territory,
  hoveredCountry,
  activeCountry,
  handleMouseOver,
  handleMouseLeave,
  visited,
  exploreCountry
}) {
  return (
    <>
      <g className='relative' key={`${country.id}-${territoryIndex}`}>
        <path
          className={`${territory.class} ${
            hoveredCountry === territory.id
              ? 'hovered-country countryOutline'
              : ''
          }`}
          d={territory.d}
          id={territory.id}
          fill={
            activeCountry === territory.id
              ? '#66ff66' // Color when a country is hovered
              : `${country.defaultColor}` // Random default color assigned to the country
          }
          onMouseOver={() => handleMouseOver(territory.id)}
          onMouseLeave={handleMouseLeave}
          onMouseUp={() => exploreCountry(territory)}
        />
      </g>
    </>
  );
}

export default CountryObject;

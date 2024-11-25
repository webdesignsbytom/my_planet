import React from 'react';

function CountryObject({
  country,
  territory,
  hoveredCountry,
  activeCountry,
  handleMouseOver,
  handleMouseLeave,
  visited,
  exploreCountry,
}) {
  return (
    <g className='relative'>
      <path
        className={`${territory.class} ${
          hoveredCountry === territory.id ? 'hovered-country countryOutline' : ''
        }`}
        d={territory.d}
        id={territory.id}
        fill={
          activeCountry === territory.id
            ? '#66ff66'
            : country.defaultColor
        }
        onMouseOver={() => handleMouseOver(country)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={() => exploreCountry(country)}
        
      />
    </g>
  );
}

export default CountryObject;

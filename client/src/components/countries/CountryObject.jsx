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
        onMouseOver={() => handleMouseOver(territory.id)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={() => exploreCountry(territory)}
      />
    </g>
  );
}

export default CountryObject;

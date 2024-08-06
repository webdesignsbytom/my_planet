import React from 'react';

function MoonAnimation({ moonPosition }) {
  return (
    <section
      className='absolute top-1/2 text-3xl no__highlights'
      style={{
        left: `${moonPosition}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      🌑
    </section>
  );
}

export default MoonAnimation;

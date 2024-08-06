import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
import OwnerBanner from './OwnerBanner';

function WelcomeBackContainer() {
  const { mapPageSettings, toggleWelcomeMessageContainer } =
    useContext(MapContext);
  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} rounded-lg shadow-xl`}
    >
      <div className='relative grid outline outline-1 outline-black rounded-lg'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleWelcomeMessageContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className='hover:brightness-125 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95'
          />
        </button>

        {/* Main content */}
        <article className='grid text-center'>
          <div className='pt-4'>
            <h4 className='text-xl font-poppins font-medium'>WELCOME BACK</h4>
          </div>

          <OwnerBanner />
        </article>
      </div>
    </section>
  );
}

export default WelcomeBackContainer;

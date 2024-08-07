import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';

function UploadImagesContainer() {
  const { mapPageSettings, toggleUploadImagesContainer } =
    useContext(MapContext);
  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} ${mapPageSettings.selectedStyle.styleSettings.mainTextColour} rounded-lg border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} shadow-xl`}
    >
      <div className='relative grid  rounded-lg'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleUploadImagesContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className={`hover:brightness-75 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
          />
        </button>

        {/* Main content */}
        <article className='grid text-center'>
          <div className='pt-4'>
            <h4 className='text-xl font-poppins font-medium'>Upload Images</h4>
          </div>
        </article>
      </div>
    </section>
  );
}

export default UploadImagesContainer;

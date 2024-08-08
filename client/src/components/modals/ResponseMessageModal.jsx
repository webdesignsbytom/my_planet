import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';

function ResponseMessageModal({ responseMessage }) {
  const { mapPageSettings } = useContext(MapContext);

  return (
    <section
      className={`grid absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} ${mapPageSettings.selectedStyle.styleSettings.mainTextColour} rounded-lg border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} shadow-xl overflow-hidden`}
    >
      <div className='grid h-full w-full overflow-hidden p-2'>
        <div>
          <h4>{responseMessage}</h4>
        </div>
        <div className=''>
          <button
            type='submit'
            className='inline-block px-6 py-2.5 mt-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out '
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResponseMessageModal;

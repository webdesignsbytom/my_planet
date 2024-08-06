import React, { useContext, useEffect } from 'react';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function SubmitAndSetUp({ accountData }) {
  const { closeSetUpContainerAndStart } = useContext(ToggleContext);

  useEffect(() => {
  }, []);

  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='text-center'>
        <h6>Setting Up Your Personal Map</h6>
      </div>

      {/* Loading spinner */}
      <div className='grid justify-center items-center h-full'>
        <LoadingSpinner width={'w-28'} height={'h-28'} />
      </div>

      {/* Close button */}
      <div>
        <button
          type='submit'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          onClick={closeSetUpContainerAndStart}
          className='inline-block px-6 py-2.5 mb-2 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
        >
          Close
          {/* {!registrationFormData.active && !registrationFormData.success && (
          <span>Sign Up</span>
        )}
        {registrationFormData.active && (
          <span className='flex items-center justify-center'>
            <LoadingSpinner width={'w-5'} height={'h-5'} />
          </span>
        )}
        {registrationFormData.success && <span>Success!</span>} */}
        </button>
      </div>
    </section>
  );
}

export default SubmitAndSetUp;

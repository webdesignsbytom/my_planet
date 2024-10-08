import React, { useState } from 'react';

function SettingsForm() {
  const [userMapAndSettingsData, setUserMapAndSettingsData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserMapAndSettingsData({
      ...userMapAndSettingsData,
      [name]: value,
    });
  };

  const handleSubmitSettingsUpdates = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className='grid gap-2 px-4 overflow-y-auto'
      onSubmit={handleSubmitSettingsUpdates}
    >
      <input
        type='email'
        id='email'
        name='email'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        placeholder='Recovery Email address: '
        onChange={handleChange}
      />

      {/* Submit button */}
      <div className='pb-4'>
        <button
          type='submit'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          className='inline-block px-6 py-2.5 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SettingsForm;

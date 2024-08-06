import React from 'react';
import BirthCountrySelectP1 from '../../utils/user/BirthCountrySelectP1';
import FavoriteCountrySelectP1 from '../../utils/user/FavoriteCountrySelectP1';
import GenderSelectP1 from '../../utils/user/GenderSelectP1';

function SinglePersonForm({ handleSubmitSinglePersonForm }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <form onSubmit={handleSubmitSinglePersonForm} className='overflow-y-scroll'>
      <div className='pb-1'>
        <label>Person 1</label>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {/* Names */}
        <div>
          <label className='text-xs'>First name:</label>
          <input
            type='text'
            id='firstNamePerson1'
            name='firstNamePerson1'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='First Name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-xs'>Last name:</label>
          <input
            type='text'
            id='lastNamePerson1'
            name='lastNamePerson1'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Last Name'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {/* Prefered Name */}
        <div>
          <label className='text-xs'>Prefered name:</label>
          <input
            type='text'
            id='preferedNamePerson1'
            name='preferedNamePerson1'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Prefered Name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-xs'>Gender:</label>
          <GenderSelectP1 handleChange={handleChange} />
        </div>
      </div>

      {/* Country selects */}
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label className='text-xs'>Country Of Birth:</label>
          <BirthCountrySelectP1 handleChange={handleChange} />
        </div>
        <div>
          <label className='text-xs'>Favorite Country:</label>
          <FavoriteCountrySelectP1 handleChange={handleChange} />
        </div>
      </div>

      {/* Personal Data */}
      <div className='pb-1 pt-2'>
        <label>Personal Data</label>
      </div>

      {/* Hobbies */}
      <div>
        <label className='text-xs'>Hobbies: (seperate with a comma)</label>
        <input
          type='text'
          id='hobbiesPerson1'
          name='hobbiesPerson1'
          title='Seperate hobbies with a comma ,'
          className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Hobbies, climbing, scuba, wine'
          onChange={handleChange}
        />
      </div>

      {/* Instagram ID */}
      <div>
        <label className='text-xs'>Instagram ID: (public accounts only)</label>
        <input
          type='text'
          id='instagramIdPerson1'
          name='instagramIdPerson1'
          title='Where we locate images'
          className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='@projectworld'
          onChange={handleChange}
        />
      </div>

      {/* Special Hash Tags */}
      <div>
        <label className='text-xs'>
          Special Hashtags: (For special image add the hastag to your image and
          the list)
        </label>
        <input
          type='text'
          id='hobbiesPerson1'
          name='hobbiesPerson1'
          title='Seperate Hashtags we search for that you want pronounced'
          className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='#splurg-city'
          onChange={handleChange}
        />
      </div>

      {/* Hidden Hash Tags */}
      <div>
        <label className='text-xs'>
          Hidden Hashtags: (For images you dont want to see appear on here)
        </label>
        <input
          type='text'
          id='hiddenHashtagsPerson1'
          name='hiddenHashtagsPerson1'
          title='Seperate Hashtags we search for that you want pronounced'
          className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='#funerals'
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          type='submit'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          className='inline-block px-6 py-2.5 mt-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
        >
          Submit
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
    </form>
  );
}

export default SinglePersonForm;

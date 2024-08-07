import React, { useContext, useState } from 'react';
// Components
import GenderSelectP1 from '../../utils/user/GenderSelectP1';
import GenderSelectP2 from '../../utils/user/GenderSelectP2';
import BirthCountrySelectP1 from '../../utils/user/BirthCountrySelectP1';
import BirthCountrySelectP2 from '../../utils/user/BirthCountrySelectP2';
import FavoriteCountrySelectP1 from '../../utils/user/FavoriteCountrySelectP1';
import FavoriteCountrySelectP2 from '../../utils/user/FavoriteCountrySelectP2';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
// Constants
import { COUPLES_POST_API } from '../../utils/Constants';

function CouplesForm() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstNamePerson1: '',
    lastNamePerson1: '',
    preferedNamePerson1: '',
    genderPerson1: '',
    birthCountryPerson1: '',
    favoriteCountryPerson1: '',
    hobbiesPerson1: '',
    instagramIdPerson1: '',
    specialHashtagsPerson1: '',
    hiddenHashtagsPerson1: '',
    firstNamePerson2: '',
    lastNamePerson2: '',
    preferedNamePerson2: '',
    genderPerson2: '',
    birthCountryPerson2: '',
    favoriteCountryPerson2: '',
    hobbiesPerson2: '',
    instagramIdPerson2: '',
    specialHashtagsPerson2: '',
    hiddenHashtagsPerson2: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitCouplesForm = async (event) => {
    event.preventDefault();
    client
      .post(`${COUPLES_POST_API}/${user.id}`, formData, false)
      .then((res) => {
        setUser(res.data.data.updateUser);
      })

      .catch((err) => {
        console.error('Unable to create single profile', err);
      });
  };

  return (
    <form onSubmit={handleSubmitCouplesForm} className=''>
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
            value={formData.firstNamePerson1}
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
            value={formData.lastNamePerson1}
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
            value={formData.preferedNamePerson1}
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

      <div className='pb-1'>
        <label>Person 2</label>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {/* Names */}
        <div>
          <label className='text-xs'>First name:</label>
          <input
            type='text'
            id='firstNamePerson2'
            name='firstNamePerson2'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='First Name'
            value={formData.firstNamePerson2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-xs'>Last name:</label>
          <input
            type='text'
            id='lastNamePerson2'
            name='lastNamePerson2'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Last Name'
            value={formData.lastNamePerson2}
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
            id='preferedNamePerson2'
            name='preferedNamePerson2'
            className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Prefered Name'
            value={formData.preferedNamePerson2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-xs'>Gender:</label>
          <GenderSelectP2 handleChange={handleChange} />
        </div>
      </div>

      {/* Country selects */}
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label className='text-xs'>Country Of Birth:</label>
          <BirthCountrySelectP2 handleChange={handleChange} />
        </div>
        <div>
          <label className='text-xs'>Favorite Country:</label>
          <FavoriteCountrySelectP2 handleChange={handleChange} />
        </div>
      </div>

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
          value={formData.hobbiesPerson1}
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
          value={formData.instagramIdPerson1}
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
          id='specialHashtagsPerson1'
          name='specialHashtagsPerson1'
          title='Seperate Hashtags we search for that you want pronounced'
          className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='#splurg-city'
          value={formData.specialHashtagsPerson1}
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
          value={formData.hiddenHashtagsPerson1}
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
        </button>
      </div>
    </form>
  );
}

export default CouplesForm;

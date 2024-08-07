import React, { useState, useEffect, useContext } from 'react';
// Api
import client from '../../api/client';
// Constants
import { GET_PROFILE_API, UPDATE_PROFILE_API } from '../../utils/Constants';
// Context
import { UserContext } from '../../context/UserContext';

const fields = [
  {
    label: 'First name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    label: 'Last name',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
  },
  {
    label: 'Prefered name',
    name: 'preferedName',
    type: 'text',
    placeholder: 'Prefered Name',
  },
  { label: 'Gender', name: 'gender', type: 'text', placeholder: 'Gender' },
  {
    label: 'Country of Birth',
    name: 'countryOfBirth',
    type: 'text',
    placeholder: 'Country of Birth',
  },
  {
    label: 'Favorite Country',
    name: 'favoriteCountry',
    type: 'text',
    placeholder: 'Favorite Country',
  },
  {
    label: 'Hobbies',
    name: 'hobbies',
    type: 'text',
    placeholder: 'Hobbies, climbing, scuba, wine',
  },
  {
    label: 'Instagram ID',
    name: 'instagramId',
    type: 'text',
    placeholder: '@projectworld',
  },
  {
    label: 'Special Hashtags',
    name: 'specialHashtags',
    type: 'text',
    placeholder: '#splurg-city',
  },
  {
    label: 'Hidden Hashtags',
    name: 'hiddenHashtags',
    type: 'text',
    placeholder: '#funerals',
  },
];

function UpdateProfileForm({ profileId }) {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferedName: '',
    gender: '',
    countryOfBirth: '',
    favoriteCountry: '',
    hobbies: '',
    instagramId: '',
    specialHashtags: '',
    hiddenHashtags: '',
  });

  useEffect(() => {
    // Fetch the existing profile data and set it in the form
    client
      .get(`${GET_PROFILE_API}/${profileId}`, formData, false)
      .then((res) => {
        setFormData(res.data.data.profile);
      })

      .catch((err) => {
        console.error('Unable to fetch profile data', err);
      });
  }, [profileId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    client
      .get(`${UPDATE_PROFILE_API}/${profileId}`, formData, false)
      .then((res) => {
        setFormData(res.data.data.profile);
      })

      .catch((err) => {
        console.error('Unable to upoate profile data', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div className='grid px-6'>
        <div className='pb-1'>
          <label>Update Profile</label>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          {fields.map((field) => (
            <div key={field.name}>
              <label className='text-xs'>{field.label}:</label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div>
          <button
            type='submit'
            className='inline-block px-6 py-2.5 mt-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default UpdateProfileForm;

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
    label: 'Preferred name',
    name: 'preferedName',
    type: 'text',
    placeholder: 'Preferred Name',
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

function UpdateProfileForm() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    if (user?.profiles?.length > 0) {
      setFormData(user?.profiles);
    }
  }, [user.profiles]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProfiles = formData.map((profile, i) =>
      i === index ? { ...profile, [name]: value } : profile
    );
    setFormData(updatedProfiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    client
      .patch(`${UPDATE_PROFILE_API}/${user.id}`, { profiles: formData }, false)
      .then((res) => {
        setUser(res.data.data.updatedUser);
      })
      .catch((err) => {
        console.error('Unable to update profile data', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='grid gap-2 px-4 overflow-y-auto'>
      <div className='grid h-full px-6'>
        {formData.map((profile, index) => (
          <div key={index} className='mb-8'>
            <h3>Profile {index + 1}</h3>
            <div className='grid grid-cols-2 gap-2'>
              {fields.map((field) => (
                <div key={field.name}>
                  <label className='text-xs'>{field.label}:</label>
                  <input
                    type={field.type}
                    id={`${field.name}-${index}`}
                    name={field.name}
                    className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    placeholder={field.placeholder}
                    value={profile[field.name] || ''}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className='pb-4'>
          <button
            type='submit'
            className='inline-block px-6 py-2.5 mt-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out '
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default UpdateProfileForm;

import React from 'react';

function GenderSelectP1({ handleChange }) {
  return (
    <>
      <select
        id='genderPerson1'
        name='genderPerson1'
        onChange={handleChange}
        className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        required
      >
        <option defaultValue='male'>Male</option>
        <option value='female'>Female</option>
        <option value='other'>other</option>
      </select>
    </>
  );
}

export default GenderSelectP1;

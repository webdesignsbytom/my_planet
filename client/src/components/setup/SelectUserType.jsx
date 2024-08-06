import React from 'react';

function SelectUserType({ selectUserTypeFromMenu }) {
  return (
    <section className='grid grid-rows-reg gap-2 h-full'>
      <div className='text-center'>
        <h6>Select User Type</h6>
      </div>
      <section className='grid grid-cols-3 gap-4 h-full pb-2'>
        <article
          className='grid items-center text-center hover:brightness-110 hover:bg-black outline-1 outline outline-white rounded-lg h-full cursor-pointer'
          id='single'
          onClick={(event) => selectUserTypeFromMenu(event)}
        >
          Single
        </article>
        <article
          className='grid items-center text-center hover:brightness-110 hover:bg-black outline-1 outline outline-white rounded-lg h-full cursor-pointer'
          id='couple'
          onClick={(event) => selectUserTypeFromMenu(event)}
        >
          Couple
        </article>
        <article
          className='grid items-center text-center hover:brightness-110 hover:bg-black outline-1 outline outline-white rounded-lg h-full cursor-pointer'
          id='family'
          onClick={(event) => selectUserTypeFromMenu(event)}
        >
          Family
        </article>
      </section>
    </section>
  );
}

export default SelectUserType;

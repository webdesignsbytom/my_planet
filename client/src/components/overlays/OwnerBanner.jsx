import React from 'react';

function OwnerBanner({ closeContainer }) {
  return (
    <section
      onDoubleClick={closeContainer}
      title='User infomation banner (double click to close)'
      className='absolute top-1 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-lg p-2 gap-2 cursor-default'
    >
      <div className='grid grid-cols-a1a'>
        <section className='grid p-2'>
          <img src='' alt='' className='h-10 w-10 object-cover' />
        </section>
        <section className='grid bg-white rounded'>
          <article className='grid items-center text-center leading-4 px-4'>
            <div>
              <h1 className='text-xl font-semibold'>Chloe and Vladana</h1>
              <h2>See the World!</h2>
            </div>
          </article>
        </section>
        <section className='grid p-2'>
          <img src='' alt='' className='h-10 w-10 object-cover' />
        </section>
      </div>
    </section>
  );
}

export default OwnerBanner;

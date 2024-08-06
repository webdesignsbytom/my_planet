import React, { useContext, useEffect } from 'react';
// Images
import CatImage from '../../assets/images/pages/404cat.png';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function Error404() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('*');
  }, []);

  return (
    <div className='grid font-poppins h-screen max-h-screen w-full overflow-hidden'>
      <div className='grid grid-rows-reg lg:grid-cols-reg lg:grid-rows-1 h-full w-full overflow-hidden'>
        <Navbar />
        {/* Main */}
        <main className='grid h-full w-full overflow-hidden'>
          <section className='grid absolute w-full text-center h-full items-center justify-center z-10 overflow-hidden'>
            <section className='grid gap-2'>
              <article className='outline outline-2 font-semibold outline-black -mt-10 p-2 rounded'>
                <h1 className='text-4xl'>
                  ERROR <span className='text-red-500'>404</span>
                </h1>
                <h2 className='text-4xl'>PAGE NOT FOUND</h2>
              </article>
              <article className='outline outline-2 font-semibold outline-black rounded'>
                <h3>But you found a friend 💖</h3>
              </article>
            </section>
          </section>
          <section className='flex lg:justify-end lg:mr-20'>
            <img src={CatImage} alt='Incorrect page url lost cat' />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Error404;

import React, { useContext, useEffect } from 'react';
// Components
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function RegisterPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/sign-up');
  }, []);

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg'>
        <Navbar />
        <main className='grid bg-white h-full items-center justify-center'>
          <section className='bg-white rounded p-4 shadow my-10 lg:my-0 grid justify-center'>
            <article className='text-center my-4'>
              <h1 className='text-2xl font-semibold'>Sign Up Now</h1>
              <h2 className='text-xl font-semibold'>
                Start your travel record!
              </h2>
            </article>
            <RegisterForm />
          </section>
        </main>
      </section>
    </div>
  );
}

export default RegisterPage;

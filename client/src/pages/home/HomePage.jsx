import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Constants
import { HOME_PAGE_URL, MAP_PAGE_URL } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import FantasyTravel from '../../assets/images/backgrounds/fantasy_adverture_global_travel_fifties_adventure_background.png';
import { MapContext } from '../../context/MapContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);
  const { user } = useContext(UserContext);
  const { closeAllModals } = useContext(MapContext);

  let navigate = useNavigate();

  useEffect(() => {
    closeAllModals();
  }, []);
  
  useEffect(() => {
    setActiveNav(HOME_PAGE_URL);

    if (user.id) {
      navigateToMapPage();
    }
  }, [user]);

  const navigateToMapPage = () => {
    navigate(MAP_PAGE_URL, { replace: true });
  };

  return (
    <div className='grid font-poppins h-screen max-h-screen overflow-hidden'>
      <div className='grid grid-rows-reg lg:grid-cols-reg lg:grid-rows-1 h-full w-full'>
        <Navbar />
        {/* Main */}
        <main
          className='grid h-full w-full overflow-hidden shadow-internal-main'
          style={{
            backgroundImage: `url(${FantasyTravel})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='grid items-center justify-center w-full h-full overflow-hidden text-center'>
            <div className='grid gap-2'>
              <section className='grid bg-transparent-white py-4 px-1 rounded-tl-3xl text__stroke'>
                <h1 className='text-8xl tracking-tight font-travel text-red-500 -rotate-2 shadow-xl'>
                  PICTURE YOUR TRAVEL
                </h1>
              </section>

              <section className='grid h-fit'>
                <div className='grid justify-center bg-white w-fit mx-auto px-4 py-1'>
                  <h2 className='text-2xl font-travel'>
                    Welcome to <span className='text-blue-600'>myPlanet</span>{' '}
                    travel memories
                  </h2>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

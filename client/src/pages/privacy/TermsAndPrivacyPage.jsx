import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Constants
import { TERMS_PAGE_URL } from '../../utils/Constants';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function TermsAndPrivacyPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav(TERMS_PAGE_URL);
  }, []);

  return (
    <div className='grid font-poppins h-screen max-h-screen overflow-hidden'>
      <div className='grid grid-rows-reg lg:grid-cols-reg lg:grid-rows-1 h-full w-full'>
        <Navbar />
        {/* Main */}
        <main className='grid h-full w-full overflow-hidden shadow-internal-main'>
          main
        </main>
      </div>
    </div>
  );
}

export default TermsAndPrivacyPage;

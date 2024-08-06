import React, { useContext, useState } from 'react';
// Constants
import { CompanyName } from '../../utils/Constants';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
// Context
import { MapContext } from '../../context/MapContext';
// Components
import SelectUserType from '../setup/SelectUserType';
import EnterUserData from '../setup/EnterUserData';
import SubmitAndSetUp from '../setup/SubmitAndSetUp';

function AccountSetUpContainer() {
  const { toggleNewUserContainer } = useContext(MapContext);
  const [currentSetupSection, setCurrentSetupSection] = useState(0);
  const [accountData, setAccountData] = useState({
    accountUserType: '',
  });

  const selectUserTypeFromMenu = (event) => {
    const { id } = event.target;

    setAccountData({
      ...accountData,
      accountUserType: id,
    });

    setCurrentSetupSection(1);
  };

  return (
    <section className='absolute grid top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 outline outline-1 outline-black rounded-lg p-2 overflow-hidden'>
      <div className='grid grid-rows-reg gap-4 outline outline-1 outline-black rounded-lg p-2 bg-transparent-black text-white overflow-hidden'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleNewUserContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className='hover:brightness-125 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95'
          />
        </button>

        <article>
          <h1 className='text-xl text-center pb-3'>Welcome To {CompanyName}</h1>
          <div className='px-4 outline outline-1 outline-white rounded py-1 text-center'>
            <h2>Please take a few minutes to set up your account.</h2>
            <h3>
              By providing a few details you get a more tailored and enjoyable
              app experience
            </h3>
          </div>
        </article>

        {/* Main Section */}
        <section className='px-4 outline outline-1 outline-white rounded py-1 h-full overflow-y-auto'>
          {/* Select user type */}
          {currentSetupSection === 0 && (
            <SelectUserType selectUserTypeFromMenu={selectUserTypeFromMenu} />
          )}

          {/* Select user type */}
          {currentSetupSection === 1 && (
            <EnterUserData
              accountData={accountData}
              setCurrentSetupSection={setCurrentSetupSection}
            />
          )}

          {/* Select user type */}
          {currentSetupSection === 2 && (
            <SubmitAndSetUp accountData={accountData} />
          )}
        </section>
      </div>
    </section>
  );
}

export default AccountSetUpContainer;

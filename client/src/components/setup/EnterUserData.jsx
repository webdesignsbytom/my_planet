import React from 'react';
import SinglePersonForm from '../forms/SinglePersonForm';
import CouplesForm from '../forms/CouplesForm';
import FamilyForm from '../forms/FamilyForm';

function EnterUserData({ accountData, setCurrentSetupSection }) {
  const handleSubmitSinglePersonForm = (e) => {
    e.preventDefault();
    setCurrentSetupSection(2)
  };

  const handleSubmitCouplesForm = (e) => {
    e.preventDefault();
    setCurrentSetupSection(2)
  };

  const handleSubmitFamilyForm = (e) => {
    e.preventDefault();
    setCurrentSetupSection(2)
  };

  return (
    <section className='grid grid-rows-reg gap-2 h-full overflow-y-scroll'>
      <div className='text-center'>
        <h6>Enter Information about yourself</h6>
      </div>
      <section className='grid h-full pb-2'>
        {/* Singles Form */}
        {accountData.accountUserType === 'single' && (
          <SinglePersonForm
            handleSubmitSinglePersonForm={handleSubmitSinglePersonForm}
          />
        )}

        {/* Couples Form */}
        {accountData.accountUserType === 'couple' && (
          <CouplesForm handleSubmitCouplesForm={handleSubmitCouplesForm} />
        )}

        {/* Family Form */}
        {accountData.accountUserType === 'family' && (
          <FamilyForm handleSubmitFamilyForm={handleSubmitFamilyForm} />
        )}
      </section>
    </section>
  );
}

export default EnterUserData;

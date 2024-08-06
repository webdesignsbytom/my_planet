import React, { useContext } from 'react';
import { MapContext } from '../../context/MapContext';

function StatisticsContainer() {
  const { mapPageSettings, toggleStatsContainer } = useContext(MapContext);
  
  const tempdata = {
    numCountriesVisited: 10,
    numContinentsVisited: 4,
    numTotalPhotos: 400,
    numTotalMonumentsVisited: 7,
    totalMilesTravelled: 23000,
  };

  return (
    <section
      className='absolute grid left-2 top-2 cursor-pointer'
      title='World travel statistics (double click to close)'
      onDoubleClick={toggleStatsContainer}
    >
      <div
        className={`py-1 px-2 rounded-lg ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} border-solid border-black border-2 text-black font-medium shadow-2xl`}
      >
        <article>
          <div className='text-center underline'>
            <h6>Travel Statistics</h6>
          </div>
          <section className='grid px-2 py-2'>
            <div>
              <span>Countires visited: {tempdata.numCountriesVisited}</span>
            </div>
            <div>
              <span>Continents visited: {tempdata.numContinentsVisited}</span>
            </div>
            <div>
              <span>Miles travelled: {tempdata.totalMilesTravelled}</span>
            </div>
            <div>
              <span>
                Monuments visited: {tempdata.numTotalMonumentsVisited}
              </span>
            </div>
            <div>
              <span>Total photos: {tempdata.numTotalPhotos}</span>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

export default StatisticsContainer;

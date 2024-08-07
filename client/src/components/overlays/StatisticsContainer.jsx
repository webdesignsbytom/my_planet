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

  const stats = [
    { label: 'Countries visited', value: tempdata.numCountriesVisited },
    { label: 'Continents visited', value: tempdata.numContinentsVisited },
    { label: 'Miles travelled', value: tempdata.totalMilesTravelled },
    { label: 'Monuments visited', value: tempdata.numTotalMonumentsVisited },
    { label: 'Total photos', value: tempdata.numTotalPhotos },
  ];

  return (
    <section
      className='absolute grid left-2 top-2 cursor-pointer'
      title='World travel statistics (double click to close)'
      onDoubleClick={toggleStatsContainer}
    >
      <div
        className={`py-1 px-2 rounded-lg ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} border-2 font-medium shadow-2xl`}
      >
        <article
          className={`${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
        >
          <div className='text-center underline'>
            <h6>Travel Statistics</h6>
          </div>
          <section className='grid px-2 py-2'>
            {stats.map((stat, index) => (
              <div key={index}>
                <span>{stat.label}: {stat.value}</span>
              </div>
            ))}
          </section>
        </article>
      </div>
    </section>
  );
}

export default StatisticsContainer;

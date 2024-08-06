import React, { useContext, useEffect, useRef, useState } from 'react';
// Data
import { TempImageArray } from '../../utils/data/TempImagesArray';
// Audio
import Music1 from '../../assets/images/temp/music.mp3';
// Context
import { MapContext } from '../../context/MapContext';

function CountrySlideshowContainer({
  tooltipPosition,
  hoveredCountry,
  audioRef,
}) {
  const { mapPageSettings } = useContext(MapContext);

  const [tempDataArray, setTempDataArray] = useState(TempImageArray);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TempImageArray.length);
    }, 5000);
  }, []);

  return (
    <section
      id='name'
      style={{
        position: 'absolute',
        top: `${tooltipPosition.y - 100}px`,
        left: `${tooltipPosition.x + 100}px`,
        opacity: hoveredCountry ? 1 : 0,
      }}
    >
      <article
        className={`${mapPageSettings.selectedStyle.styleSettings.backgroundColour} p-4 border-2 border-solid border-black rounded-lg w-[300px] overflow-hidden shadow-2xl`}
      >
        <div className='grid grid-rows-reg gap-2'>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg text-center'>
            <h2
              id='namep'
              className='font-poppins text-xl font-semibold text-black'
            >
              {hoveredCountry}
            </h2>
          </div>
          {/* <audio ref={audioRef} src={Music1} loop autoPlay>
          Your browser does not support the audio element.
        </audio> */}
          <div className='w-full h-full overflow-hidden shadow-lg'>
            <img
              className='object-cover w-full h-full border-2 border-solid border-black rounded-lg'
              src={tempDataArray[currentIndex].data}
              alt='things'
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default CountrySlideshowContainer;

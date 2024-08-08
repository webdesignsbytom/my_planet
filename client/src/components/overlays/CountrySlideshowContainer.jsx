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


  const topLeftStyle = () => ({
    position: 'absolute',
    top: `${tooltipPosition.y + 20}px`,
    left: `${tooltipPosition.x + 20}px`,
    opacity: hoveredCountry?.id ? 1 : 0,
  });

  const topRightStyle = () => ({
    position: 'absolute',
    top: `${tooltipPosition.y + 20}px`,
    left: `${tooltipPosition.x - 320}px`,
    opacity: hoveredCountry?.id ? 1 : 0,
  });

  const bottomLeftStyle = () => ({
    position: 'absolute',
    top: `${tooltipPosition.y - 320}px`,
    left: `${tooltipPosition.x + 20}px`,
    opacity: hoveredCountry?.id ? 1 : 0,
  });

  const bottomRightStyle = () => ({
    position: 'absolute',
    top: `${tooltipPosition.y - 320}px`,
    left: `${tooltipPosition.x - 320}px`,
    opacity: hoveredCountry?.id ? 1 : 0,
  });

  const getScreenStyle = () => {
    const { width, height } = getWindowDimensions();

    if (tooltipPosition.x > width / 2 && tooltipPosition.y > height / 2) {
      return bottomRightStyle();
    } else if (tooltipPosition.x > width / 2 && tooltipPosition.y <= height / 2) {
      return topRightStyle();
    } else if (tooltipPosition.x <= width / 2 && tooltipPosition.y > height / 2) {
      return bottomLeftStyle();
    } else {
      return topLeftStyle();
    }
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return (
    <section id='name' style={getScreenStyle()}>
      <article
        className={`${mapPageSettings.selectedStyle.styleSettings.backgroundColour} p-4 border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} rounded-lg w-[300px] overflow-hidden shadow-2xl ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
      >
        <div className='grid grid-rows-reg gap-2'>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg text-center'>
            <h2 id='namep' className='font-poppins text-xl font-semibold'>
              {hoveredCountry.id}
            </h2>
          </div>
          {/* <audio ref={audioRef} src={Music1} loop autoPlay>
          Your browser does not support the audio element.
        </audio> */}
          <div className='w-full h-full overflow-hidden shadow-lg'>
            <img
              className={`object-cover w-full h-full border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour}  rounded-lg`}
              src={hoveredCountry.posterImageUrl}
              alt={`${hoveredCountry.countryName}`}
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default CountrySlideshowContainer;

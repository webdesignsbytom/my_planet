import React, { useContext, useState } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
import { UserContext } from '../../context/UserContext';
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
// Api
import client from '../../api/client';
// Constants
import { UPLOAD_IMAGE_API } from '../../utils/Constants';
import LoadingSpinner from '../utils/LoadingSpinner';

const hashtagFields = [
  { label: 'Hashtag 1', name: 'hashtag1', placeholder: 'Enter hashtag 1' },
  { label: 'Hashtag 2', name: 'hashtag2', placeholder: 'Enter hashtag 2' },
  { label: 'Hashtag 3', name: 'hashtag3', placeholder: 'Enter hashtag 3' },
];

function UploadImagesContainer() {
  const { user } = useContext(UserContext);
  const { mapPageSettings, toggleUploadImagesContainer } =
    useContext(MapContext);

  const [imageHashtags, setImageHashtags] = useState({
    hashtag1: '',
    hashtag2: '',
    hashtag3: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState({
    message: '',
  });

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setImageHashtags((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitPhoto = () => {
    setIsLoading(true);

    const formData = {
      hashtagFields: imageHashtags,
      image: uploadedImage,
    };

    client
      .post(`${UPLOAD_IMAGE_API}/${user.id}`, formData, false)
      .then((res) => {
        console.log(res.data.data.uploadedImage);
        setResponseMessage('success');
        setIsLoading(false);
      })

      .catch((err) => {
        console.error('Unable to create single profile', err);
        setResponseMessage('failed');
        setIsLoading(false);
      });
  };

  return (
    <section
      className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} ${mapPageSettings.selectedStyle.styleSettings.mainTextColour} rounded-lg border-2 border-solid ${mapPageSettings.selectedStyle.styleSettings.borderColour} shadow-xl`}
    >
      <div className='relative grid grid-rows-reg gap-4 rounded-lg pb-2 overflow-hidden w-full h-full'>
        {/* Close button */}
        <button
          className='absolute grid right-4 top-4'
          onClick={toggleUploadImagesContainer}
        >
          <IoCloseCircleOutline
            size={35}
            className={`hover:brightness-75 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95 ${mapPageSettings.selectedStyle.styleSettings.mainTextColour}`}
          />
        </button>

        {/* header */}
        <article className='grid text-center'>
          <div className='pt-4'>
            <h4 className='text-xl font-poppins font-medium'>Upload Images</h4>
          </div>
        </article>

        {/* Main content */}
        <section className='grid grid-cols-2 gap-2 px-4 overflow-hidden w-full h-full mx-auto'>
          {/* Image Upload */}
          <div className='grid overflow-hidden justify-center aspect-square w-full h-full'>
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt='Uploaded'
                className='object-contain aspect-square w-fit h-auto'
              />
            ) : (
              <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              />
            )}
          </div>

          {/* inputs */}
          <section className='grid w-full overflow-hidden'>
            {hashtagFields.map((field, index) => (
              <div key={index} className='grid w-full'>
                <label className='text-xs'>{field.label}:</label>
                <input
                  type='text'
                  id={`${field.name}-${index}`}
                  name={field.name}
                  className='form-control block w-full px-3 py-1.5 mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder={field.placeholder}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            ))}
            <div className='pb-4'>
              <button
                type='submit'
                onClick={handleSubmitPhoto}
                className='inline-block px-6 py-2.5 mt-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out '
              >
                {isLoading ? (
                  <div className='grid items-center justify-center'>
                    <LoadingSpinner sm={true} />
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default UploadImagesContainer;

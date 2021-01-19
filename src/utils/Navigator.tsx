import React, { useState } from 'react';
import SearchImage from '../components/SearchImage/SearchImage';
import ShowImage from '../components/ShowImage/ShowImage';
import axios from 'axios';

const Navigator = () => {
  // const handleSubmit = (event: any) => {
  //   const url =
  //     'https://api.unsplash.com/photos?page=1&query=' +
  //     image +
  //     '&client_id=' +
  //     client_id;

  //   axios.get(url).then((response) => {
  //     console.log(response);
  //     setData(response.data);
  //   });
  // };

  {
    /* {data.map((image: any) => (
        <img src={image.urls.small} />
      ))} */
  }
  return (
    <>
      {/* <SearchImage setImage={setImage} getData={handleSubmit} />
      {image === '' ? null : <ShowImage imageList={data} />} */}
    </>
  );
};

export default Navigator;

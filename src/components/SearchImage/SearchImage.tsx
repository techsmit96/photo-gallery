import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Image } from 'react-bootstrap';
import styles from './SearchImage.module.css';
import axios from 'axios';
import ShowImage from '../ShowImage/ShowImage';

const SearchImage = () => {
  const [image, setImage] = useState('');

  const [data, setData] = useState([]);

  const fetchImages = () => {
    const url = `https://api.unsplash.com/search/photos?query=${image}&client_id=sRcUNU8HRl_0Ow6SyS_gOS6suXLATK-IbpuZZLBtaBU&orientation=landscape`;
    axios.get(url).then((response) => {
      console.log(response);
      setData(response.data.results);
    });
  };

  const handleChange = (event: any) => {
    const data = event.target.value;
    console.log(data);
    setImage(event.target.value);
  };

  return (
    <>
      <div
        style={{
          marginTop: '50px',
        }}
      >
        <div className={styles.searchbar}>
          <Form>
            <Form.Group>
              <Form.Control
                className="inputfield"
                size="lg"
                type="text"
                value={image}
                placeholder="Search Images"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Button variant="outline-success" onClick={() => fetchImages()}>
            Search Image
          </Button>
        </div>
        {image === '' ? null : <ShowImage imageList={data} />}
      </div>
    </>
  );
};

export default SearchImage;

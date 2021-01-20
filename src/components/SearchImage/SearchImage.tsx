import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Image } from 'react-bootstrap';
import styles from './SearchImage.module.css';
import axios from 'axios';
import ShowImage from '../ShowImage/ShowImage';

const API = process.env.REACT_APP_UNSPLASH_API;
const KEY = process.env.REACT_APP_UNSPLASH_KEY;
const SearchImage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const fetchImages = () => {
    const url = `${API}/search/photos?query=${searchTerm}&client_id=${KEY}&per_page=30&orientation=landscape`;
    axios.get(url).then((response) => {
      console.log(response);
      setData(response.data.results);
    });
  };

  const handleChange = (event: any) => {
    const data = event.target.value;
    console.log(data);
    setSearchTerm(event.target.value);
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
                value={searchTerm}
                placeholder="Search Images"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Button variant="outline-success" onClick={() => fetchImages()}>
            Search Image
          </Button>
        </div>
        {searchTerm === '' ? null : <ShowImage imageList={data} />}
      </div>
    </>
  );
};

export default SearchImage;

import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import styles from './ShowImage.module.css';
import axios from 'axios';

const ShowImage = (props: any) => {
  console.log(props.imageList);

  return (
    <>
      <Row className={styles.showImage}>
        <Col className={`mb-2 ${styles.gallery}`}>
          {props.imageList.map((image: any, index: any) => (
            <Image
              className={` ${styles.cardBox} ${styles.item}`}
              src={image.urls.small}
              key={index}
              rounded
            />
          ))}
        </Col>
        {/* <Col className="mb-2">
            <Image
              className={`img-responsive ${styles.cardBox}`}
              src={image}
              rounded
            />
          </Col>
          <Col className="mb-2">
            <Image
              className={`img-responsive ${styles.cardBox}`}
              src={image}
              rounded
            />
          </Col>
          <Col className="mb-2">
            <Image
              className={`img-responsive ${styles.cardBox}`}
              src={image}
              rounded
            />
          </Col> */}
      </Row>
    </>
  );
};

export default React.memo(ShowImage);

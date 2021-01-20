import React from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';
import styles from './ShowImage.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ShowImage = (props: any) => {
  return (
    <>
      <Row className={styles.showImage}>
        <Col className={`mb-2 ${styles.gallery}`}>
          {props.imageList.map((image: any, index: any) => (
            <LazyLoadImage
              effect="blur"
              className={` ${styles.cardBox} ${styles.item}`}
              src={image.urls.small}
              key={index}
              alt={image.alt_description}
              placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
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

import React from 'react';
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import './App.css';
import SearchImage from './components/SearchImage/SearchImage';
import Navigator from './utils/Navigator';

const App = () => {
  return (
    <Container className="centerContent">
      {' '}
      <SearchImage />
    </Container>
  );
};

export default App;

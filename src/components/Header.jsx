import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import vv from '../svg/vv.svg';

const Header = () => {
  return (
    <div>
      <Container>
        <Navbar className="header" bg="primary" variant="dark">
          <Navbar.Brand className="headerBrand ps-2" href="/lesson">
            <img
              alt="V Vanya"
              src={vv}
              width="35"
              height="35"
              className="d-inline-block imgH"
            />{' '}
            V Vanya
          </Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
};

export { Header };

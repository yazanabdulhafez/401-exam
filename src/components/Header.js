import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{justifyContent:'space-between'}}>
        <Container>
        <Navbar.Brand>MyCrypto Explorer</Navbar.Brand>
        </Container>
        <Container>
        <Link style={{textDecoration:'none'}} to="/">Home </Link>
        <Link style={{textDecoration:'none'}} to="/favCrypto"> Fav-Crypto</Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);

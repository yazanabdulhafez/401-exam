import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react'

class FavCrypto extends React.Component {
  render() {
    return(
      <>
        <h1>Fav Crypto List</h1>
      </>
    )
  }
}

export default  withAuth0(FavCrypto);

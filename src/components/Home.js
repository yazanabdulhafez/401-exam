import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
cuurencyData:[],
  }
}
componentDidMount=()=>{
const apiUrl=`${process.env.REACT_APP_BACKEND_URL}`;
axios.get(apiUrl).then(response=>this.setState({
  cuurencyData:response.data
}))



}


  render() {
    return (
      <>
        <h1>Crypto List</h1>
      </>
    )
  }
}

export default Home;

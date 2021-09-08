import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuurencyData: [],
    
    }
  }
  componentDidMount = () => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}cryptocurrency`;
    axios.get(apiUrl).then(response => {
      console.log(response.data)
      this.setState({
      cuurencyData: response.data
    })}).catch(error => console.log(error))
  }

  createFavCurrency=(e,element)=>{
    e.preventDefault();
    const dataBody={
      email:this.props.auth0.user.email,
      title:element.title,
      toUSD:element.toUSD,
      description:element.description,
      image_url:element.image_url
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}currency/`,dataBody)
    .then(response=>console.log(response.data)).catch(error=>console.log(error));
  }

 

  render() {
    return (
      <>
        <h1>Crypto List</h1>
        <Row>
        {this.state.cuurencyData.map((element, index) => {
        return (<Col key={index}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={element.image_url} />
          <Card.Body>
            <Card.Title>{element.title} ({element.toUSD}$)</Card.Title>
            <Card.Text>
             {element.description}
             
            </Card.Text>
            {this.props.auth0.isAuthenticated&&<Button onClick={(e)=>this.createFavCurrency(e,element)} variant="primary">add to watch list</Button>}
          </Card.Body>
        </Card>
        </Col>)})}
        </Row>
      </>
    )
  }
}

export default Home;

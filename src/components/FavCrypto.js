import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import UpdateForm from './UpdateForm';

class FavCrypto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favData:[],
      showFavData:false,
      id:0,
      title:'',
      toUSD:'',
      description:'',
      image_url:'',
      showForm:false,
      
    }
  }

  componentDidMount=()=>{
axios.get(`${process.env.REACT_APP_BACKEND_URL}currency?email=fso361435@gmail.com`)
.then(response=>{
  console.log(response.data.currencies);
  this.setState({
    favData:response.data.currencies,
  })
}).catch(error=>console.log(error));

  }

///////////////////////////////////////////
deleteFavCurrency=(id)=>{
axios.delete(`${process.env.REACT_APP_BACKEND_URL}currency/${id}?email=fso361435@gmail.com`)
.then(()=>{axios.get(`${process.env.REACT_APP_BACKEND_URL}currency?email=fso361435@gmail.com`)
.then(response=>{
  console.log(response.data.currencies);
  this.setState({
    favData:response.data.currencies,
  })
}).catch(error=>console.log(error));
});
};

////////////// Show Update Form //////////////
updateFavCurrency= (id) => {
  console.log(id);
 this.setState({
   showForm: !this.state.showForm,
   id: id,
 });
};

 /////////////////////////////////
 setTitle = (e) => this.setState({ title: e.target.value });
 setToUSD = (e) => this.setState({ toUSD: e.target.value });
 setDescription = (e) => this.setState({ description: e.target.value });
 setImage_url = (e) => this.setState({ image_url: e.target.value });
  //////////////  Update Data On Database  //////////////
  updateData = (e) => {
   e.preventDefault();
   axios
     .put(`${process.env.REACT_APP_BACKEND_URL}currency/${this.state.id}`, {
        email:this.props.auth0.user.email,
        title:this.state.title,
        toUSD:this.state.toUSD,
        description:this.state.description,
        image_url:this.state.image_url
      }
     )
     .then( ()=>{axios.get(`${process.env.REACT_APP_BACKEND_URL}currency?email=fso361435@gmail.com`)
     .then(response=>{
       console.log(response.data.currencies);
       this.setState({
         favData:response.data.currencies,
       })
     }).catch(error=>console.log(error));
    
     });
     };

 ////////////// Close Update Form  //////////////
 handleClose = () => {
   this.setState({
     showForm: false,
   });
 };


  render() {
    return(
      <>
        <h1>Fav Crypto List</h1>
        {<UpdateForm showForm={this.state.showForm} 
        setTitle={this.setTitle}
        setToUSD={this.setToUSD}
        setDescription={this.setDescription}
        setImage_url={this.setImage_url}
        handleClose={this.handleClose}
        updateData={this.updateData}

       />}
        <Row>
        {this.state.favData.map((element, index) => {
        return (<Col key={index}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={element.image_url} />
          <Card.Body>
            <Card.Title>{element.title} ({element.toUSD}$)</Card.Title>
            <Card.Text>
             {element.description}
             
            </Card.Text>
            <Button onClick={()=>this.deleteFavCurrency(element._id)} variant="primary">Delete</Button>
            <Button onClick={()=>this.updateFavCurrency(element._id)} variant="primary">Update</Button>

          </Card.Body>
        </Card>
        </Col>)})}
        </Row>
      </>
    )
  }
}

export default  withAuth0(FavCrypto);

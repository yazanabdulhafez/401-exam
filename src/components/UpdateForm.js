import React, { Component } from 'react';
import { Form , Button, Modal, Container} from 'react-bootstrap';

export class updateForm extends Component {
 
  render() {
    return (
      <>
      <Modal show={this.props.showForm}>
        <Modal.Header>
          <Modal.Title>Updating my fav currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form => this.form = form} onSubmit={(e) => this.props.updateData(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setTitle (e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ToUSD</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setToUSD(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setDescription(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>image_url</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setImage_url(e)} />
            </Form.Group>
            <Container style={{display: 'flex',justifyContent:'space-between'}}>
            <Button   variant="primary" type="submit">
              Submit
            </Button>
            <Button type="reset">Reset</Button>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default updateForm;


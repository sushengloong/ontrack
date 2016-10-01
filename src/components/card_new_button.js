import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import CardNewForm from '../containers/card_new_form';

export default class CardNewButton extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.props.onClickNewCard}>
          <Glyphicon glyph="glyphicon-plus" /> Add
        </Button>
        <Modal show={this.props.showCardForm} onHide={this.props.onClickCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardNewForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClickCloseForm}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

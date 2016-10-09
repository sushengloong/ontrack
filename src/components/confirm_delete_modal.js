import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ConfirmDeleteModal extends Component {
  renderMessage() {
    if (!this.props.card) return "No card selected!";

    return `Are you sure you want to delete card #${this.props.card.id}?`;
  }

  render() {
    return (
      <Modal show={this.props.showConfirmDelete} onHide={this.props.onClickCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderMessage()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClickCloseForm}>No</Button>
          <Button bsStyle="danger" onClick={(e) => this.props.confirmDeleteCard(this.props.card)}>Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

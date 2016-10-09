import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ConfirmDeleteModal extends Component {
  render() {
    return (
      <Modal show={this.props.showConfirmDelete} onHide={this.props.onClickCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirm?
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

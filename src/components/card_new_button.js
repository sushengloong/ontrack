import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class CardNewButton extends Component {
  render() {
    return (
      <Button bsStyle="primary" bsSize="large" onClick={this.props.onClickNewCard}>
        <Glyphicon glyph="plus" /> Add
      </Button>
    )
  }
}

import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import CardForm from '../containers/card_form';

export default class CardNewButton extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.props.onClickNewCard}>
          <Glyphicon glyph="glyphicon-plus" /> Add
        </Button>
        <CardForm {...this.props} />
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import CardNewForm from '../containers/card_new_form';

export default class CardNewButton extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.props.onClickNewCard}>
          <Glyphicon glyph="glyphicon-plus" /> Add
        </Button>
        <CardNewForm {...this.props} />
      </div>
    )
  }
}

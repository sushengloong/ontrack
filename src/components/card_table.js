import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class CardTable extends Component {
  onDeleteButtonClick(e, card) {
    e.stopPropagation();
    this.props.deleteCard(card);
  }

  renderCardRow(card) {
    const id = card.id
    return (
      <tr key={id} onClick={() => this.props.editCard(card)}>
        <th scope="row">{id}</th>
        <td>{card.title}</td>
        <td>{card.status}</td>
        <td>{card.assignee}</td>
        <td>{card.priority}</td>
        <td>
          <Button bsSize="small" bsStyle="danger" onClick={(e) => this.onDeleteButtonClick(e, card)}>
            <Glyphicon glyph="trash" /> Delete
          </Button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cards.map(this.renderCardRow.bind(this))}
        </tbody>
      </table>
    );
  }
}

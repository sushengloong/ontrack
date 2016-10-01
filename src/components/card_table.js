import React, { Component } from 'react';

export default class CardTable extends Component {
  renderCardRow(card) {
    const id = card.id
    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{card.title}</td>
        <td>{card.status}</td>
        <td>{card.assignee}</td>
        <td>{card.priority}</td>
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
          </tr>
        </thead>
        <tbody>
          {this.props.cards.map(this.renderCardRow)}
        </tbody>
      </table>
    );
  }
}

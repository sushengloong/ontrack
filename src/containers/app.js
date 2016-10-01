import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardTable from '../components/card_table';
import CardNewButton from '../components/card_new_button';
import { newCard, cancelNewCard } from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <CardNewButton showCardForm={this.props.showCardForm} onClickNewCard={this.props.newCard} onClickCloseForm={this.props.cancelNewCard} />
        <CardTable cards={this.props.cards} />
      </div>
    );
  }
}

function mapStateToProps({ cards: { cards }, newCard: { showCardForm } }) {
  return { cards, showCardForm };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newCard, cancelNewCard }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

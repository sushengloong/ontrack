import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardTable from '../components/card_table';
import CardNewButton from '../components/card_new_button';
import { fetchCards, newCard, cancelNewCard, editCard } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        <CardNewButton showCardForm={this.props.showCardForm} onClickNewCard={this.props.newCard} onClickCloseForm={this.props.cancelNewCard} />
        <CardTable cards={this.props.cards} editCard={this.props.editCard} />
      </div>
    );
  }
}

function mapStateToProps({ cards: { cards }, card: { showCardForm, card } }) {
  return { cards, showCardForm, card };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards, newCard, cancelNewCard, editCard }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

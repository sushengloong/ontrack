import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardTable from '../components/card_table';
import CardNewButton from '../components/card_new_button';
import ConfirmDeleteModal from '../components/confirm_delete_modal';
import CardForm from '../containers/card_form';
import { fetchCards, newCard, cancelNewCard, editCard, deleteCard, cancelDeleteCard, confirmDeleteCard } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        <CardNewButton onClickNewCard={this.props.newCard} />
        <CardForm showCardForm={this.props.showCardForm} onClickCloseForm={this.props.cancelNewCard} />
        <CardTable cards={this.props.cards} editCard={this.props.editCard} deleteCard={this.props.deleteCard} />
        <ConfirmDeleteModal showConfirmDelete={this.props.showConfirmDelete} card={this.props.card} onClickCloseForm={this.props.cancelDeleteCard} confirmDeleteCard={this.props.confirmDeleteCard} />
      </div>
    );
  }
}

function mapStateToProps({ cards: { cards }, card: { showCardForm, showConfirmDelete, card } }) {
  return { cards, showCardForm, showConfirmDelete, card };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards, newCard, cancelNewCard, editCard, deleteCard, cancelDeleteCard, confirmDeleteCard }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

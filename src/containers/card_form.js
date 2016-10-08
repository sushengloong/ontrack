import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { createCard } from '../actions';
import { connect } from 'react-redux'; 

const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text" className="form-control" />
    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
)
const renderSelect = (field) => {
  return (
    <div className="input-row">
      <select {...field.input} className="form-control">
        {field.children}
      </select>
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  )
}

class CardForm extends Component {
  renderTitle() {
    return this.props.initialValues ? `Edit Card #${this.props.initialValues.id}` : 'Add New Card';
  }

  renderSubmitText() {
    return this.props.initialValues ? 'Update' : 'Create';
  }

  renderForm() {
    const { handleSubmit, createCard } = this.props;

    return (
      <form onSubmit={handleSubmit(createCard)}>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component={renderField} />
        </div>

        <div className="form-group">
          <label>Status</label>
          <Field name="status" component={renderSelect}>
            <option value="">- Select status -</option>
            <option value="Backlog">Backlog</option>
            <option value="Developing">Developing</option>
            <option value="Exploring">Exploring</option>
            <option value="Deployed">Deployed</option>
            <option value="Completed">Completed</option>
          </Field>
        </div>

        <div className="form-group">
          <label>Assignee</label>
          <Field name="assignee" component={renderField} />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <Field name="priority" component={renderSelect} defaultValue="low">
            <option value="">- Select priority -</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Field>
        </div>

        <Button type="submit" bsStyle="primary">{this.renderSubmitText()}</Button>
      </form>
    )
  }

  render() {
    return (
      <Modal show={this.props.showCardForm} onHide={this.props.onClickCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>{this.renderTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClickCloseForm}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

CardForm = reduxForm({
  form: 'cardForm',
  enableReinitialize: true
})(CardForm);

function mapStateToProps({ card: {card} }) {
  return { initialValues: card };
}

export default connect(mapStateToProps, { createCard })(CardForm);

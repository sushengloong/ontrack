import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { createCard } from '../actions';
import { connect } from 'react-redux'; 

const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text" className="form-control" />
    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
)

class CardNewForm extends Component {
  render() {
    const { handleSubmit, createCard } = this.props;

    return (
      <form onSubmit={handleSubmit(createCard)}>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component={renderField} />
        </div>

        <div className="form-group">
          <label>Status</label>
          <Field name="status" component={renderField} />
        </div>

        <div className="form-group">
          <label>Assignee</label>
          <Field name="assignee" component={renderField} />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <Field name="priority" component={renderField} />
        </div>

        <Button type="submit" bsStyle="primary">Create</Button>
      </form>
    )
  }
}

CardNewForm = reduxForm({
  form: 'CardNewForm'
})(CardNewForm);

export default connect(null, { createCard })(CardNewForm);

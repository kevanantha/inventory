import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  <div className="row">
    <h4>Add Inventory</h4>
    <form onSubmit={handleSubmit}>
        <div>
          <span>Item ID</span>
          <div>
            <Field
              name="itemId"
              component="input"
              type="text"
              placeholder="14045"
            />
          </div>
        </div>
        <div>
          <span>Item Name</span>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Flashdisk"
            />
          </div>
        </div>
        <div>
          <span>Quantity</span>
          <div>
            <Field
              name="qty"
              component="input"
              type="text"
              placeholder="21"
            />
          </div>
        </div>
        <div>
          <span>Type</span>
          <div>
            <Field
              name="type"
              component="input"
              type="text"
              placeholder="Hardware"
            />
          </div>
        </div>
        <div className='right' style={{ marginTop: '10px' }}>
          <button style={{ marginRight: "15px" }} type="submit" className="btn waves-effect waves-light" disabled={pristine || submitting}>
            Add Inventory
          </button>
          <button type="button" className="btn waves-effect red" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
}
export default reduxForm({
  form: "item",
})(Form);


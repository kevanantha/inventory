import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  componentDidMount() {
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    // == Validation == //
    const required = props => (props || typeof props === 'number' ? undefined : 'Required')
    console.log(required())

    // == Forms == //
    const nameField = props => {
      return (
      <>
        <div className="form-group col-md-6">
          <label htmlFor="name">Item Name</label>
          <input {...props.input} type="text" className="form-control" id="name" placeholder="Item Name" />
        </div>
      </>
      )
    }

    const ownerField = props => {
      return (
      <>
        <div className="form-group col-md-6">
          <label htmlFor="owner">Owner</label>
          <input {...props.input} type="text" className="form-control" id="owner" placeholder="Owner" />
        </div>
      </>
      )
    }

    const itemIdField = props => {
      return (
        <>
          <div className="form-group col-md-4">
            <label htmlFor="itemId">Item Id</label>
            <input {...props.input} type="itemId" className="form-control" id="itemId" placeholder="Item Id" />
          </div>
        </>
      )
    }

    const typeField = props => {
      return (
        <>
          <div className="form-group col-md-4">
            <label htmlFor="type">Type</label>
            <select {...props.input} id="type" className="form-control">
              <option selected>Choose type</option>
              <option>Software</option>
              <option>Hardware</option>
            </select>
          </div>
        </>
      )
    }

    const priceField = props => {
      return (
        <>
        <div clasName="form-group col-md-4">
          <label htmlFor="type">Price</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Rp</span>
            </div>
            <input {...props.input} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <div className="input-group-append">
              <span className="input-group-text">,00</span>
            </div>
          </div>
        </div>
        </>
      )
    }

    const qtyField = props => {
      return (
        <>
          <div>
            <label htmlFor="example-number-input" className="col-2 col-form-label">Quantity</label>
            <div className="col-10">
              <input {...props.input} className="form-control" type="number" defaultValue={0} id="example-number-input" />
            </div>
          </div>
        </>
      )
    }

    return (
    <div className="row" style={{ marginBottom: '50px', marginTop: '25px' }}>
    <div className="col-md-12"> 
      <h4>Add Inventory</h4>
      <form onSubmit={handleSubmit}>
          <div className='row'>
            <Field name="name" component={nameField} />
            <Field name="owner" component={ownerField} />
          </div>
          <div className='row'>
            <Field name="type" component={typeField} />
            <Field name="price" component={priceField} />
            <Field name="itemId" component={itemIdField} />
            <Field name="qty" component={qtyField} />
          </div>
          <div className='text-right' style={{ marginTop: '10px' }}>
            <button style={{ marginRight: "15px" }} type="submit" className="btn btn-success">
              Add Inventory
            </button>
            <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default reduxForm({
  form: "item",
})(Form);


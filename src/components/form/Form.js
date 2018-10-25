import React from 'react';
import { Field, reduxForm } from 'redux-form';

// == Validation == //
{/*const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.owner) {
    errors.owner = 'Required'
  }
  if (!values.type) {
    errors.type = 'Required'
  }
  if (!values.price) {
    errors.price = 'Required'
  }
  if (!values.itemId) {
    errors.itemId = 'Required'
  }
  if (!values.qty) {
    errors.qty = 'Required'
  }
  return errors
}*/}

// == Forms == //
const nameField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
  <>
    <div className="form-group col-md-6">
      <label htmlFor="name">Item Name</label>
      <input {...input} className="form-control" placeholder="Item Name" id="name" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </>
  )
}

const ownerField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
  <>
    <div className="form-group col-md-6">
      <label htmlFor="owner">Owner</label>
      <input {...input} type="text" className="form-control" id="owner" placeholder="Owner" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </>
  )
}

const itemIdField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
    <>
      <div className="form-group col-md-4">
        <label htmlFor="itemId">Item Id</label>
        <input {...input} type="itemId" className="form-control" id="itemId" placeholder="Item Id" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </>
  )
}

const typeField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
    <>
      <div className="form-group col-md-4">
        <label htmlFor="type">Type</label>
        <select {...input} id="type" className="form-control">
          <option defaultValue='Software'>Software</option>
          <option defaultValue='Hardware'>Hardware</option>
        </select>
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </>
  )
}

const priceField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
    <>
    <div className="form-group col-md-4">
      <label htmlFor="type">Price</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Rp</span>
        </div>
        <input {...input} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <div className="input-group-append">
          <span className="input-group-text">,00</span>
        </div>
      </div>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
    </>
  )
}

const qtyField = ({ input, label, type, meta: { touched, error, warning} }) => {
  return (
    <>
      <div>
        <label htmlFor="example-number-input" className="col-2 col-form-label">Quantity</label>
        <div className="col-10">
          <input {...input} className="form-control" type="number" id="example-number-input" />
          {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    </>
  )
}

const Form = (props) => {
  const { handleSubmit, reset } = props

  if (!props.item.item) {
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
              <button type="button" className="btn btn-danger" onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  } 

  if (props.item.item){
    const editNameField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
      <>
        <div className="form-group col-md-6">
          <label htmlFor="name">Item Name</label>
          <input defaultValue={props.item.item.name} className="form-control" placeholder="Item Name" id="name" />
          {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </>
      )
    }

    const editOwnerField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
      <>
        <div className="form-group col-md-6">
          <label htmlFor="owner">Owner</label>
          <input defaultValue={props.item.item.owner} type="text" className="form-control" id="owner" placeholder="Owner" />
          {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </>
      )
    }

    const editItemIdField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
        <>
          <div className="form-group col-md-4">
            <label htmlFor="itemId">Item Id</label>
            <input defaultValue={props.item.item.itemId} type="itemId" className="form-control" id="itemId" placeholder="Item Id" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </>
      )
    }

    const editTypeField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
        <>
          <div className="form-group col-md-4">
            <label htmlFor="type">Type</label>
            <select defaultValue={props.item.item.type} id="type" className="form-control">
              <option defaultValue='Software'>Software</option>
              <option defaultValue='Hardware'>Hardware</option>
            </select>
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </>
      )
    }

    const editPriceField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
        <>
        <div className="form-group col-md-4">
          <label htmlFor="type">Price</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Rp</span>
            </div>
            <input defaultValue={props.item.item.price} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <div className="input-group-append">
              <span className="input-group-text">,00</span>
            </div>
          </div>
          {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
        </>
      )
    }

    const editQtyField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
        <>
          <div>
            <label htmlFor="example-number-input" className="col-2 col-form-label">Quantity</label>
            <div className="col-10">
              <input defaultValue={props.item.item.qty} className="form-control" type="number" id="example-number-input" />
              {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
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
              <Field name="name" component={editNameField} />
              <Field name="owner" component={editOwnerField} />
            </div>
            <div className='row'>
              <Field name="type" component={editTypeField} />
              <Field name="price" component={editPriceField} />
              <Field name="itemId" component={editItemIdField} />
              <Field name="qty" component={editQtyField} />
            </div>
            <div className='text-right' style={{ marginTop: '10px' }}>
              <button style={{ marginRight: "15px" }} type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button type="button" className="btn btn-danger" onClick={() => props.onCancel()}>
                Cancel
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
  //validate
})(Form);


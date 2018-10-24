import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions';

const ItemTable = (props) => {
  const { items } = props.items;

  const handleDelete = (itemId) => {
    props.Item.deleteItemOnTable(itemId)
  }

  const ItemTableList = items.length ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>No.</th>
          <th>Item ID</th>
          <th>Owner</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {items.map((item, index) => {
        return (
          <tr key={item.itemId}>
            <td>{index + 1}</td>
            <td>{item.itemId}</td>
            <td>{item.owner}</td>
            <td>{item.name}</td>
            <td>Rp {item.price},00</td>
            <td>{item.qty}</td>
            <td>{item.type}</td>
            <td>
              <i className="material-icons" style={{ marginRight: '12px', cursor: 'pointer' }} onClick={() => props.onEdit(item)}>edit</i>
              <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.itemId)}>delete</i>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
    ) : (
      <h6 className="text-center"><i>Oops! Looks like you don't have any inventory.</i><br />Please, input some!</h6>
    )

  return (
    <>
      <h4 className='text-center'>Your Inventory</h4>
      { ItemTableList }
    </>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Item: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable)

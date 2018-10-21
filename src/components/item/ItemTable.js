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
    <table className="striped centered">
      <thead>
        <tr>
          <th>No.</th>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
      {items.map((item, index) => {
        return (
          <tr key={item.itemId}>
            <td>{index + 1}</td>
            <td>{item.itemId}</td>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.type}</td>
            <td>
              <i className="material-icons" style={{ marginRight: '12px', cursor: 'pointer' }}>edit</i>
              <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.itemId)}>delete</i>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
    ) : (
      <h6 className="center"><i>Oops! Looks like you don't have any inventory.</i><br />Please, input some!</h6>
    )


  return (
    <>
      <h4 className='center'>Your Inventory</h4>
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

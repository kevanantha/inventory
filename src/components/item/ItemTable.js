import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as itemActions from '../../actions/itemActions'

const ItemTable = props => {
  const { items } = props.items

  const handleDelete = itemId => {
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
          <th>Tags</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item.itemId}>
              <td className="align-middle">{index + 1}</td>
              <td className="align-middle">{item.itemId}</td>
              <td className="align-middle">{item.owner}</td>
              <td className="align-middle">{item.name}</td>
              <td className="align-middle">Rp {item.price}</td>
              <td className="align-middle">{item.qty}</td>
              <td className="align-middle">{item.type}</td>
              <td className="align-middle">
                {item.tags.map((tag, index) => (
                  <div key={index} className="align-middle">
                    {tag}
                  </div>
                ))}
              </td>
              <td className="align-middle">
                <i
                  className="material-icons"
                  style={{ marginRight: '12px', cursor: 'pointer' }}
                  onClick={props.onEdit(item)}
                >
                  edit
                </i>
                <i
                  className="material-icons"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(item.itemId)}
                >
                  delete
                </i>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  ) : (
    <h6 className="text-center">
      <i>Oops! Looks like you don't have any inventory.</i>
      <br />
      Please, input some!
    </h6>
  )

  return (
    <>
      <h4 className="text-center">Your Inventory</h4>
      {ItemTableList}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTable)

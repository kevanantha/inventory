import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as itemActions from '../../actions/itemActions';
import * as formActions from '../../actions/formActions';

import Form from '../form/Form';
import ItemTable from '../item/ItemTable';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemId: "",
      item: ""
    }
    
    this.onAddItem = item => {
      this.props.Item.create(item)
      this.props.Form.change("item", "itemId", "")
      this.props.Form.change("item", "owner", "")
      this.props.Form.change("item", "type", "")
      this.props.Form.change("item", "price", "")
      this.props.Form.change("item", "name", "")
      this.props.Form.change("item", "qty", "")
      alert("item created")
    }

    this.handleEdit = item => {
      this.props.Form.loadItemForForm("item", item)
      this.setState({
        itemId: item.itemId,
        item: {item}
      })
    }

    this.handleCancel = () => {
      this.setState({ item: ""})
      this.props.Form.change("item", "itemId", "")
      this.props.Form.change("item", "owner", "")
      this.props.Form.change("item", "type", "")
      this.props.Form.change("item", "price", "")
      this.props.Form.change("item", "name", "")
      this.props.Form.change("item", "qty", "")
    }

    this.handleUpdate = (itemId, item) => {
      this.props.Item.updateItemOnTable(itemId, item)
      //this.setState({ item: {item} })
    }

  }

  render() {
    const checkSubmit = () => this.state.item ? (this.handleUpdate) : (this.onAddItem)
    return (
      <div>
        <Form
          itemState={this.state.item}
          onSubmit={checkSubmit()}
          onUpdate={this.handleUpdate}
          onCancel={this.handleCancel}
          onEdit={this.handleEdit}
        />
        <ItemTable
          onEdit={this.handleEdit}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Item: bindActionCreators(itemActions, dispatch),
    Form: bindActionCreators(formActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

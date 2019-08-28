import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as itemActions from '../../actions/itemActions'
import * as formActions from '../../actions/formActions'

import Form from '../form/Form'
import ItemTable from '../item/ItemTable'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdd: false,
      editedItem: null
    }

    this.onAddItem = item => {
      this.props.Item.create(item)
      this.props.Form.change('item', 'itemId', '')
      this.props.Form.change('item', 'owner', '')
      this.props.Form.change('item', 'type', '')
      this.props.Form.change('item', 'price', '')
      this.props.Form.change('item', 'name', '')
      this.props.Form.change('item', 'qty', '')
      this.props.Form.change('item', 'tags', '')
      alert('item created')
    }

    this.onEdit = editedItem => e => {
      e.preventDefault()
      this.setState({ editedItem })
      const values = { ...editedItem }
      this.props.Form.init('item', values)
    }

    this.onCancelEdit = editedItem => {
      this.setState({ editedItem: null })
      this.props.Form.change('item', 'itemId', '')
      this.props.Form.change('item', 'owner', '')
      this.props.Form.change('item', 'type', '')
      this.props.Form.change('item', 'price', '')
      this.props.Form.change('item', 'name', '')
      this.props.Form.change('item', 'qty', '')
      this.props.Form.change('item', 'tags', '')
    }

    this.onCommitEdit = values => {
      const { editedItem } = this.state
      const { itemId } = editedItem
      this.props.Item.updateItemOnTable(itemId, values)
      alert('updated')
      this.onCancelEdit()
    }
  }

  render() {
    const checkSubmit = () => (this.state.editedItem ? this.onCommitEdit : this.onAddItem)
    return (
      <div>
        <Form
          editedItem={this.state.editedItem}
          onSubmit={checkSubmit()}
          onUpdate={this.onCommitEdit}
          onCancel={this.onCancelEdit}
          onEdit={this.onEdit}
        />
        <ItemTable onEdit={this.onEdit} onUpdate={this.onCommitEdit} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

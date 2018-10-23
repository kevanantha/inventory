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

    this.onAddItem = value => {
      this.props.Item.create(value)
      this.props.Form.change("item", "itemId", "")
      this.props.Form.change("item", "owner", "")
      this.props.Form.change("item", "price", "")
      this.props.Form.change("item", "name", "")
      this.props.Form.change("item", "qty", "")
      //alert("item created")
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onAddItem} />
        <ItemTable />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Item: bindActionCreators(itemActions, dispatch),
    Form: bindActionCreators(formActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)

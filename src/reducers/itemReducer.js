const initState = {
  items: [
    //{ id: 1, itemId: 372, name: "Allan", qty: 20, type: 'Hardware'},
    //{ id: 2, itemId: 971, name: "Turin", qty: 12, type: 'Software'}
  ]
};

const itemReducer = (state = initState, action) => {
  if (action.type === "ITEM/LOAD_ALL_ITEMS") {
    return { ...state }
  }

  if (action.type === "ITEM/CREATE") {
    let maxId;
    for (let item of state.items) {
      if (!maxId || item.id > maxId) {
        maxId = item.id
      }
    }
    const newItem = action.payload
    newItem.id = maxId + 1
    const items = [ ...state.items, newItem ]

    return { ...state, items }
  }

  if (action.type === "DELETE_ITEM_ON_TABLE") {
    let newItem = state.items.filter(item => {
      return action.itemId !== item.itemId
    })
      //console.log(action.ItemId, items.itemId)
    return {
      ...state,
      items: newItem
    }
  }

  return state;
}

export default itemReducer;

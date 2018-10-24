const initState = {
  items: [
    { itemId: 21, owner: "Timothy", price: 1000, name: "SSD", qty: 20, type: 'Hardware'},
    { itemId: 372, owner: "Kanantha", price: 5000, name: "Flashdisk", qty: 10, type: 'Hardware'},
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

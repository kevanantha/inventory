const initState = {
  items: [
    //{ itemId: "21", owner: "Timothy", price: 1000, name: "SSD", qty: 20, type: 'Hardware'},
    //{ itemId: "372", owner: "Kanantha", price: 5000, name: "Flashdisk", qty: 10, type: 'Hardware'},
  ]
};

const itemReducer = (state = initState, action) => {
  if (action.type === "ITEM/LOAD_ALL_ITEMS") {
    return { ...state }
  }

  if (action.type === "ITEM/CREATE") {
    const newItem = action.payload
    const items = [ ...state.items, newItem ]
    return { ...state, items }
  }

  if (action.type === "LOAD_ITEM_ON_TABLE") {
    console.log(action.item)
    return { item: action.item }
  }

  if (action.type === "DELETE_ITEM_ON_TABLE") {
    let newItem = state.items.filter(item => {
      return action.itemId !== item.itemId
    })
    return {
      ...state,
      items: newItem
    }
  }

  if (action.type === "UPDATE_ITEM_ON_TABLE") {
    let itemId = state.items.filter(item => {
      return action.payload.item.itemId === item.itemId
    })

    const updatedItem = itemId = [action.payload.item]

    let newItem = state.items.filter(item => {
      return action.payload.item.itemId !== item.itemId
    }).concat(updatedItem)

    return {...state, items: newItem}
  }

  return state;
}

export default itemReducer;

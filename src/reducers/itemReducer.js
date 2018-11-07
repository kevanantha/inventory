const initState = {
  items: [
    //{ itemId: "21", owner: "Timothy", price: 1000, name: "SSD", qty: 20, type: 'Hardware', tags: ["Web", "Mobile", "Native", "PWA"]},
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
    const { meta: { id } } = action;
    const editedItem = action.payload;
    const items = [...state.items];

    for (let index in items) {
      const item = items[index];
      if (item.itemId === id) {
        items[index] = editedItem;
        break;
      }
    }
    return {...state, items}
  }

  return state;
}

export default itemReducer;

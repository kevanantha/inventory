export const loadAllItems = () => {
  return {
    type: "ITEM/LOAD_ALL_ITEMS"
  }
}

export const create = (item) => {
  return {
    type: "ITEM/CREATE",
    payload: item
  }
}

export const deleteItemOnTable = (itemId) => {
  return {
    type: "DELETE_ITEM_ON_TABLE",
    itemId
  }
}
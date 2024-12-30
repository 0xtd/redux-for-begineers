const initialState = {
  items: [
    { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110 },
    { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80 },
    { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120 },
    { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260 },
    { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160 },
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    let addedItem = state.items.find(item => item.id === action.id)
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1
      // calculating the total price
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }
}
const initState = {
  wishlist: [
    {id: 1, productname: 'Cosmetic', quantity: 1 },
    {id: 2, productname: 'Cosmetic-01', quantity: 10 },
    {id: 3, productname: 'Cosmetic-02', quantity: 12 },
   ],
   cart: [
    {id: 1, productname: 'Cosmetic', quantity: 1 },
    {id: 2, productname: 'Cosmetic-01', quantity: 15 },
    {id: 3, productname: 'Cosmetic-02', quantity: 12 },
   ]
}`    `
const rootReducer = (state = initState, action) => {
  // typ: 'sjkhfkjsd'
  // payload (id: 2, productname: 'Cosmetic-01', quantity: 15  )
  switch(action.type) {
    case 'addproduct/addCart':
      return {
        ...state,
        cart: [
          ...state.cart,
          {id: 2, productname: 'Cosmetic-01', quantity: 15 }
        ]
      }
      default:
      return state;
  }
} 

export default rootReducer;

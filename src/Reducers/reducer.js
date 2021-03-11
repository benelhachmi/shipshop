import {ADD_PRODUCT_TO_CART} from '../Action/action'
const initState = {
    count: 0
}

const reducer = ((state = initState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type)
    {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
            case ADD_PRODUCT_TO_CART:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
    
                if(updatedItemIndex < 0) {
                    updatedCart.push({...action.payload, quantity: 1});
                } else {
                    const updatedItem = {
                        ...updatedCart[updatedItemIndex]
                    };
    
                    updatedItem.quantity++;
                    updatedCart[updatedItemIndex] = updatedItem;
                }
    
                return {...state, cart: updatedCart};
        default:
            return state
    }
})

export default reducer
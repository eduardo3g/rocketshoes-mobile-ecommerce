import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.item.id);

        // If product exists
        if (productIndex >= 0) {
          // Add one more product on that product, instead of duplicating it on the list
          draft[productIndex].amount += 1;
        } else {
          // If item does not exist, add it to products array.
          draft.push({
            ...action.item,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}

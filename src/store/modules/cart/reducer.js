import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
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
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      // Don't edit state if amount <= 0 (trying to insert 0 or negative amount of a product, which is not true)
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}

import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
  clearCart: () => {},
  favorites: [],
  addToFavorites: (item) => {},
  removeFromFavorites: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'DELETE_ITEM') {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return { ...state, items: updatedItems };
  }
  if (action.type === 'CLEAR_CART') {
    return { items: [] }; // Clear the cart by resetting items array
  }

  return state;
}

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      // добавление в избранное
      return { ...state, favorites: [...state.favorites, action.item] };

    case 'REMOVE_FROM_FAVORITES':
      // удаление товара из избранного
      const updatedFavorites = state.favorites.filter((item) => item.id !== action.id);
      return { ...state, favorites: updatedFavorites };

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  const [favorites, dispatchFavoritesAction] = useReducer(favoritesReducer, { favorites: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }
  function deleteItem(id) {
    dispatchCartAction({ type: 'DELETE_ITEM', id });
  }
  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }
  function addToFavorites(item) {
    dispatchFavoritesAction({ type: 'ADD_TO_FAVORITES', item });
  }
  function removeFromFavorites(id) {
    dispatchFavoritesAction({ type: 'REMOVE_FROM_FAVORITES', id });
  }

  const favoritesContext = createContext({
    favorites: favorites.favorites,
    addToFavorites: (item) => dispatchFavoritesAction({ type: 'ADD_TO_FAVORITES', item }),
    removeFromFavorites: (id) => dispatchFavoritesAction({ type: 'REMOVE_FROM_FAVORITES', id }),
  });
  console.log(favoritesContext);

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    deleteItem,
    clearCart,
    favorites: favorites.favorites,
    addToFavorites,
    removeFromFavorites,
  };

  console.log(cartContext);

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;

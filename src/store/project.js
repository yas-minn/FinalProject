import { create } from 'zustand';

const useStore = create((set)=>({
    count:0 ,
    plus: () => set((state)=>({count:state.count+1})),
    minus: () => set((state)=>({count:state.count-1})),

    cart: [],
    totalPrice: 0,
    addToCart: (product) => set((state) => {
        const updatedCart = [...state.cart, product];
        const totalPrice = updatedCart.reduce((sum, item) => sum + item.price, 0);
        return { cart: updatedCart, totalPrice };
    }),
    removeFromCart: (id) => set((state) => {
        const updatedCart = state.cart.filter(product => product.id !== id);
        const totalPrice = updatedCart.reduce((sum, item) => sum + item.price, 0);
        return { cart: updatedCart, totalPrice };
    }),
    clearCart: () => set({ cart: [], totalPrice: 0 })

}))

export default useStore ;
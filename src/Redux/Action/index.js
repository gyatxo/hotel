import actionType from "../Constants/index.js"


export const fetchProducts =(products)=>{
    return {
        type: actionType.fetchProducts,
        payload: products
    }
}
export const filterProducts =(products)=>{
    return {
        type: actionType.filterProducts,
        payload: products
    }
}
export const filteredProducts =()=>{
    return {
        type: actionType.filteredProducts,
    }
}

export const increase =()=>{
    return {
        type: actionType.increase
    }
}
export const decrease =()=>{
    return {
        type: actionType.decrease,
    }
}

export const addToCart = (product,count)=>{
    return {
        type: actionType.addToCart,
        payload: {
            product: product,
            count: count
        }
    }
}
export const removeFromCart = (product)=>{
    return {
        type: actionType.removeFromCart,
        payload: {
            product: product,
        }
    }
}

export const showCart =()=>{
    return {
        type: actionType.showCart
    }
}
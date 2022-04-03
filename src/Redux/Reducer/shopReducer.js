const initialState = {
    products : [],
    filterProducts : [],
    itemCount: 0,
    showCart: false,
    cart: [],
    qty: 0
}

const shopReducer = (state= initialState, action)=>{
    switch(action.type){
        case 'FETCH_PRODUCT':
            return {
                ...state,
                products: action.payload
            }
        case 'FILTER_PRODUCT':
            return {
                ...state,
                filterProducts: action.payload,
            }
        case 'FILTERED_PRODUCT':
            let selectorValue = document.getElementById("filter-select").value;
            let minValue = document.getElementById("filter-min").value;
            let maxValue = document.getElementById("filter-max").value;

            return {
                ...state,
                products:selectorValue !== null && minValue !== "" && maxValue !== "" ? state.filterProducts.filter((product) => {
                    let newPrice = product.price.slice(1, product.price.length);
                    let nepaliPrice = Number(newPrice) * 119;
                    return (
                      (nepaliPrice >= minValue && nepaliPrice) <= maxValue &&
                      product.category[1] === selectorValue
                    );
                  }): selectorValue && selectorValue !== 'all' ? state.filterProducts.filter((product) => {
                            return product.category[1] === selectorValue;
                          }) : state.filterProducts 
            }    
        case 'INCREASE':    
            return {
                ...state,
                itemCount: state.itemCount + 1,
                // qty: state.qty + 1
            }
        case 'DECREASE':    
            return {
                ...state,
                itemCount: state.itemCount===0?state.itemCount: state.itemCount-1 
                // qty: state.qty===0?state.qty: state.qty-1 
            }
        case 'SHOW_CART':
            
            return {
                ...state,
                showCart: !state.showCart
            }
        case 'ADD_TO_CART':
            let item = state.products.find((prod)=>prod.id === action.payload.product.id)
            let inCart = state.cart.find((item)=> item.id === action.payload.product.id ? true : false)
            return{
                ...state,
                cart: inCart ? state.cart.map((item)=> item.id === action.payload.product.id ? {...item,itemCount: state.itemCount+1}:item)
                : [...state.cart ,{...item, itemCount: 1}]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart: state.cart.filter((item)=>item.id!==action.payload.product.id)
            }
        default: 
            return state;
    }
}

export default shopReducer;
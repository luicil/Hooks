import reducer from './reducers/reducer'
import numberAdd2 from './actions/number'

const initialState ={
    cart:[{}],
    products: [{},{}],
    user: null,
    number: 0
}


export {
    reducer,
    initialState,
    numberAdd2
}

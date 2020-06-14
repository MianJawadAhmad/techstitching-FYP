import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import data from '../Services/Qus.json'
const { Types, Creators } = createActions({
    emptyCart:[],
    incCounter:null,
    decCounter:null

})

export const QuizTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    summer :data,
    counter: 0
})

export const empty_cart = (state, {data}) => {
    if(state.orders){
      return state.merge({orders : [], total : 0})
    }
    return state;
    
  }


  export const inc_counter = (state) => {
      return state.merge({counter : state.counter+1})
    
  }

  export const dec_counter = (state) => {
      return state.merge({counter : state.counter-1})
    
  }

export const reducer = createReducer(INITIAL_STATE, {
    [Types.EMPTY_CART]: empty_cart,
    [Types.INC_COUNTER]: inc_counter,
    [Types.DEC_COUNTER]: dec_counter,
})
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
    customValue : ['value']

})

export const CustomTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    value:0
})


  export const custom_value = (state, {value}) => {
      return state.merge({ value : value})

  }


export const reducer = createReducer(INITIAL_STATE, {
    [Types.CUSTOM_VALUE]: custom_value,
    
})
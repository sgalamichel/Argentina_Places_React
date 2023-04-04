import types from './types';

const miReducer2 = (state=[] , action) => {
    switch( action.type ){
        case types.contratar:
            return state;
            
        case types.anular:
            return state;

        default:
            return state;
    }
}

export default miReducer2

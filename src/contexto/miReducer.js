import types from './types'

const miReducer = (state , action) => {
    switch( action.type ){
        case types.login:
            return{
                logueado:true,
                usuario:action.payload
            };
            
        case types.logout:
            return{
                logueado:false,
                usuario:null
            };
        default:
            return state;
    }
}

export default miReducer

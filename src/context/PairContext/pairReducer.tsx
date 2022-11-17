import { PairState, pairInitialState } from './PairContext';

type authAction = 
    | {type: 'first-number', payload: number}
    | {type: 'is-pair', payload:{id:number; sum: number}}
    | {type: 'is-unpair', payload: number}
    | {type: 'reset'}

export const pairReducer = (state: PairState, action: authAction):PairState => {
    switch(action.type){
        case 'first-number':
            return{
                ...state,
                idImage: action.payload,
                idImage2: -1,
                tempId: action.payload,
                isPair:false,
                areTwo: false
            }
        case 'is-pair':
            return{
                ...state,
                idImage2: action.payload.id,
                counter: action.payload.sum,
                idImage: -1,
                isPair: true,
                areTwo: true
            }
        case 'is-unpair':
            return{
                ...state,
                idImage2: action.payload,
                idImage: -1,
                areTwo: true
            }
        case 'reset':{
            return{
                ...pairInitialState
            }
        }
        default: 
            return state;
    }
}
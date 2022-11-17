import { createContext, useReducer } from "react";
import { pairReducer } from './pairReducer';

export interface PairState{
    idImage: number
    idImage2: number
    isPair: boolean
    tempId: number
    areTwo: boolean
    counter: number
}

export const pairInitialState: PairState = {
    idImage: -1,
    idImage2: -1,
    isPair: false,
    tempId: -1,
    areTwo: false,
    counter: 0
}

interface PairContextProps{
    pairState: PairState;
    setPair: (id:number) => void
    reset : () => void
}


export const PairContext = createContext({} as PairContextProps);

export const PairProvider = ({children}: any) => {

    const [pairState, dispatch] = useReducer(pairReducer,pairInitialState);

    const setPair = (id: number) => {
        if(pairState.idImage === -1){
            dispatch({type: 'first-number',payload:id})}
        else if(pairState.idImage2 === -1){
            (id === pairState.idImage)
                ?dispatch({type: 'is-pair', payload:{id, sum: pairState.counter+1}})
                :dispatch({type: 'is-unpair', payload:id})
        }
    }

    const reset = () => {
        dispatch({type:'reset'})
    }

    return (
        <PairContext.Provider
            value={{
                pairState,
                setPair,
                reset
            }}
        >
            {children}
        </PairContext.Provider>
    )
}
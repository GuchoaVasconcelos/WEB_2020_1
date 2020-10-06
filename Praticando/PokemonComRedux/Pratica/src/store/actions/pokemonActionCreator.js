import {NOVO_ID} from '../actions/types'

export function alterarID(novoID){
    return{
        type: NOVO_ID,
        payload: novoID
    }//action
}//action creator
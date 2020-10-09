import {NOVO_NUMERO2} from "./types";

export function alterarValor2(valor2){
    return{
        type: NOVO_NUMERO2,
        payload: valor2
    }//action
}//action creator
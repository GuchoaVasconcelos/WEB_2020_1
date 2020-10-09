import {NOVO_NUMERO1} from "./types";

export function alterarValor1(valor1){
    return{
        type: NOVO_NUMERO1,
        payload: valor1
    }//action
}//action creator
import {NOVO_NUMERO2} from '../types'

const initialState = {
    id: 1
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NOVO_NUMERO2:
            return {
                valor: action.payload
            }
        default:
            return state
    }
}
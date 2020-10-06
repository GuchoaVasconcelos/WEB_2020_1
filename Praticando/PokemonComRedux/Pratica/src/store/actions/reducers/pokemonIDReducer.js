import {NOVO_ID} from '../types'

const initialState = {
    id: 2
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NOVO_ID:
            return {
                id: action.payload
            }
        default:
            return state
    }
}
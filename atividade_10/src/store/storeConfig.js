import {createStore, combineReducers} from "redux";
import pokemonIDReducer from "./actions/reducers/pokemonIDReducer";
import Numero1Reducer from "./actions/reducers/Numero1Reducer";
import Numero2Reducer from "./actions/reducers/Numero2Reducer";


const reducers = combineReducers({
        numero1: Numero1Reducer,
        numero2: Numero2Reducer
    }, {
        pokemonId: pokemonIDReducer
    }
)

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;
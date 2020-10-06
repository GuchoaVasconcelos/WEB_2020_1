import {createStore, combineReducers} from "redux";
import pokemonIDReducer from "./actions/reducers/pokemonIDReducer";


const reducers = combineReducers({
        pokemonId: pokemonIDReducer
    }
)

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;
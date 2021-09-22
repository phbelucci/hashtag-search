import { createStore } from "redux";

const INITIAL_STATE = {
    searchedHashtags : []
}

function searchedHashtags(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_SEARCHED_HASHTAGS' :
            return { ...state, searchedHashtags: [...state.searchedHashtags, action.searchedHashtag ]}
        default:
            return state;
    }
}


const store = createStore(searchedHashtags);

export default store;
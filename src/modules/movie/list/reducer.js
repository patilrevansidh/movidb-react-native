import {FETCH_MOVIE_LIST_FAIL, FETCH_MOVIE_LIST_SUCCESS, FETCHING_MOVIE_LIST} from './action';

const initState = {
    showLoader : undefined,
    list :[],
    catergories :[],
};

const movieListReducer = (state=initState,action)=>{

    switch(action.type) {
        case 'persist/REHYDRATE' :
            return {...action.payload.listReducer,showLoader:false}
        case FETCHING_MOVIE_LIST :
            return {...state, showLoader:true};
        
        case FETCH_MOVIE_LIST_SUCCESS : 
            return {
                ...state,
                list:JSON.parse(action.payload.list).items,
                catergories : JSON.parse(action.payload.categories).genres,
                showLoader:false}
        
        case FETCH_MOVIE_LIST_FAIL :
            return {...state,showLoader:false}
        default :
            return {...state}
    }
}

export default movieListReducer;
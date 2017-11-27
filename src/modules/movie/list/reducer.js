import {
    FETCH_MOVIE_LIST_FAIL, FETCH_MOVIE_LIST_SUCCESS,
    FETCHING_MOVIE_LIST, SEARCH_SUCCESS, SEARCHING, SEARCH_FAIL,
    MARKING_BOOK, MARKING_FAV, MARK_FAV_SUCCESS,
    MARK_FAV_FAIL, MARK_BOOK_SUCCESS, MARRK_BOOK_FAIL
} from './action';

const initState = {
    showLoader : undefined,
    list :[],
    catergories :[],
    searchList:[],
    noData : undefined,
    favorites:[],
    bookmarks:[]
};

const movieListReducer = (state=initState,action)=>{

    switch(action.type) {
        case 'persist/REHYDRATE' :
            return {...action.payload.listReducer,showLoader:false,noData:false}
            
        case FETCHING_MOVIE_LIST :
            return {...state, showLoader:true,noData:false};
        
        case FETCH_MOVIE_LIST_SUCCESS : 
            return {
                ...state,
                list:JSON.parse(action.payload.list).items,
                catergories : JSON.parse(action.payload.categories).genres,
                showLoader:false,noData:false}
        
        case FETCH_MOVIE_LIST_FAIL :
            return {...state,showLoader:false,noData:false}

        case SEARCHING : 
            return {...state,showLoader:true,noData:false}

        case SEARCH_SUCCESS : 
            return {
                    ...state,
                    showLoader:false,
                    noData : JSON.parse(action.payload.searchList).total_results >0  ? false :true,
                    searchList:JSON.parse(action.payload.searchList).results
                    }
        case SEARCH_FAIL :
            return {...state,showLoader:false,noData:false}
            
        case MARKING_BOOK:
            return {...state,showLoader:false,noData:false}
        case MARK_BOOK_SUCCESS:
            return {...state,showLoader:false,noData:false,bookmarks:action.payload}
        case MARRK_BOOK_FAIL:
            return {...state,showLoader:false,noData:false}

        case MARKING_FAV:
            return {...state,showLoader:false,noData:false}
        case MARK_FAV_SUCCESS:
            return {
                    ...state,
                    showLoader:false,
                    noData:false,
                    favorites:action.payload}
        case MARK_FAV_FAIL:
            return {...state,showLoader:false,noData:false}
        default :
            return {...state}
    }
}

export default movieListReducer;
import {
    FETCH_MOVIE_DETAIL_FAIL, 
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCHING_MOVIE
} from './action';

const initState = {
    showLoader : undefined,
    movie :{},
    dowLoaded:false,
    crew:{}
}

export const movieDetail = (state=initState,action)=>{
    switch(action.type) {
        case FETCHING_MOVIE :
            return {...state, showLoader:true, dowLoaded:false}
        case FETCH_MOVIE_DETAIL_SUCCESS :
            return {...state, movie :JSON.parse(action.payload.movie), crew:JSON.parse(action.payload.crew), showLoader:false, dowLoaded:true}
        case FETCH_MOVIE_DETAIL_FAIL :
            return {...state, showLoader:false,dowLoaded:false}
        default :
            return {...state}
    }
}
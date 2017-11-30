import listService from './service';

export const FETCHING_MOVIE_LIST = 'FETCHING_MOVIE_LIST';
export const FETCH_MOVIE_LIST_SUCCESS = 'FETCH_MOVIE_LIST_SUCCESS';
export const FETCH_MOVIE_LIST_FAIL = 'FETCH_MOVIE_LIST_FAIL'; 
export const SEARCHING='SEARCHIING';
export const SEARCH_SUCCESS='SEARCH_SUCCESS';
export const SEARCH_FAIL='SEARCH_FAIL';
export const MARKING_FAV = 'MARKING_FAV';
export const MARK_FAV_SUCCESS = 'MARK_FAV_SUCCESS';
export const MARK_FAV_FAIL = 'MARK_FAV_FAIL';
export const MARKING_BOOK = 'MARKING_BOOK';
export const MARK_BOOK_SUCCESS = 'MARK_BOOK_SUCCESS';
export const MARRK_BOOK_FAIL = 'MARRK_BOOK_FAIL';


export const fetchMovieList = ()=> {
    return async(dispatch) => {
        dispatch({type : FETCHING_MOVIE_LIST});
        try {
            const result = await listService.getMovieList();
            const cat = await listService.getCategories();            
            dispatch({type: FETCH_MOVIE_LIST_SUCCESS,payload:{'list':result._bodyInit, categories:cat._bodyInit}});                      
        } catch (error) {         
            dispatch({type : FETCH_MOVIE_LIST_FAIL});
        }
    }
}

export const searchMovieList = (text)=> {
    return async(dispatch) => {
        dispatch({type : SEARCHING});
        try {
            const result = await listService.search(text);            
            dispatch({type: SEARCH_SUCCESS,payload:{'searchList':result._bodyInit}});                      
        } catch (error) {         
            dispatch({type : SEARCH_FAIL});
        }
    }
}

export const markFavAction = (list) =>{
    return async (dispatch)=>{
        try {
            dispatch({type:MARKING_FAV});
            dispatch({type:MARK_FAV_SUCCESS,payload:list})        
        } catch (error) {
            dispatch({type:MARK_FAV_FAIL})
        }
    }
}

export const markBookAction = (list) =>{
    return async (dispatch)=>{
        try {
            dispatch({type:MARKING_BOOK});
            dispatch({type:MARK_BOOK_SUCCESS,payload:list})        
        } catch (error) {
            dispatch({type:MARRK_BOOK_FAIL})
        }
    }
}


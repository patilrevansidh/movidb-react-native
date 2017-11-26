import movieService from './service';

export const FETCHING_MOVIE = 'FETCHING_MOVIE';
export const FETCH_MOVIE_DETAIL_SUCCESS = 'FETCH_MOVIE_DETAIL_SUCCESS';
export const FETCH_MOVIE_DETAIL_FAIL = 'FETCH_MOVIE_DETAIL_FAIL'; 

export const fetchMovieDetail= (id)=> {
    return async(dispatch) => {
        dispatch({type : FETCHING_MOVIE});
        try {
            const crew = await movieService.getFeatureCrew(id);
            const result = await movieService.getMovieDetail(id);    
            console.log(result)            
            dispatch({type: FETCH_MOVIE_DETAIL_SUCCESS,payload:{'movie':result._bodyInit,'crew':crew._bodyInit}});                      
        } catch (error) {      
            console.log(error)      
            dispatch({type : FETCH_MOVIE_DETAIL_FAIL});
        }
    }
}


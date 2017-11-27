import {stringConstant} from '../../../common/constants';
import {httpservices} from '../../../common/services';

const API_KEY = stringConstant.API_KEY
const obj = {
    getMovieList() {
        const id= stringConstant.LIST_ID;
        const url =`list/${id}?api_key=${API_KEY}`;
        return httpservices.get(url);
    },
    getCategories() {
        const url =`genre/movie/list?api_key=${API_KEY}&language=en-US`;
        return httpservices.get(url);
    },
    search(query) {
        const url=`search/movie?api_key=${stringConstant.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        return httpservices.get(url);
    }

}
export default obj;
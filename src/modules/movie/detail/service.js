import {httpservices} from "../../../common/services";
import {stringConstant} from '../../../common/constants';

const obj = {
    getMovieDetail(id) {
        const url = `movie/${id}?api_key=${stringConstant.API_KEY}&language=en-US`;
        return httpservices.get(url);
    },
    getFeatureCrew(id) {
        const url = `movie/${id}/credits?api_key=${stringConstant.API_KEY}`;
        return httpservices.get(url);
    }
}

export default obj;
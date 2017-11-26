import { Dimensions } from "react-native";
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const obj = {
    BASE_URL:'https://api.themoviedb.org/3/',
    APP_BLACKGROUND_COLOR:'#000',
    APP_FONT_COLOR:'#FFF',
    APP_YELLOW_COLOR:'#FCC100',
    SCREEN_HEIGHT :height,
    SCREEN_WIDTH:width,
    API_KEY:'d1de133b3eef02b32c3dc1b647351c96',
    LIST_ID:1,
    IMAGE_BASE_URL_BANNER:'https://image.tmdb.org/t/p/w500/',
    IMAGE_BASE_URL_INST:' http://image.tmdb.org/t/p/w185/',
    PRIMARY_FONT_COLOR:'#000',
    SECONDARY_FONT_COLOR:'#404040',
    GREY_COLOR:'#D3D3D3',
}

export default obj;

/**
 * vote_average
 * release_date
   backdrop_path //baner
   poster_path
   title
   overview
   gen_id map with data from api
 */
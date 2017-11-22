import { Dimensions } from "react-native";
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const obj = {
    BASE_URL:'https://developers.themoviedb.org/3/',
    APP_BLACKGROUND_COLOR:'#000',
    APP_FONT_COLOR:'#FFF',
    APP_YELLOW_COLOR:'#FCC100',
    SCREEN_HEIGHT :height,
    SCREEN_WIDTH:width
}

export default obj;
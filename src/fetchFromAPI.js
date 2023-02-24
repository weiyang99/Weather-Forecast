import axios from "axios";

var REACT_APP_RAPID_API_KEY = config.REACT_APP_RAPID_API_KEY;

const BASE_URL = 'https://open-weather13.p.rapidapi.com/city'

const options = {
    headers: {
        'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}
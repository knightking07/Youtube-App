import axios from 'axios';

const KEY = 'AIzaSyDSXw1VwIRMp95v5T2TYVMWGB3SE4Wl66U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY,
    }
});
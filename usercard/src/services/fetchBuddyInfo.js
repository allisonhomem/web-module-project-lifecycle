import axios from 'axios';

const fetchBuddyInfo = (url) => {
    return axios.get(url)
         .then(res => {
            return res});
}

export default fetchBuddyInfo;
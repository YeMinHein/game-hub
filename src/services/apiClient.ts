import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '61a74fd92d944f94952f0c271c661cb7'
    }
})
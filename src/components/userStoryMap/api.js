import axios from 'axios'
import { API_SERVER_URL, handleError, handleResponse } from '../../config/configApi'
import { propertiesUrl } from '../../constants'



export function getPropertiesApi(propertyType, minLat, maxLat, minLng, maxLng) {


    const url = API_SERVER_URL + propertiesUrl
        + "?"
        + "propertyType=" + propertyType + "&"
        + "minLat=" + minLat + "&"
        + "maxLat=" + maxLat + "&"
        + "minLng=" + minLng + "&"
        + "maxLng=" + maxLng

    console.log(url)
    return axios({
        method: 'GET',
        url: url
    })
        .then(handleResponse)
        .catch(handleError)
}
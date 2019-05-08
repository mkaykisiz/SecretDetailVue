import axios from 'axios'
const config = require('../config')

export function getFullAddressWithLocation (coordinates, callback) {
  axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
    params: {
      latlng: coordinates.lat + ',' + coordinates.lng,
      key: config.G_API_KEY
    }
  })
    .then(response => {
      return callback(null, response.data.results[0].formatted_address)
    }).catch(error => {
      console.log(error)
      return callback(error)
    })
}

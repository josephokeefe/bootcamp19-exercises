/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

/*
*
* USAGE: node placeinfo.js -p "location"
*
*
*
*
*
*
*
*/

const args = require('minimist')(process.argv.slice(2));

const place = args.p

const google_api = require('./google_api.js')

function printLocation(input, lat, long, adress) {
    console.log(input + " is located at coordinates " + lat + " latitude, " + long + " longitude, at the adress" + adress + ".")
}

google_api.googleMapsClient.findPlace({input: place, inputtype: 'textquery'}).asPromise()
  .then((response) => {
    
    google_api.googleMapsClient.reverseGeocode({place_id: response.json.candidates[0].place_id}).asPromise()
    .then((response) => {
        
        const lat = response.json.results[0].geometry.location.lat
        const long = response.json.results[0].geometry.location.lng
        const adress= response.json.results[0].formatted_address
        printLocation(place, lat, long, adress)
    })
    .catch((err) => {
      console.log(err);
    });

    console.log(id);
  })
  .catch((err) => {
    console.log(err);
  });


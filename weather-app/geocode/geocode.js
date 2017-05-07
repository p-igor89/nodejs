const request = require('request');

var geocodeAddress = (address, callback) => {
    var encoDedAddress = encodeURIComponent(address);

    request({
        //this help to get dynamic latitude, longitude for address which was write in console
        //example: node app.js -a '1614 south broad street philadelphia'
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoDedAddress}`,
        json: true
    }, (error, response, body)=> {
        if(error){
            callback('Unable to connect to Goggle servers');
        }else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;
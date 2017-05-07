const request = require('request');
const yargs   = require('yargs');

const argv = yargs
    .options({
        a: {
            demand  : true,
            alias   : 'address',
            describe: 'Address to fetch weather for',
            string  : true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var encoDedAddress = encodeURIComponent(argv.address);

request({
    //this help to get dynamic latitude, longitude for address which was write in console
    //example: node app.js -a '1614 south broad street philadelphia'
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoDedAddress}`,
    json: true
}, (error, response, body)=> {
    if(error){
        console.log('Unable to connect to Goggle servers');
    }else if(body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    }else if(body.status === 'OK'){
        //could write 3 arguments in the first place
        //console.log(JSON.stringify(body, undefined, 2));
        //get address
        console.log(`Address: ${body.results[0].formatted_address}`);
        //get lag location
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});

//encodeURIComponent(str) - help change the empty space for %20 - helpful for creating URL
//decodeURIComponent(str) - opposite for encodeURI component
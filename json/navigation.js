// these are the urls for fetching
var locatorUrl = 'https://maps.umass.edu/arcgis/rest/services/Locators/CampusAddressLocatorWithSuggestions/GeocodeServer/findAddressCandidates';
var solveRouteUrl = 'https://maps.umass.edu/arcgis/rest/services/Research/CampusPedestrianNetwork/NAServer/Route/solve';

exports = {
    fetchLocations: function(req, res){
        var body = req.body;

        var query = locationUrl + "{something here}";
    
        // if({something}){

        // }
    
        fetch(query, {method: 'POST'})
            .then(function(a){return a.json();})
            .then(function(json){
                res.json(json); // convert to json ?
                // console
                res.end(); // end the api fetching ?
            }).catch(function(error){
                // console
                return res.status().send({
                    // message
                    // error
                });
            });
}
}
// we can add additional barriers when 

// fetchDirections: function (req, res) {
//     // API source: https://developers.arcgis.com/rest/services-reference/solve-route.htm
//     // request should be two strings
//     console.log(req.body);
//     var body = req.body;
//     // request should have more than one stop
//     if (body.stops.length < 1) {
//         return res.status(400).send({
//             message: 'Two or more stops must be provided to solve route!'
//         });
//     }
//     // turn stops into string
//     var stopString = '';
//     body.stops.forEach(function (location) {
//         stopString += location.x + ', ' + location.y + '; ';
//     });
//     // make fetch
//     var query = solveRouteUrl + '?' + 'f=json&' + 'stops=' + stopString;
//     fetch(query, { method: 'POST' })
//         .then(function (postRes) { return postRes.json(); })
//         .then(function (json) {
//         // do any pre-computation on 
//         var directions = preprocessDirections(json);
//         // response JSON from arcgis here
//         // send back to requester
//         res.json(directions);
//         console.log("Sent candidates to client.");
//         res.end();
//     }).catch(function (error) {
//         console.log(error);
//         return res.status(400).send({
//             message: 'The routing functionality seems to be offline, please try again later.',
//             error: error
//         });
//     });
// }
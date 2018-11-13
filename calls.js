//1) Native JS Talking to IRI with an IRI command
function postToIri (addressToPing, iriToUse) {
    var cmdToIri = {
        'command': 'getBalances', 
        'addresses': [addressToPing], 
        'threshold': 100
    };
    var request = new XMLHttpRequest();
    request.open("POST", iriToUse, true);
    request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-IOTA-API-Version", "1");
    request.onload = function() {
        console.log(JSON.parse(request.response));
    };
    request.send(JSON.stringify(cmdToIri));
}

//2) Requires JQUERY ajax
function callToIRIwithJquery(addressToPing, iriToUse){
    var commandToIRI = {
        'command': 'getBalances', 
        'addresses': [addressToPing], 
        'threshold': 100
    };
    $.ajax({
        url: iriToUse,
        type: 'POST',
        dataType: 'json',
        headers: {'X-IOTA-API-Version': '1'},
        contentType: 'application/json',
        data:  JSON.stringify(commandToIRI),
        processData: false,
        success: function(resFromIriNode) {
            console.log(resFromIriNode);
        },
        error: function(){
            console.log("Error from IRI node.");
        }
    });
}
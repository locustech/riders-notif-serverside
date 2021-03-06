PubNub = require('pubnub'); 
 

var pubnub = new PubNub({
    publishKey: 'pub-c-3cc11672-df14-4156-a631-24f9511fb645',
    subscribeKey: 'sub-c-9943bb22-fa5e-11e5-8180-0619f8945a4f',
})


pubnub.publish(
    {
        message: { 
            "pn_gcm": {
                "data" : {
                    "riders" : "hello my message is sending"
                }
            }            
        },
        channel: 'rider.de2b0e08-2bad-447f-a695-3554b063ae92',
        sendByPost: false, // true to send via post
        storeInHistory: false, //override default storage options
    }, 
    function (status, response) {
        if (status.error) {
            // handle error
            console.log(status)
        } else {
            console.log("message Published w/ timetoken", response.timetoken)
        }
    }
);



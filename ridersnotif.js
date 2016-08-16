PubNub = require('pubnub'); 
 

var pubnub = new PubNub({
    publishKey: 'pub-c-3cc11672-df14-4156-a631-24f9511fb645',
    subscribeKey: 'sub-c-9943bb22-fa5e-11e5-8180-0619f8945a4f',
    device: 'fR7fWmHZiHA:APA91bHYhWYwmlOYttCsOYHeUB6YPt_fTxOooan2E0JWHErFbRmbvtikkeuMuHBNsT-z7wL_acl85g6LHn8nAWtHY5xkMPnUF-ZGyLOOdvr_R5Gbh2FZTXX82OpEjvo9w3PLQb1a6dMd'
})


pubnub.publish(
    {
        message: { 
            such: 'object'
        },
        channel: 'mychannel',
        sendByPost: false, // true to send via post
        storeInHistory: false, //override default storage options
        meta: { 
            "cool": "meta"
        }   // publish extra meta with the request
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



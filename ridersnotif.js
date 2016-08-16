var pubnub = require( 'pubnub' )( {
    // ssl: true,
    publish_key: 'pub-c-3cc11672-df14-4156-a631-24f9511fb645',
    subscribe_key: 'sub-c-9943bb22-fa5e-11e5-8180-0619f8945a4f'
} );

/* ---------------------------------------------------------------------------
Publish Messages
--------------------------------------------------------------------------- */
var message = { "Hello" : "World!" };
pubnub.publish({
    channel   : 'mychannel',
    message   : message,
    callback  : function(e) { 
        console.log( "SUCCESS!", e );
    },
    error     : function(e) { 
        console.log( "FAILED! RETRY PUBLISH!", e );
    }
});
  
/* ---------------------------------------------------------------------------
Listen for Messages
--------------------------------------------------------------------------- */
pubnub.subscribe({
    channel  : "mychannel",
    message : function(message) {
        console.log( " > ", message );
    }
});
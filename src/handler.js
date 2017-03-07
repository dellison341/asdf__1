'use strict'
var Alexa = require('alexa-sdk')
//var APP_ID = 

exports.fartMachineHandler = (event, context, callback) => {
   //callback()
   var alexa = Alexa.handler(event, context)
   alexa.registerHandlers(handlers)
   alexa.execute();
}

var handlers = {
   'sayFartIntent': function() {
      this.emit(':tell', 'Fart');
   }
}
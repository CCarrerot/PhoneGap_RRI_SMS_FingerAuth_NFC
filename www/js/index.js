/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		 
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) 
	{
        console.log('Received Event: ' + id);
	},
	
	sendSms: function() {
        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);
 
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
               //intent: 'INTENT'  // send SMS with the native android SMS messaging
               intent: '' // send SMS without opening any other app
            }
        };
 
        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { 
		navigator.notification.beep(1);
					navigator.vibrate(1000);
					navigator.notification.alert(
    'Erreur lors de l\'envoi !',  // message
    function(){},         // callback
    'Erreur',            // title
    'Ok'                  // buttonName
);
		
		alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    },
    requestSMSPermission: function() {
        var success = function (hasPermission) { 
            if (!hasPermission) {
                sms.requestPermission(function() {
                    console.log('[OK] Permission acceptée')
                }, function(error) {
					navigator.notification.beep(1);
					navigator.vibrate(1000);
					navigator.notification.alert(
    'Permission refusée !',  // message
    function(){},         // callback
    'Erreur',            // title
    'Ok'                  // buttonName
);
                    console.info('[WARN] Permission refusée')
                    // Handle permission not accepted
                })
            }
			else
			{
				 alert("[OK] Permission autorisée.");
			}
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    },
	
	initNfc: function()
	{
		nfc.addTagDiscoveredListener(
                onNfc,
                function() {
                    alert("fonction addTagDiscoveredListener \n pret à lire...");
                },
				function() {
                    alert("Pas de NFC");
                }
            );


	},
		activeFingerAuth: function()
		{
			// emprunte digitale
			Fingerprint.isAvailable(function (result) 
			 {
				  /*
				  result depends on device and os. 
				  iPhone X will return 'face' other Android or iOS devices will return 'finger'  
				  */
				  Fingerprint.show(
				  {
					clientId: "Fingerprint-Demo", //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
					clientSecret: "o7aoOMYUbyxaD23oFAnJ" //Necessary for Android encrpytion of keys. Use random secret key.
				 }, function (){  alert("Authentication réussi");	}
				 ,   function (err){ alert("Erreur d'authentication : " + err);}
				 );
			},
			// erreur d'init du finger
			function (message) {
			  // 'message' will be an object with an error code and message
			  console.log(message);
			});
		}
};
	

 function onNfc(nfcEvent) { 
				//	alert("fct onNFC");
					var tag = nfcEvent.tag;
					$('#texte2').empty();
					$('#texte2').append("Tag id : " +"<br>");
					 
					var ch=JSON.stringify(nfcEvent.tag);
					var word = ch.split(',');
					$('#texte2').append( '<br>'+word[0]);
					$('#texte2').append( ','+word[1]);
					$('#texte2').append( ','+word[2]);
					$('#texte2').append( ','+word[3]+'<br>');
				
			
				
				alert(JSON.stringify(nfcEvent.tag));
		     
			}

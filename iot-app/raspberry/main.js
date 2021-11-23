const { Gpio } = require('onoff');
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://cad2122-default-rtdb.firebaseio.com"
}); 


firebase.database().ref('/sensors/sensor1')
    .on('value', function (snapshot) {
        console.log(snapshot.val().value);
    });


    
firebase.database().ref('/sensors/sensor1').set({
    value: 10,
    dateTime: new Date().toISOString()
});





const ledOut = new Gpio('17', 'out'); let isLedOn = false;

setInterval(() => {
    ledOut.writeSync(isLedOn ? 0 : 1); // provide 1 or 0 isLedOn = !isLedOn; // toggle state
}, 3000); // 3s

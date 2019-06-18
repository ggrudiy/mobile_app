var app = {
    // Application Constructor
    initialize: function() {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // console.dir(this);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

// var testBtn = document.querySelector("#test");
// // testBtn.addEventListener('click', function(e) {
// //     alert("test");
// //     console.dir(this);
// // });

// var User = {
//     name: "Peter",
//     sayName: function() {
//         alert(this.name);
//         console.dir(this);
//     },
//     setName: function(newName) {
//         this.name = newName;
//         console.dir(this);
//     },
//     getName: function() {
//         this.setName("Igor");
//     }
// }

// User.getName();
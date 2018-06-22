
 // Initialize Firebase

console.log("Hi")

 var config = {
    apiKey: "AIzaSyAsefAd80yRpfxHXtMARVXGBvhc3gzTgBQ",
    authDomain: "train-time-6fff1.firebaseapp.com",
    databaseURL: "https://train-time-6fff1.firebaseio.com",
    projectId: "train-time-6fff1",
    storageBucket: "",
    messagingSenderId: "561809355394"
  };
firebase.initializeApp(config);


var database = firebase.database();

// 2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainTime = $("#first-train-input").val().trim()
  var frequency = $("#frequency-input").val().trim()

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: destination,
    firsttraintime: firstTrainTime,
    frequency: frequency
  };

  // Uploads Train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  // console.log(newTrain.name);
  // console.log(newTrain.destination);
  // console.log(newTrain.firsttraintime);
  // console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firsttraintime;
  var trainFrequency = childSnapshot.val().frequency;

  var currentTime = moment().format('LT'); 

  var nextArrival = moment(currentTime, 'HH:mm').add(trainFrequency, 'minutes').format("HH:mm");

  var minutesAway 

  console.log(minutesAway);



 
  

  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td>");
});



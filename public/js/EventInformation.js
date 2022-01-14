const db = firebase.firestore();
const collectionRef = db.collection('Events');


$(document).ready(function () {
    var eventName = document.getElementById('event-name');
    const title = localStorage.getItem("title");
    console.log(title);
    eventName.innerText = title;
    getInformation(title);

});

const getInformation = function (title) {
    collectionRef.where('Event Title', "==", title).get().then((snapshot) => {
        var doc = snapshot.docs[0];
        displayInformation(doc);
    }).catch((err) => {
        console.log(err);
    })
}
const displayInformation = (doc)=>{
    var eventDuration = document.getElementById('event-duration');
    var eventDescription = document.getElementById('event-description');
    var eventDate = document.getElementById('event-date');
    var eventAddress = document.getElementById('event-address');
    const duration = doc.data()['Total Hours'];
    const description = doc.data()['Description']
    const date = doc.data()['Time'].toDate();
    const address = doc.data()['Address'];
    eventDuration.innerText = duration+ ' Total Hours';
    eventDescription.innerText = description;
    eventDate.innerText = date.toLocaleString();
    eventAddress.innerText = address;
}
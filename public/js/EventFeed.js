var currentDate =new Date();
const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  };
currentDate.toLocaleDateString(options);
console.log(currentDate);
var eventDate;
const db = firebase.firestore();
const collectionRef = db.collection('Events');
var str = `<ul class="mt-3" style="list-style-type:none">`;
$(document).ready(function () {

    collectionRef.where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            // console.log(doc.data()['Event Title']);
            eventDate = doc.data()['Time'];
            console.log(eventDate);
            str += '<li>' + '<span class="py-1"style="font-weight:bold; background-color:#FDC15A;">'+ doc.data()['Event Title'] +'</span>' +
            '<p class="m-3" style="font-size:0.75rem;">'+ doc.data()['Time'].toDate()+ '</p>'+ '</li>'+'<hr>';
           

        });
        str += '</ul>';
        console.log(str);
        document.getElementById('event-list').innerHTML = str;

    }).catch(err => {
        str = '<li> Could not display results </li>';
        console.error(err);
    });

})

var currentDate = new Date();
const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
};
currentDate.toLocaleDateString(options);
console.log(currentDate);
const db = firebase.firestore();
const collectionRef = db.collection('Events');


var str = `<ul class="mt-3" style="list-style-type:none">`;
$(document).ready(function () {
    //displayAll();
    displayOutdoorEvents();
})

// catch error
const displayError = (err) => {
    if (!firebase.auth().currentUser) {
        window.location.href = "login.html";
        return;
    }
    str = '<h1 style="color:red;text:center;margin-top:2em;"> Could not display results. </h1>';
    document.getElementById('event-list').innerHTML = str;
    console.error(err);
}
//function to insert event html onto the page
const display = (doc) => {
    str += '<li>' + '<span class="py-1"style="font-weight:bold; background-color:#FDC15A;">' + doc.data()['Event Title'] + '</span>' +
        '<p class="m-3" style="font-size:0.75rem;">' + doc.data()['Time'].toDate() + '</p>' + '</li>' + '<hr>';
    return str;

}



// function that displays all events 
const displayAll = () => {
    collectionRef.where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            // console.log(doc.data()['Event Title']);
            // eventDate = doc.data()['Time'];
            // console.log(eventDate);
            str = display(doc);


        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;

    }).catch(err => {
        displayError(err);
    });

}

//function that dsplays outdoor events
const displayOutdoorEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Outdoors').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays indoor events
const displayIndoorEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Indoors').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays events involving animals
const displayAnimalEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Animals').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}


//function that dsplays events involving medical health care
const displayMedicalEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Medical').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays events involving the elderly
const displayElderlyEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Elderly').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays events involving children
const displayChildrenEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Children').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays events involving Learning Disabilities
const displayLearningDisabilityEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Learning Disability').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}



//function that dsplays events involving Physical Disabilities
const displayPhysicalDisabilityEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Physical Disability').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

//function that dsplays events involving Huanitarian Aid
const displayHumanitarianAidEvents = () => {
    collectionRef.where('Tags', 'array-contains', 'Humanitarian Aid').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}
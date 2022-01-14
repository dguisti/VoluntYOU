var currentDate = new Date();
console.log(currentDate);
const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
};
currentDate.toLocaleDateString(options);
console.log(currentDate);
const db = firebase.firestore();
const collectionRef = db.collection('Events');
var str;


$(document).ready(function () {
    displayAll();
    _addEventListeners();
});

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
const display = (doc,str) => {
    var date = doc.data()['Time'].toDate();
    // date = Date.parse(date);
    // console.log(date);
    str += `<li class="eventTitles" data-attribute="${ doc.data()['Event Title']}">` + '<span class="py-1" style="font-weight:bold; background-color:#FDC15A;">' + doc.data()['Event Title'] + '</span>' +
        '<p class="m-3" style="font-size:0.75rem;">' + date.toLocaleString() + '</p>' + '</li>' + '<hr>';
    return str;

}



// function that displays all events 
const displayAll = () => {

    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            // console.log(doc.data()['Event Title']);
            // eventDate = doc.data()['Time'];
            // console.log(eventDate);
            str = display(doc,str);


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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Outdoors').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Indoors').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Animals').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Medical').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Elderly').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Children').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Learning Disability').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
     str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Physical Disability').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
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
    str = `<ul class="mt-3" style="list-style-type:none">`;
    collectionRef.where('Tags', 'array-contains', 'Humanitarian Aid').where('Time', '>', currentDate).get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            str = display(doc,str);
        });
        str += '</ul>';
        // console.log(str);
        document.getElementById('event-list').innerHTML = str;
    }).catch((err) => {
        displayError(err);
    })
}

const _addEventListeners = function(){
    var listBody = document.getElementById('event-list');
    // console.log(events);
    listBody.addEventListener('click', (event)=>{
        if(event.target.classList.contains("eventTitles")){
            const title = event.target.getAttribute("data-attribute")
            console.log(title);
            localStorage.setItem("title",title);
            window.location.href = "EventInformation.html";
            
        }
        

    })
    
}
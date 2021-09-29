//import  updateDoc  from "firebase/firestore";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    console.log(uid);
    getUser(uid);
  } else {
  }
})

//Log Out
const logOutBtn = document.getElementById("LogOutBtn");
logOutBtn.addEventListener("click", e => {
  firebase.auth().signOut().then(() => {
    window.location.href = "Welcome.html";
  }).catch((error) => {
    window.alert("An error occured " + error.message);
  });

})

//Get Current user UID
function getUser(id) {
  db.collection("Volunteers").where("userUID", "==", id).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(Object.keys(doc.data()));
      // const docObj = Object.keys(doc.data());
      renderProfile(doc,id);
    })
  });
}
const profileInfo = document.getElementById("Profile");
profileInfo.classList.add("m-3");
const Skills = document.getElementById("Skills");

//Render current user's profile info
function renderProfile(doc,uid) {

  let idElement = document.createElement("div");
  let name = document.createElement("h3");
  let age = document.createElement("p");
  let skills = document.createElement("p");
  let hours = document.createElement("p");
  let events = document.createElement("p");
  //let userRating = document.createElement("img");

  const rating = doc.data()["User Rating"];
  idElement.setAttribute("data-id", doc.id);
  name.textContent = doc.data().Name;
  name.classList.add('mb-3');
  age.textContent = doc.data().Age + " years old";;
  skills.textContent = doc.data().Skills;
  hours.textContent = doc.data()["Total Hours"] + " Total Hours";
  skills.classList.add("pt-3");
  skills.style.fontSize = "1rem";
  // console.log(docObj.Age);
  events.textContent = doc.data()["Total Events"] + " Total Events";
  idElement.append(name, age, hours, events);
  profileInfo.appendChild(idElement);
  Skills.appendChild(skills);

  //Check user rating to display corresponding image
  if (rating == 1) {
    const curr = document.getElementById("gray1");
    curr.setAttribute("src", "res/img/general/InvolvementLevel/color-1.png");
    //curr.style.display = "none";
  }
  else if (rating == 2) {
    const curr = document.getElementById("gray2");
    curr.setAttribute("src", "res/img/general/InvolvementLevel/color-2.png");
  }
  else if (rating == 3) {
    const curr = document.getElementById("gray3");
    curr.setAttribute("src", "res/img/general/InvolvementLevel/color-3.png");
  }
  else if (rating == 4) {
    const curr = document.getElementById("gray4");
    curr.setAttribute("src", "res/img/general/InvolvementLevel/color-4.png");
  }

  //Edit Profile
  const editBtn = document.getElementById("EditBtn");
  const field1 = document.getElementById("editName");
  const field2 = document.getElementById("editAge");
  const field3 = document.getElementById("editSkills");
  const saveBtn = document.getElementById("SaveBtn");
  editBtn.addEventListener("click", evt => {
    console.log('clicked');
    field1.setAttribute('value', doc.data().Name);
    field2.setAttribute('value', doc.data().Age);
    field3.value = doc.data().Skills;
    field1.hidden = false;
    field2.hidden = false;
    field3.hidden = false;
    saveBtn.hidden = false;

    profileInfo.style.display = 'none';
    Skills.style.display = 'none';

    saveBtn.addEventListener('click', function(e){
      const updatedName = field1.value;
      const updatedAge = field2.value;
      const updatedSkills = field3.value;
      console.log(updatedName);
      let nameRef = db.collection("Volunteers").doc(uid);
      nameRef.update({
        "Name" : updatedName,
        "Age": updatedAge,
        "Skills": updatedSkills
      }).then(function(r){
        window.location.href="profile.html";
      }).catch(function(e){
        Window.alert("Error "+e+" Could not update your profile");
      })
    })

  
//   saveBtn.addEventListener('click',e=>{
//   const nameRef = doc(db ,"Volunteers",name);
//   await firebase.firestore.updateDoc(nameRef,{
//     "Name" : field1.value
//   });
// });

  });


}

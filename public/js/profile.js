firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    console.log(uid);
    getUser(uid)
  } else {
    // User is signed out
    // ...
  }
})
const logOutBtn = document.getElementById("LogOutBtn");
logOutBtn.addEventListener("click",e=>{
  firebase.auth().signOut().then(() => {
    window.location.href = "Welcome.html";
  }).catch((error) => {
    window.alert("An error occured "+error.message);
  });

})


function getUser(id) {
  db.collection("Volunteers").where("userUID", "==", id).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(Object.keys(doc.data()));
      // const docObj = Object.keys(doc.data());
      renderProfile(doc);
    })
  });
}
const profileInfo = document.getElementById("Profile");
profileInfo.classList.add("m-3");
const Skills = document.getElementById("Skills");
function renderProfile(doc) {

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


}
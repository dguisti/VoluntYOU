//console.log(firebase.auth())

const userEmail = document.getElementById('email');
const userPassword = document.getElementById('pswd');
const btnLogin = document.getElementById('btnLogin');
//Firebase Login
btnLogin.addEventListener('click', e => {
  const email = userEmail.value;
  const password = userPassword.value;
  const auth = firebase.auth();
  //Checking if all fields have been populated
 // if (email != "" && password != "") {
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorMessage);
      console.log(errorCode);

    });
    
 // }
  // else {
  //   window.alert("Please fill out all fields.");
  // }
});



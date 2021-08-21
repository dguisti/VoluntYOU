
const userEmail = document.getElementById('Email');
const userPassword = document.getElementById('Pswd');
const checkUserPassword = document.getElementById('rePswd');
const btnSignIn = document.getElementById('btnSignIn');
const checkbox = document.getElementById('privacyCheckBox');
const auth = firebase.auth();

//Firebase new user sign in
btnSignIn.addEventListener('click', e => {
    const email = userEmail.value;
    const password = userPassword.value;
    const checkPassword = checkUserPassword.value;
//checking to make sure all fields have been filled
    if (email != "" && password != "") {
//checking if the re-entered password matches the first password
        if (password === checkPassword) {
            //checking if the user has accepted the privacy policy
            if (checkbox.checked) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signed in 
                        window.alert('Signed In Successfully');
                        var user = userCredential.user;
                    }).catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        window.alert('Error: ' + errorMessage);
                        console.log(errorCode);
                    });
            }
            else {
                window.alert("Please read and accept our Privacy Policy before signing in");
            }
        }
        else {
            window.alert("Passwords do not match");
        }

    }
    else {
        window.alert("Please fill out all fields.");
    }
});

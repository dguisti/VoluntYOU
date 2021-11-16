const DIV_ID = "cyclerdiv";

class UndefinedCycler extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "UndefinedCycler"; // (2)
    }
}

function cycle(btn, id, url, alt, text_id, text) {
    let cycle_div = document.getElementById(id);
    cycle_div.style.backgroundImage = `url("${url}")`;
    let inner_img = cycle_div.getElementsByTagName("img")[0];
    inner_img.setAttribute("src", url);
    inner_img.setAttribute("alt", alt);

    let textbox = document.getElementById(text_id);
    textbox.innerHTML = text;

    let labels = document.querySelectorAll(`label.btn[controls='${id}']`);
    for (l of labels) {
        l.classList.remove("selected");
    }

    btn.classList.add("selected");
}

for (btn of document.getElementsByTagName("label")) {
    if (btn.getAttribute("controls") != "") {
        let id = btn.getAttribute("controls");
        let text_id = btn.getAttribute("textbox");
        let text = btn.getAttribute("text");
        let url = btn.getAttribute("image");
        let alt = btn.getAttribute("alt");
        let cycle_div = document.getElementById(id);
        let new_btn = btn;
        if (cycle_div) {
            cycle_div.style.backgroundSize = "contain";
            cycle_div.style.transition = "all 0.3s ease-in-out";
            cycle_div.style.backgroundRepeat = "no-repeat";

            let inner_img = cycle_div.getElementsByTagName("img")[0];
            inner_img.style.width = "100%";
            inner_img.style.height = "100%";
            inner_img.style.visibility = "hidden";

            let orig_url = inner_img.getAttribute("src");

            cycle_div.style.backgroundImage = `url("${orig_url}")`;


            btn.addEventListener("click", generate_cycle => cycle(new_btn, id, url, alt, text_id, text));
        }
        else {
            throw UndefinedCycler;
        }
    }
}

//Display Profile in Nav dropdown only if user is logged in


  $(document).ready(function(){ 
    const profileLi = document.getElementById("hiddenProfileLi");
    const loginLi = document.getElementById("login-nav-dropdown");
    const signinLi = document.getElementById("signup-nav-dropdown");
    const logoutLi = document.getElementById("hiddenLogOutLi");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Hi jane');
         profileLi.hidden = false;
         logoutLi.hidden = false;
         loginLi.hidden = true;
         signinLi.hidden = true;
        } else {
        }
      })
      //Log out
    document.querySelectorAll(".LogOutBtn").forEach((button)=>{
    button.addEventListener("click", e => {
      firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
      }).catch((error) => {
        window.alert("An error occured " + error.message);
      });
    }
    );
    });
    });

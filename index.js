
let spinner_tracker = 0;
function spinner(elem, amt) {
    elem.style.transform = "rotate(" + spinner_tracker + "deg)";
    spinner_tracker += amt;
    spinner_tracker = spinner_tracker % 360;
}

document.addEventListener("DOMContentLoaded", event => {
    let spinner_elem = document.getElementById("tejasisegotistical");
    setInterval(() => spinner(spinner_elem, 2), 20);
    change_theme();
})


const smiley = document.getElementById("smiley");
let smiley_spinner_tracker = 0;
function smiley_spinner() {
    smiley.style.transform = "rotate(" + smiley_spinner_tracker + "deg)";
    smiley_spinner_tracker += 2;
    smiley_spinner_tracker = smiley_spinner_tracker % 360;

    if (smiley_spinner_tracker >= 90){
        smiley.removeEventListener("click", smiley_spinner);
        // Move forever to right
        let smiley_move_tracker = 0;
        let smiley_move_interval = setInterval(() => {
            smiley.style.transform = "translateX(" + smiley_move_tracker + "px) rotate(" + smiley_spinner_tracker + "deg)";
            smiley_move_tracker += 2;
        }, 20);
    }

}
smiley.addEventListener("click", smiley_spinner);


let actions = [];
let secret_code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
document.addEventListener("keyup", event => {
    if (actions.length >= 10) {
        actions = actions.slice(1, 10);
    }
    actions.push(event.key);
    console.log(actions);
    if (actions.length == 10) {
        let b = false;
        for (let i = 0; i < 10; i++) {
            if (actions[i] != secret_code[i]) b = true;
        }
        if (b == false) {
            alert("a8^` $b+,.! a*(v'@c*.`Cc;'@`2,=F@c9^")
        }
    }
})



const theme_changer = document.getElementById("theme_changer");
let current_theme = 0; // 0 : Light, 1: Dark
const body = document.body;
function change_theme () {
    current_theme = (current_theme == 0) ? 1 : 0;
    if (current_theme == 0) {
        theme_changer.textContent = "Theme : Light";
        theme_changer.style.color = "black";
        theme_changer.style.backgroundColor = "white";

        body.style.backgroundColor = "white";
        body.style.color = "black";

    } else {
        theme_changer.textContent = "Theme : Dark"
        theme_changer.style.color = "white";
        theme_changer.style.backgroundColor = "black";

        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    console.log("Theme changed!");
    // console.log("TEST");
    
}
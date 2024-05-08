function toggleFunction() {
    console.log('hh')
    var x = document.getElementById("topnav");
    x.classList.toggle("expanded");
}
// function toggleFunction() {
//     var x = document.getElementById("topnav");
//     if (x.style.width == "0%") {
//         x.style.width = "50%";
//     } else {
//         x.style.width = "0%";
//     }
// }

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) { // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }


    } else {}
}

checkOrientation();

// Listen for the window resize event to detect orientation changes
window.addEventListener('resize', checkOrientation);
// ****************

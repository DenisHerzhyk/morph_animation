const moonPath = "M27.5 50C27.5 77.6142 50 98.5 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 27.5 22.3858 27.5 50Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click',() => {
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });

    timeline
    .add({
        targets: ".sun",
        d: [{ value: toggle ? sunPath : moonPath}]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle ? 0 : 360
    },"-=250")
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
        color: toggle ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
    },"-=700");

    if(!toggle) {
        toggle = true;
    }
    else {
        toggle = false;
    }
})
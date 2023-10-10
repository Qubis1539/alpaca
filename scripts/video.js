let box = document.querySelector("#video-box");
let videoURL = "https://www.youtube.com/embed/883UbxrfOO8?si=D58uC8_ME1dwrHbk&loop=1"
box.addEventListener("click", function() {
    box.innerHTML = `
        <iframe class="work-example__video" src="${videoURL}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    `
});
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById("mysong");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var statusText = document.getElementById("status");

    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.src = "img/pause.png";
            statusText.textContent = "Reproduzindo...";
        } else {
            audio.pause();
            playPauseBtn.src = "img/play.png";
            statusText.textContent = "Clique aqui para ouvir";
        }
    });

    audio.addEventListener("ended", function () {
        playPauseBtn.src = "img/play.png";
        statusText.textContent = "Clique aqui para ouvir";
    });
});




var acc = document.getElementsByClassName("projButton");
var i;

for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function() {
        var videoContainer = this.nextElementSibling
        if (videoContainer.style.maxHeight) {
            videoContainer.style.maxHeight = null;
        } else {
            videoContainer.style.maxHeight = videoContainer.scrollHeight + "px";
        }
    });
}



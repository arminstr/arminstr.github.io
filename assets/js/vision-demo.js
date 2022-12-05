function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

function Update() {
    fetch('http://raspberrypi.local:8888/data=img')
        .then(res => res.text())
        .then(image_result => {
            var img = new Image();
            img.style.width = 1048;
            img.style.height = 1048;
            img.setAttribute("src", "data:image/png;base64," + image_result);
            img.addEventListener("load", function () {
                    c.height = 1048;
                    c.width = 1048;
                    ctx.drawImage(img, 0, 0, 1048, 1048);
                    image.src = c.toDataURL();
                    image.height = 1048;
                    image.width = 1048;
                    fetch('http://raspberrypi.local:8888/data=label')
                        .then(res => res.json())
                        .then(label_result => {
                            h1.innerText = 'Label: ' + label_result['label'];
                        });
            });
        });
}

var image = document.getElementById("demo-image");
var h1 = document.getElementById("demo-plastic-type");
var c = document.createElement("canvas");

var ctx = c.getContext("2d");
setInterval(Update,100);
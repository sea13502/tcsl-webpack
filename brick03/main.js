var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);

var html = require('./part.html');
var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild( div );

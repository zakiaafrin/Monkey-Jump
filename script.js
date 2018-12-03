var div1 = document.createElement("div");
div1.setAttribute("id", "background");
var imgTag1 = document.createElement("IMG");
imgTag1.setAttribute("class", "bgimage");
imgTag1.src = "background.jpg";
div1.appendChild(imgTag1);
document.body.appendChild(div1);

var div2 = document.createElement("div");
div2.setAttribute("id", "monkeyDiv");
var imgTag2 = document.createElement("IMG");
imgTag2.setAttribute("id", "monkeyPic");
imgTag2.src = "monkey.gif";
div2.appendChild(imgTag2);
document.body.appendChild(div2);

var div3 = document.createElement("div");
div3.setAttribute("id", "buttonsHere");
var btn1 = document.createElement("BUTTON");
btn1.setAttribute("type", "button");
btn1.setAttribute("onclick", "jump()");
var text1 = document.createTextNode("Jump");
btn1.appendChild(text1);
div3.appendChild(btn1);
document.body.appendChild(div3);
btn1.style.marginRight ="4px";

var btn2 = document.createElement("BUTTON");
btn2.setAttribute("type", "button");
btn2.setAttribute("onclick", "stop()");
var text2 = document.createTextNode("Stop");
btn2.appendChild(text2);
div3.appendChild(btn2);
document.body.appendChild(div3);

var div4 = document.createElement("div");
div4.setAttribute("id", "lilBox");
var text3 = document.createTextNode("0");
div4.appendChild(text3);
document.body.appendChild(div4);

function jump() {
    var myMonkey = document.getElementById("monkeyPic");
    myMonkey.src = "Up_and_down.gif";
    var score = document.getElementById("lilBox");
    score.innerHTML = parseInt(score.innerHTML) + 1;
    document.getElementById("sound").style.visibility="hidden";
    document.getElementById("sound").play();    
}

function stop() {
    var myMonkey = document.getElementById("monkeyPic");
    myMonkey.src = "monkey.gif";
    document.getElementById("sound").pause();

}
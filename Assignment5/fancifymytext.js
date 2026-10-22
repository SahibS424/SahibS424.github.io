function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeStyle() {
    let text = document.getElementById("textArea");
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}


function mooText() {
    let text = document.getElementById("textArea");
    let sentences = text.value.toUpperCase().split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].split(" ");

        if (words[words.length - 1] !== "") {
            words[words.length - 1] += "-Moo";
        }

        sentences[i] = words.join(" ");
    }

    text.value = sentences.join(".");
}


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server, try again after sometime")
}

function clickHandler () {

    var inputText =txtInput.value //taking input

   // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then (json => {
            var translatedText =json.contents.translated;
            outputDiv.innerText =translatedText; //output
        })
        .catch(errorHandler);
};

// function hoverHandler () {
//     // var inputText =txtInput.value + "!"
//     txtInput.value=txtInput.value + "!"
// }

// function keypressHandler() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     document.body.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
// }

// NOTE: click is predefined
btnTranslate.addEventListener ("click", clickHandler)
// btnTranslate.addEventListener ("mouseover", hoverHandler)
// document.addEventListener ("mouseover", hoverHandler)
// document.addEventListener ("keypress", keypressHandler)





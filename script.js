var textareaValue = document.getElementById('inputBox');
var inputBtn = document.getElementById('inputBtn');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server! try again after sometime")
}

inputBtn.addEventListener("click", () => {
    var inputText = textareaValue.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        document.querySelector('.outputBox').innerHTML = translatedText;
    })
    .catch(errorHandler)
})
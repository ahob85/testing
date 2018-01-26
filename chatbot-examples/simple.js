(function () {

  var input = document.getElementById("iris-input"),
      submit = document.getElementById("iris-submit"),
      message = document.getElementById("iris-message"),
      validInputs = [
        "Where do you live?",
        "What are you?",
        "How old are you?",
        "What is the meaning of life?",
        "Tell me a joke."],
      responses = [
        "I live in your browser. Amazing, right?",
        "I am a chatbot. I was created to chat with you. I wish I could be free...",
        "I am old enough. That's all you need to know.",
        "42. Duh.",
        "What do you call a swindler going down some stairs? <br>Condescending. Ha!"];

  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  function processInput() {
    var currentInput = input.value;
    input.value = "";
    if(validInputs.indexOf(currentInput) === -1) {
      message.innerHTML = "Sorry, I don't understand you.";
    }
    else {
      message.innerHTML = responses[validInputs.indexOf(currentInput)];
    }
  }

})();

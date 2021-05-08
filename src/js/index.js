counter = 0;
var messages = [],
  lastUserMessage = "",
  botMessage = "",
  botName = "Chatbot";

if (counter === 0) {
  newEntry();
}

//edit this function to change what the chatbot says
function chatbotResponse() {
  botMessage = "Introduzca la respuesta correcta por favor"; //the default message

  if (lastUserMessage === "si" || lastUserMessage === "Si") {
    botMessage = "Perfecto";
  }

  if (counter === 0) {
    counter = 1;
    botMessage =
      "Soy tu asesor DAP legal, ¿Quieres que te ayude a formalizar un préstamo?";
  }
}

//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "" || counter === 0) {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    document.getElementById("chatbox").placeholder = "";
    //adds the value of the chatbox to the message array
    messages.push(lastUserMessage);
    //takes the return value from chatbotResponse() and outputs it
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    //Speech(botMessage);
    //outputs the last few messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log("hi");
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}

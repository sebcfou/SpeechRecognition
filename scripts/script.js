var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var numbers = ['one', 'two', 'three', 'four', 'five'];
var commands = ['defect'];
var reasons = ['broken', 'empty'];
var grammar = '#JSGF V1.0; grammar colors; ' ;
grammar += ' <number> = '  + numbers.join(' | ') + ' '; 
grammar += ' <command> = ' + commands.join(' | ') + ' ' ;  
grammar += ' <reason> = ' + reasons.join(' | ') + ' ' ; 
grammar += ' public <command> = [<number>] <command> [<reason>];' ;
console.log("grammar rule = " + grammar);

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

/*
var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
*/
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try "One Defect Label Print".';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a command.');
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The [last] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object

  var lastIndex = event.results.length - 1;
  var transcriptedText = event.results[lastIndex][0].transcript;
  var alternativesCount = event.results[lastIndex].length;

  var alternativeText = "";
  if(alternativesCount != 0)
  {
    for(i=1; i <= alternativesCount-1; i++)
    {
      alternativeText += "#" + alternativesCount + ") " +  event.results[lastIndex][alternativesCount].transcript + " - confidence:" + event.results[lastIndex][alternativesCount].confidence + "\r\n";
    }
  }

  diagnostic.textContent = 'Result received: ' + transcriptedText + '.';

  //TO-DO Show alternatives
  console.log('Received: ' + transcriptedText);
  console.log('Confidence: ' + event.results[lastIndex][0].confidence);
  console.log('alternative text: ' + alternativeText);

  InterpretText(transcriptedText);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnsomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that text.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}


var InterpretText =function (text){
    // interpret the text following the pattern [<number>] <command> [<reason>]
    
    var foundCommand = "";
    var numberString = "";
    var reasonString = "";
    commands.forEach(function(element){
        foundCommand = text.search(element);
        if(foundCommand != -1)
        {
            console.log('Found command: ' + foundCommand);
            var numbersAndResons = text.split(element);
            numberString = numbersAndResons[0];
            reasonString = numbersAndResons[1];
            console.log('number: ' + numberString);
            console.log('reason: ' + reasonString);
        }
    });

    if(reasonString === "")
    {
        // say something here
        console.log('Text ' + text + ' could not be interpreted');
    }else if (numberString === "")
    {
        console.log('One defect with reason ' + reasonStrong +  ' will be declared');
    }else
    {
        console.log( numberString + 'defect(s) with reason ' + reasonString +  ' will be declared');
    }
}



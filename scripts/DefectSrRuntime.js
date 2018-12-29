
class DefectSrRuntime{
    
    constructor(defectSrConfiguration, diagnostic){
        this.diagnostic = diagnostic;

        this.recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(defectSrConfiguration.grammar, 1);
        this.recognition.grammars = speechRecognitionList;
        //recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
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
      
        this.diagnostic.textContent = 'Result received: ' + transcriptedText + '.';
      
        //TO-DO Show alternatives
        console.log('Received: ' + transcriptedText);
        console.log('Confidence: ' + event.results[lastIndex][0].confidence);
        console.log('alternative text: ' + alternativeText);
      
        //InterpretText(transcriptedText);
      }
      
      this.recognition.onspeechend = function() {
        recognition.stop();
      }
      
      this.recognition.onnsomatch = function(event) {
        this.diagnostic.textContent = "I didn't recognise that text.";
      }
      
      this.recognition.onerror = function(event) {
        this.diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
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
    
    
    
}
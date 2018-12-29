/*const DefectSrConfiguration = require('./DefectSrConfiguration');
//var srRuntime = require('./DefectSrRuntime');


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var numbers = ['one', 'two', 'three', 'four', 'five'];
var commands = ['defect'];
var reasons = ['broken', 'empty'];

let defectSrConfig = new DefectSrConfiguration(numbers,commands,reasons);
var defectSrRuntime = new DefectSrRuntime(defectSrConfig,diagnostic);

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try "One Defect Label Print".';

document.body.onclick = function() {
    defectSrRuntime.recognition.start();
    console.log('Ready to receive a command.');
}
*/


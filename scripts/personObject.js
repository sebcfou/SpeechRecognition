
function Person(first, last, age, eye, language)
{
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.language = language;
  
  this.name = function() {return this.firstName + " " + this.lastName;};
  this.changeName = function (name) {
    this.lastName = name;
  };
}

var johnDoe = new Person("John", "Doe", 50, "blue", "en");
var seb = new Person("seb","lo",34,"green","fr");
Person.prototype.nationality = "unknow";
seb.nationality = "french";

console.log(johnDoe.name() + ' has a new language: ' + johnDoe.language);
johnDoe.language = "fr";
console.log(johnDoe.firstName + ' has a new language: ' + johnDoe.language);
console.log(johnDoe.firstName + ' is ' + johnDoe.nationality);
console.log(seb.firstName + ' is ' + seb.nationality);


var person = 
{
    firstName: "John", 
    lastName: "Doe", 
    age:50, 
    eyeColor: "blue",
    language : "en",
    // method:
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    // accessors:
    get lang() { return this.language; },
    set lang(lang) { this.language = lang; },
    set first(first) {  this.firstName = first; },
    get first() { return this.firstName; },
    set last(last) {  this.lastName = last; },
    get last() { return this.lastName; }
};

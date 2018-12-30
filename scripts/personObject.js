
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





// CODE here for your Lambda Classes
class Person {
    constructor(personattributes){
     this.name = personattributes.name,
     this.newAge = personattributes.age,
     this.newLocation = personattributes.location   
    }
    speak(){
        console.log(`Hello my name is ${this.name} I am from ${this.newLocation}.`);
    }
}

class instructor extends Person{
    constructor(instructorAtts){
     super(instructorAtts);
     this.newSpecialty = instructorAtts.specialty,
     this.newFavLanguage = instructorAtts.favLanguage,
     this.naewCtchPhrase = instructorAtts.catchPhrase
    }
demo(subject){
        console.log(`Today we are learning about ${subject}.`);
 }
 grade(student, subject) {
     console.log (`${student.name} receives a perfect score on ${subject}`);
 }
}

class Student extends Person {
    constructor(studentAtts){
    super(studentAtts),
    this.newPreviousBackground = studentAtts.newPreviousBackground,
    this.newClassName = studentAtts.className,
    this.newFavSubject = studentAtts.newFavSubject
    }

    listsubjects() {
        this.favSubject.map(item => console.log(item));
    }
PRAssignment(subject) {
    console.log(`${this.name} has subitted a PR for ${subject}`);
}
sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
}
}

class ProjectManager extends instructor {
    constructor(managerAtts) {
        super(managerAtts),
        this.newGradClassName = managerAtts.gradClassName,
        this.newFavInstructor = managerAtts.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCodes(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const tim = new Student ({
    name: "Tim",
    location: "New York",
    age: 23,
    favLanguage: "Java"
});

const tom = new Student ({
    name: 'Tom',
    location: "Fergus",
    age: 22,
    favLanguage: "JavaScript"
   });

const jim = new instructor ({
    name: 'Jim',
    location: "Fargo",
    age: 23,
    favLanguage: "C++",
    specialty: "Back-end",
    catchPhrase: 'Sup'
});

const bill = new instructor ({
    name: 'Bill',
    location: "London",
    age: 34,
    favLanguage: "C#",
    specialty: "front-end",
    catchPhrase: 'Sup'
});

const connor = new ProjectManager ({
    name: 'Connor',
    location: "Middle-Earth",
    age: 44,
    gradClassName: "CS1"
});

const brett = new ProjectManager ({
    name: 'Brett',
    location: "Milky-May",
    age: 45,
    gradClassName: "CS2"
});

tim.speak();
tom.speak();
jim.demo();
connor.standUp();
brett.debugsCodes();

class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    ToString() {
        return `${this.type} ${this.name} ${this.age}`;
    }
}

class AnimalList {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAllAnimals() {
        return this.animals.map(animal => animal.ToString());  //returns a list the animal trough the ToString() method
    }
    
}


const Rex = new Animal("Rex", 2, "chien");
const Rouki = new Animal("Rouki", 5, "chien");
const Mirabelle = new Animal("Mirabelle", 17, "chat");
const animals = [Rex, Rouki, Mirabelle]; // Add them to the animals array by default

const animalForm = document.getElementById("animalForm");   //link animalForm trough HTML
const ul = document.getElementById("animalList");       //link the list of animals
let myDogsAverageAge = document.querySelector(".dogsAverageAge");
let myCatsAverageAge = document.querySelector(".catsAverageAge");

const animalList = new AnimalList();
animalList.addAnimal(Rex);
animalList.addAnimal(Rouki);
animalList.addAnimal(Mirabelle);

for (const animal of animals) {
    const li = document.createElement("li");
    li.textContent = animal.ToString();
    ul.appendChild(li);
}
//Alternative
// //   Récrée la liste d'animaux
// // animalList.getAllAnimals().forEach(animal => {
// // const li = document.createElement("li");
// // li.textContent = animal;
// // ul.appendChild(li);
// // });



function AgeAverage(myType){
    let sum = 0;        //"let" since variable will change over time
    let count = 0;
    for (const animal of animalList.animals){
        if (animal.type === myType ){       //animal.type === "Chien"||
            count ++;
            sum += animal.age;
        }
    }
    return sum/count;
}


function updateAverageAge(){
    //Clear the previous age average
    myDogsAverageAge.textContent = "";
    myCatsAverageAge.textContent = "";
    //Compute new averages
    let dogsAverage = AgeAverage("chien");
    let catsAverage = AgeAverage("chat");
    //Add to HTML Link
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.textContent = `Age moyen des chiens : ${dogsAverage} ans.`;    //BACKTICK `` not ''
    p2.textContent = `Age moyen des chats : ${catsAverage} ans.`;
    myDogsAverageAge.appendChild(p);
    myCatsAverageAge.appendChild(p2);
}

updateAverageAge();

document.addEventListener("submit", function(event){
    /**
     * We could delete and rewrite the list of animals each time too
    */
    // Empêche le comportement de soumission par défaut du formulaire
    event.preventDefault()
    //Recupere les attributs de l'animal soumis par l'user
    const animalName = animalForm[0].value;            //.value not obligatory but considered good practice
    const animalAge = parseFloat(animalForm[1].value);
    const animalType = animalForm[2].value;
    //Create a new instance with the submitted val
    const newAnimal = new Animal(animalName, animalAge, animalType);
    animalList.addAnimal(newAnimal);
    //Clear the form after submission
    animalForm.reset();
    // Update the list with the new animal
    const li = document.createElement("li");
    li.textContent = newAnimal.ToString();
    ul.appendChild(li);

    updateAverageAge();
});


//------------------------------------------------------------------------

let ex1 = document.getElementById("ex1")
console.log(ex1)

let ex2 = document.querySelector("#ex2 p")
console.log(ex2)

let liste_paragraphes = document.querySelectorAll("p")
console.log(liste_paragraphes)








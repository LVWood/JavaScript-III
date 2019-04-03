/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: when you're in global scope, the 'this' keyword points to the window object.
* 2. Implicit Binding: in a function, the 'this' keyword will point to the object (the named object to the left of the dot in a function call).
* 3. New Binding: in a constructor function, the 'new' keyword binds 'this' to the specific object being created. 
* 4. Explicit Binding: the use of js .bind(), .call(), or .apply() binds 'this' to the function being used.
*
* write out a code example of each explanation above
*/

// Principle 1 - code example for Window Binding
function itsMe(name) {
    return `Hi! My name is ${this.name}.`
} 
// 'this' points to the window instead of to the name parameter.


// Principle 2 - code example for Implicit Binding
const tree = {
    species: 'oak',
    height: 100,
    age: 40,
    hasSeeds: true
}
//console.log(tree.species);

// Principle 3 - code example for New Binding
function Tree(attributes) {
    this.species = attributes.species;
    this.height = attributes.height;
    this.age = attributes.age;
    this.hasSeeds = attributes.hasSeeds;
}
const oak = new Tree ({
    species: 'oak',
    height: 100,
    age: 40,
    hasSeeds: true
});
//console.log(oak);
//console.log(oak.hasSeeds);

// Principle 4 - code example for Explicit Binding
function isTall(species, height) {
    Tree.call(this, species, height);
    return `This ${species} tree is ${height} feet tall.`
};
console.log(isTall(oak.species, oak.height));
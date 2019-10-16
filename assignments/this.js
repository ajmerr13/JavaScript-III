/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global object binding is when the this will be the window/console Object
* 2. Implicit binding is when a funciton is called with a preceding dot, this is to the left of it
* 3. New Binding is when a constructor function is used and refers to the new object that is created by it.
* 4. Explicit binding is when this is called or applied (.call or .apply) and it is being invoked immediately
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

	function scaryGhost(shriek){
		console.log(this);
		return shriek;	
	}
	scaryGhost('BOO!')
	

// Principle 2
// code example for Implicit Binding

	let myGhost  = {
		name: 'Blinky',
		color: 'Red',
		food: 'Pac-Man',

		ghostAbout: function() {
		console.log(`${this.name} is a ${this.color} ghost and likes to eat ${this.food}`);	
		}
		}
	myGhost.ghostAbout();

// Principle 3
// code example for New Binding

	function Exercise(running){
		this.workout = running;
	}
	
	let myExercise = new Exercise('Running a 5k');

	console.log(myExercise.workout);



// Principle 4
// code example for Explicit Binding


	function growl(){
		console.log(this.sound);
		}

	let myPet = {
	name: "Tony",
	species: "Tiger",
	sound: "ROAAAAR",
	}
	
	growl.call(myPet);
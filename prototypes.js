function randMax(max){
    return Math.trunc(1E9 * Math.random()) % max;
}

//console.log(randMax(5));

var reel = {
    symbols: ['x','y','z','w','$','*','<','@'],
    spin() {
        if(this.position == null) {
            this.position = randMax(this.symbols.length -1);
        }

        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },

    display() {
        if(this.position == null) {
            this.position = randMax(this.symbols.length -1);
        }

        return this.symbols[this.position];
    }
};

// console.log(reel.display());

var slotMachine = {
    reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
    spin: function() {
        this.reels.forEach((reel) => {
        reel.spin();
    })},
    display: function() {
        
        console.log('start:' + this.reels[0].position);
        this.reels[0].position = (this.reels[0].position + 1) % this.reels[0].symbols.length;
        console.log('end:' + this.reels[0].position);
        
        /*this.reels.forEach((reel) => {
        reel.position = (reel.position === 0 ? reel.symbols.length +1: reel.position--);
        var prev = reel.display() + ' | ';
        reel.position = reel.position + 1;
        var current = reel.display() + ' | ';
        reel.position = reel.position +1;
        var next = reel.display();

        console.log(prev + current + next);
    })*/}
};

slotMachine.spin();
slotMachine.display();

// tip:  this points to the top level object first always regardless of where it is set...
/*
var root = {
    name(name) {
        this.name = name; // Does this set name on root?  Only if accessed directly
    },
    talk() {
        return this.name; // Does this return its own name?  Ony if access directly
    }
};

var node1 = Object.create(root);
var node2 = Object.create(root);
var node3 = Object.create(root);

node1.name('one'); // Creates a name on node1
node2.name('two');
node3.name('three');

console.log(node1); // { name: 'one'}

console.log(node1.talk()); // Talk returns node1's name!
console.log(node2.talk());
console.log(node3.talk());

*/
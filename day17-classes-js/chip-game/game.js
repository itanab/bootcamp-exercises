import { runInThisContext } from "vm";

/*
Now think about the entire game in terms of objects. What in the game can be represented as an object?

exercise
The Game
Define a constructor Game which will represent the current game that is being played.

Give it all necessary properties to be able to describe every possible state of the game.

exercise
The Chip
Define a constructor Chip which will represent one chip in the game.

What properties should it have to completely describe it's state? Give them to it.

exercise
Rendering a chip */

class Game {
    constructor(chips){
        this.score = 0;
        this.chips = chips;
    }

/* To the Game add a new method addChip(value, x, y)

It will create a new Chip object on the right coordinates and display it on the board.

Then call it multiple times with different values to produce multiple chips in various places and with various values. */

    addChip(value, x, y){
        const chip = new Chip(value,x,y);
        chip.render();
    }

}

class Chip{

/*To the Chip add a new method render()

It will handle displaying the chip within the game field based on it's properties. Try to implement it yourself. */

    constructor(value, x, y){
        this.value = value;
        this.x = x;
        this.y = y;
    }

    render (){
        this.element = document.createElement('div');
        this.element.className = 'chip';
        this.element.innerHTML = (
            `<div id="chip">1</div>`
        );
        
        const clickChip = this.element.querySelector('#chip');
        clickChip.addEventListener('click', () => {
        clickChip.style.display = ('none');
        });

        }

        mount(parent){
            this.render();
            parent.appendChild(this.element);
        }

    }


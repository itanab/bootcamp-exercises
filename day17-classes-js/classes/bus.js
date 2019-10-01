/*Exercise 2: Bus
Create a class called Bus representing a bus going from Prague to Vienna. The bus will have these properties

direction - whether it is going from Prague to Vienna or from Vienna to Prague
stations - on array of stations like this: Praha, Jihlava, Brno, Břeclav, Vídeň.
seats - number of seats in the bus,
passengers - number of passenger aboard the bus
last_station - the index of last station the bus stopped in.*/


class Bus {
    constructor(directioin, stations, seats, passengers, last_station){
        this.directioin = directioin;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }
/*
    In the class Bus create these methods:

    current() returns the name of the station the bus last stopped in
    next() sets the last_station index to the next station,
    board(count) board count new passengers to the bus. If the number of passenger would be greater the     the number of seats after calling this method, just board only as many to fit in the bus.
    uboard(count) unboard count passengers from the bus. If the count is greater then the number of  passengers in the bus just unboard those that are inside. */    

    current(){
        return this.last_station;
    };

    next(){
        this.last_station++;
    }

    board(count){
        const freeSeats = this.seats - this.passengers;
        if(freeSeats >= count){
            this.passengers +=count;
        }else{
            this.passengers += freeSeats;
        }
    }

    unboard(count){
        if(this.passengers >= count){
            this.passengers -= count;
        }else{
            this.passengers -= this.passengers;
        }

    }
}
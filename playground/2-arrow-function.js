// const square = function(x) { return x * x }

// const square = (x) => { return x * x }

const square = (x) => x * x
console.log(square(3))

const event = {
    name: 'Super-Party',
    guestList: ['Adam', 'Bob', 'Carl'],
    printGuestList() { 
        this.guestList.forEach((guest) =>
            console.log(guest + ' is attending ' + this.name + '.'))
    }
}

event.printGuestList()

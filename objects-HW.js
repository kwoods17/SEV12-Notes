
// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
 const dreamVehicle ={
    make: "Tesla",
    model: "Roadster",
    year: 2023,
    color: "Silver",
    electric: true,
    features: ["Autopilot", "Ludicrous Mode"],
    price: 150000,
    insurance: null
}

// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(dreamVehicle.make)
console.log(dreamVehicle.model)
console.log(dreamVehicle.year)


// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamVehicle['color'])
console.log(dreamVehicle['electric'])
console.log(dreamVehicle['features'])


// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(dreamVehicle.numOfSeats) //This will come back as undefined.


// 5.   Add a new key-value pair to the vehicle. 
dreamVehicle['Topspeed'] = 250

// 6.   Using bracket-notation update a property on the vehicle. 
dreamVehicle['color'] = "Blue"

// 7.   Using dot-notation update a property on the vehicle. 
dreamVehicle.price = 365000

// 8.   Create a method for turning your vehicle on
dreamVehicle.isOn = false
dreamVehicle.turnOn = function () {dreamVehicle.isOn = true}
// 9.   Create a method for turning your vehicle off

dreamVehicle.turnOff = function () {dreamVehicle.isOn = false}
//10.   
//      a. Check if your vehicle is on (it should be off)
console.log(dreamVehicle)
//      b. Start your vehicle
dreamVehicle.turnOn()

//      c. Check if your vehicle is on (it should be on)
console.log(dreamVehicle.isOn)
//      d. Stop your vehicle
dreamVehicle.turnOff()
//      e. Check if your vehicle is on (it should be on)
console.log(dreamVehicle.isOn)





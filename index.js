let store = {trips: [], drivers: [], passengers: []}
let tripId = 0
let passengerId = 0
let driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)

  }
  trips() {
    return store.trips.filter(trip => {return trip.driverId === this.id})
  }
  passengers() {
    let array = []
    this.trips().forEach(function(element) {array.push(element.passenger())})
    return array
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {return trip.passengerId === this.id})
  }
  drivers() {
    let array = []
    this.trips().forEach(function(element) {array.push(element.driver())})
    return array
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId})
  }
  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId})
  }

}

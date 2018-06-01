const store = {drivers: [], passengers: [], trips: []};

// Driver
let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    const trips = this.trips();
    return store.passengers.filter(passenger => {
      for(let trip of trips) {
        if(passenger.id === trip.passengerId) {
          return passenger;
        }
      }
    })
  }
}

// Passenger
let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    const trips = this.trips();
    return store.drivers.filter(driver => {
      for(let trip of trips) {
        if(driver.id === trip.driverId) {
          return driver;
        }
      }
    })
  }
}

// Trip
let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}

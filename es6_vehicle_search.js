const vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2023"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2023"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];
const displayVehicles = (car) =>
  console.log(car.licenseNo, car.type, car.color);
// Which vehicles are RED?
const redVehicles = vehicles.filter((car) => car.color === "Red");
redVehicles.forEach(displayVehicles);
console.log("---");
// Which vehicles have registrations that are expired?
const expiredPlate = vehicles.filter(
  (car) => car.registrationExpires < new Date()
);
expiredPlate.forEach(displayVehicles);
console.log("---");
// Which vehicles that hold at least 6 people?
const sixCapacity = vehicles.filter((car) => car.capacity >= 6);
sixCapacity.forEach(displayVehicles);
// Which vehicles have license plates that end with "222"
const plateEndsWith222 = vehicles.filter((car) =>
  car.licenseNo.endsWith("222")
);
plateEndsWith222.forEach(displayVehicles);

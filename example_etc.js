let car = {
  name: "sonata",
  ph: 120,
  sn: 1232123123,
  date: new Date(),
};

// const printCar = (name, ph, sn, date) => {
//   console.log(name, ph, sn, date);
// };
const printCar = (car) => {
  const { name, ph, sn, date } = car;
  //...
  console.log(name, ph, sn, date);
};

printCar(car);

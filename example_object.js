let car = {
  name: "sonata",
  ph: 120,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop!");
  },
};

console.log(car.name);
car.start();

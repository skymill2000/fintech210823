let cars = ["sonata", "bmw", "porter", 100];
//public String[] cars = new String[5];
for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  console.log(car);
}

for (car of cars) {
  console.log(car);
}

cars.map((car) => {
  console.log(car);
});
